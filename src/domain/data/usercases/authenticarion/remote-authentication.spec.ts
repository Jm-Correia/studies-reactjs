import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/moke-http-client'
describe('RemoteAuthentication', () => {
  test('Should call HttpClient with Correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
