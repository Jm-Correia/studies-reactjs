import { Authentication, AuthenticationParams } from '@/domain/usescases/authentication'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialError, UnexpectedError } from '@/domain/error'
import { AccountModel } from '@/domain/models'

export class RemoteAuthentication implements Authentication {
  constructor (private readonly url: string,
    private readonly httpClient: HttpPostClient<AuthenticationParams, AccountModel>) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.noContent: return httpResponse.body
      case HttpStatusCode.unathorized:throw new InvalidCredentialError()
      default: throw new UnexpectedError()
    }
  }
}
