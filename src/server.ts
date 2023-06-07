// import { Server } from 'http'
import mongoose from 'mongoose'
import config from './config/index'
import { errorLogger, successLogger } from './shared/logger'
import app from './app'

// let server: Server

async function serverConnect() {
  try {
    await mongoose.connect(config.database_url as string)
    successLogger.info('Database is connected sucessfully')

    app.listen(config.port, () => {
      successLogger.info(`Application is running on ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database', error)
  }
}

serverConnect()
