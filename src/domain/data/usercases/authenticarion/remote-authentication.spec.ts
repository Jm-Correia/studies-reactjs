import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/moke-http-client'
import faker from 'faker'
import { AuthenticationParams } from '../../../usescases/authentication'

type SubTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SubTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
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
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})
