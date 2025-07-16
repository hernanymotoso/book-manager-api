export interface ValidateUserTokenService {
  validate: (token: string) => Promise<boolean>
}
