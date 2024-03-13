import { User } from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUpUser = async (req, res) => {
  const { username, password } = req.body
  try {
    //Check username if exist
    const exists = await User.findOne({ username })
    if (exists)
      return res.status(400).json({ error: 'Username alreadt in use.' })
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      username,
      password: hashedPassword,
    })

    res.status(201).json({ newUser })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const loginUser = async (req, res) => {
  const { username, password } = req.body
  try {
    const exists = await User.findOne({ username })
    if (!exists) return res.status(400).json({ error: 'Username not found!' })
    //Check matching password
    const isPassWordMatch = await bcrypt.compare(password, exists.password)
    if (!isPassWordMatch)
      return res.status(400).json({ error: 'Incorrect Password!' })
    //Create token assign user id with id from db + secret pin
    const token = jwt.sign({ userId: exists._id }, process.env.JWT_SECRET)
    res.status(200).json({ username, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
