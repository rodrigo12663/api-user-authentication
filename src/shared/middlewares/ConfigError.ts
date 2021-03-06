import { NextFunction, Request, Response } from 'express'
import AppError from '../errors/AppErrror'

export default class ConfigError {
  execute (error:Error, request:Request, response:Response, next:NextFunction) {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }
  }
}
