import { UserModel } from '@/models'
import userData from './data/user.json'
export class UserService {
  static getUser(): UserModel {
    const user: UserModel = userData
    return user
  }
}
