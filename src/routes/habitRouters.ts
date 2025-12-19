import { Router } from 'express'
import { validateBody, validateParam } from '../middleware/validation.ts'
import { z } from 'zod'

const createHabitSchema = z.object({
  name: z.string(),
})

const completeParamsSchema = z.object({
  id: z.string().max(3),
})

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
  res.json({ message: req.params.id })
})

router.post('/', validateBody(createHabitSchema), (req, res) => {
  res.json({ message: 'created habits' }).status(201)
})

router.post('/:id', validateParam(createHabitSchema), (req, res) => {
  res.json({ message: `created habits with id ${req.params.id}` }).status(201)
})

router.delete(
  '/:id/complete',
  validateParam(createHabitSchema),
  validateBody(completeParamsSchema),
  (req, res) => {
    res.json({ message: `deleted habits with id ${req.params.id}` }).status(204)
  }
)

export default router
