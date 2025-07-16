
export const authMock = {
  verifyToken: async (token: string): Promise<boolean> => {
    return !!token
  }
}
