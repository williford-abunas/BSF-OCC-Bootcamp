import Post from '../models/post.js'

export const createPost = async (req, res) => {
  const { title, author, description, likes, comments } = req.body

  try {
    const post = await Post.create({
      title,
      author,
      description,
      likes,
      comments,
    })
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
