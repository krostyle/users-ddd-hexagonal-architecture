import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities';
import { IDataServices } from 'src/domain/abstract/data-services.abstract';

@Injectable()
export class UserUseCasesService {
  constructor(private dataService: IDataServices) {}

  getAllUsers(): Promise<User[]> {
    return this.dataService.users.findAll();
  }

  getUserById(id: string): Promise<User> {
    return this.dataService.users.findById(id);
  }

  createUser(user: User): Promise<User> {
    return this.dataService.users.create(user);
  }

  updateUser(id: string, user: User): Promise<User> {
    return this.dataService.users.update(id, user);
  }

  deleteUser(id: string): Promise<User> {
    return this.dataService.users.delete(id);
  }
}
