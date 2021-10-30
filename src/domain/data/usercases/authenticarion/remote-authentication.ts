import { AuthenticationParams } from '@/domain/usescases/authentication'
import { HttpPostClient } from '@/domain/data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor (private readonly url: string,
    private readonly httpClient: HttpPostClient) {}

  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpClient.post({ url: this.url, body: params })
    return Promise.resolve()
  }
}
