type BaseConstructor = { apiKey: string; bearerToken?: never } | { apiKey?: never; bearerToken?: string }

class Base {
  apiKey: string
  bearerToken: string
  authHeader: string

  constructor({ apiKey, bearerToken }: BaseConstructor) {
    if (!apiKey && !bearerToken) throw new Error('Missing Authentication')
    this.apiKey = apiKey || ''
    this.bearerToken = bearerToken || ''
    this.authHeader = ''

    if (apiKey) {
      this.authHeader = 'Basic ' + Buffer.from(`${apiKey}:$x`, 'binary').toString('base64')
    }

    if (bearerToken) {
      this.authHeader = `Bearer ${bearerToken}`
    }
  }
}

export default Base
