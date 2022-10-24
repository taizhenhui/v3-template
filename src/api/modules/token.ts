import type {TokenRequest} from '@/api/types'
import request from '../axios'

export const createToken = (tokenRequest: TokenRequest): Promise<string> => {
  return request.post( '/tokens', tokenRequest )
}
