import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRoutes from './server/routes/post.js'
dotenv.config()

const app = express()

//Middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)

  if (req.body) {
    console.log('Request body:')
    console.log(req.body)
  }
  next()
})

//Routes
app.use('/api/posts/', postRoutes)

//Connect to MOngoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected successfully to MongoDB')
  })
  .catch((error) => {
    console.log('Error in connecting to DB:', error.message)
  })

//Starting server
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
