import express from 'express'
import {
  createPost,
  getAllPosts,
  getSinglePost,
  // deletePost,
  updatePost,
} from '../controllers/post.js'
const router = express.Router()

router.post('/', createPost)
router.get('/', getAllPosts)
router.get('/:id', getSinglePost)
router.patch('/:id', updatePost)
// router.delete('/:id', deletePost)

export default router
