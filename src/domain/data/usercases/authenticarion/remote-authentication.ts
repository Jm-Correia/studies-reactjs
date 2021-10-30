import { Authentication, AuthenticationParams } from '@/domain/usescases/authentication'
import { HttpPostClient } from '@/domain/data/protocols/http/http-post-client'
import { HttpStatusCode } from '../../protocols/http/http-response'
import { InvalidCredentialError } from '@/domain/error/invalid-credential-error'
import { UnexpectedError } from '@/domain/error/unexpected-error'
import { AccountModel } from '@/domain/models/account-model'

export class RemoteAuthentication implements Authentication {
  constructor (private readonly url: string,
    private readonly httpClient: HttpPostClient<AuthenticationParams, AccountModel>) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.noContent: return httpResponse.body
      case HttpStatusCode.unathorized: throw new InvalidCredentialError()
      default: throw new UnexpectedError()
    }
  }
}
