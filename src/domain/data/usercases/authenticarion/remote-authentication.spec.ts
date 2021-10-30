import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '@/domain/data/test/moke-http-client'
import faker from 'faker'
import { AuthenticationParams } from '@/domain/usescases/authentication'
import { InvalidCredentialError } from '@/domain/error/invalid-credential-error'
import { HttpStatusCode } from '@/domain/data/protocols/http/http-response'
import { UnexpectedError } from '@/domain/error/unexpected-error'
import { AccountModel } from '@/domain/models/account-model'

type SubTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SubTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

const mokeAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

const mokeHttpResult = (): AccountModel => {
  return {
    acessToken: faker.datatype.uuid()
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with Correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mokeAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })
  test('Should call HttpClient with Correct body', async () => {
    const authenticationParams = mokeAuthentication()
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok
    }
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
  test('Should throw InvalidCredentialError if HttpPost return 401', async () => {
    const authenticationParams = mokeAuthentication()
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unathorized
    }
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new InvalidCredentialError())
  })
  test('Should throw UnexpectedError if HttpPost return 400', async () => {
    const authenticationParams = mokeAuthentication()
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('Should throw UnexpectedError if HttpPost return 500', async () => {
    const authenticationParams = mokeAuthentication()
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.internalServer
    }
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel if httpPostClient returns 200', async () => {
    const authenticationParams = mokeAuthentication()
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mokeHttpResult()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.auth(authenticationParams)
    expect(account).toEqual(httpResult)
  })
})
