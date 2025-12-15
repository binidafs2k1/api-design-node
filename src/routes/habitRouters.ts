import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
  res.json({ message: req.params.id })
})

router.post('/', (req, res) => {
  res.json({ message: 'created habits' }).status(201)
})

router.post('/:id', (req, res) => {
  res.json({ message: `created habits with id ${req.params.id}` }).status(201)
})

router.delete('/:id', (req, res) => {
  res.json({ message: `deleted habits with id ${req.params.id}` }).status(204)
})

export default router
export { router }
