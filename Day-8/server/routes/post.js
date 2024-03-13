import express from 'express'
import {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
} from '../controllers/post.js'
import { authMiddleWare } from '../middleware/authMiddleWare.js'

const router = express.Router()

router.post('/', authMiddleWare, createPost)
router.get('/', getAllPosts)
router.get('/:id', getSinglePost)
router.patch('/:id', authMiddleWare, updatePost)
router.delete('/:id', authMiddleWare, deletePost)

export default router
