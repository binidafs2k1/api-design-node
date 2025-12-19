import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'users' }).status(200)
})

router.get('/:id', (req, res) => {
  res.json({ message: `user with ${req.params.id} id` }).status(200)
})

router.put('/:id', (req, res) => {
  res.json({ message: `updated user with ${req.params.id} id` })
})

router.delete('/:id', (req, res) => {
  res.json({ message: `deleted user with ${req.params.id} id` }).status(204)
})

export default router
