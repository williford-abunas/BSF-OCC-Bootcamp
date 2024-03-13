import Post from '../models/post.js'

//Post request
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

//Get all request
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json({
      count: posts.length,
      posts,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//Get single request
export const getSinglePost = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findById({ _id: id })
    if (!post) return res.status(400).json({ error: 'No post found.' })
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//Patch request/Update
export const updatePost = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    )
    if (!post)
      return res.status(404).json({
        error: 'No matching post found!',
      })

    res.status(200).json({
      message: 'The post has been updated.',
      post,
    })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

//Delete single post
export const deletePost = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findByIdAndDelete({ _id: id })
    if (!post)
      return res.status(404).json({
        error: 'No matching post found!',
      })
    res.status(200).json({
      message: 'The post has been successfully deleted.',
      post,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
