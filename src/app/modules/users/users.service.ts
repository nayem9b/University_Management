import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'

export const CreateUser = async (user: IUser): Promise<IUser | null> => {
  //Default password

  if (!user.password) {
    user.password = config.default_student_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('User not created')
  }
  return createdUser
}
