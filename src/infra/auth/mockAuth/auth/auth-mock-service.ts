import { ValidateUserTokenService } from '../../../../data/protocols/auth/validate-user-token-service'
import { authMock } from '../helpers/auth-mock-helper'

export class AuthMockService implements ValidateUserTokenService {
  async validate (token: string): Promise<boolean> {
    return await authMock.verifyToken(token)
  }
}
