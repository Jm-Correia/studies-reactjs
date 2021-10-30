import { AuthenticationParams } from '@/domain/usescases/authentication'
import { HttpPostClient } from '@/domain/data/protocols/http/http-post-client'
import { HttpStatusCode } from '../../protocols/http/http-response'
import { InvalidCredentialError } from '@/domain/error/invalid-credential-error'

export class RemoteAuthentication {
  constructor (private readonly url: string,
    private readonly httpClient: HttpPostClient) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized: throw new InvalidCredentialError()
      default: return Promise.resolve()
    }
  }
}
