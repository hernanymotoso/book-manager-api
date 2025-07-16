import { AuthMockService } from '../../../infra/auth/mockAuth/auth/auth-mock-service'
import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware'
import { Middleware } from '../../../presentation/protocols/middleware'

export const makeAuthMiddleware = (): Middleware => {
  const authMockService = new AuthMockService()
  return new AuthMiddleware(authMockService)
}
