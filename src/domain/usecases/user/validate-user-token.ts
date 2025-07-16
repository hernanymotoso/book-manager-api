export interface ValidateUserToken {
  validate: (token: string) => Promise<boolean>
}
