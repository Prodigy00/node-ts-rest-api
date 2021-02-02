import usersDao from '../daos/users.dao'
import {CRUD} from '../../common/interfaces/crud.interface'
import {UserDto} from '../dto/users.model'

class UsersService implements CRUD {
  private static instance: UsersService;

  static getInstance(): UsersService {
    if(!UsersService.instance){
      UsersService.instance = new UsersService();
    }
    return UsersService.instance;
  }

  async list(limit: number, page: number) {
    return await usersDao.getUsers();
  }

  async create(resource: UserDto) { 
    return await usersDao.addUser(resource)
  }

 async updateById(resourceId: UserDto) {
  return await usersDao.putUserById(resourceId);
 }

  async readById(resourceId: string){
    return await usersDao.getUserById(resourceId)
  } 

  async deleteById (resourceId: string) {
    return await usersDao.removeUserById(resourceId);
  }

  async patchById(resourceId: UserDto) {
    return await usersDao.patchUserById(resourceId);
  }

  async getUserByEmail(email: string) {
    return usersDao.getUserByEmail(email);
}

}

export default UsersService.getInstance();