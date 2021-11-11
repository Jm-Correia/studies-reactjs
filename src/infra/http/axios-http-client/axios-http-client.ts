import { HttpPostClient, HttpPostParams, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
      try {
        const httpCliente = await axios.post(params.url, params.body)
        return {
          statusCode: httpCliente.status,
          body: httpCliente.data
        }
      } catch (err) {
        return {
          statusCode: err.response.status
        }
      }
  }
}
