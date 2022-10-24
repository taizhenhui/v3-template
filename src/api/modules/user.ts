import type { UserType } from "../types";
import request from '../axios'

export const me = ():Promise<UserType> => {
  return request.get('/users/me')
}