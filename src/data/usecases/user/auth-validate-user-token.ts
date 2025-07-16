import { ValidateUserToken } from '../../../domain/usecases/user/validate-user-token'
import { ValidateUserTokenService } from '../../protocols/auth/validate-user-token-service'

export class AuthValidateUserToken implements ValidateUserToken {
  constructor (private readonly validateUserTokenService: ValidateUserTokenService) {}

  async validate (token: string): Promise<boolean> {
    return await this.validateUserTokenService.validate(token)
  }
}
