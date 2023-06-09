import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import UserRoutes from './app/modules/users/users.route'
const app: Application = express()
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('App is working')
})
app.use('/api/v1/', UserRoutes)
export default app
