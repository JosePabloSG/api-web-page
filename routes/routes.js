// FIXME:  rutas terminadas esperando para revision
import { Router } from 'express'
import { WebController } from '../controllers/web.controller.js'

export const createWebRouter = ({ WebModel }) => {
  const WebRouter = Router()
  const webControllerInstance = new WebController({ WebModel })

  WebRouter.get('/', webControllerInstance.getAll)
  WebRouter.get('/:id', webControllerInstance.getById)
  WebRouter.post('/', webControllerInstance.create)
  WebRouter.put('/:id', webControllerInstance.update)
  WebRouter.delete('/:id', webControllerInstance.delete)

  return WebRouter
}
