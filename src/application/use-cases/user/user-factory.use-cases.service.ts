import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/user/user.dto';
import { User } from 'src/domain/entities';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return user;
  }
}
