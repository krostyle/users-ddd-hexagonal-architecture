import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserUseCasesService } from '../../../application/use-cases/user/';
import { UserFactoryService } from 'src/application/use-cases/user';
import { CreateUserDto } from '../../../application/dtos/user/user.dto';
import { CreateUserResponseDto } from '../../../application/dtos/user/create-user-response.dto';

@Controller('api/user')
export class UserController {
  constructor(
    private userUseCasesService: UserUseCasesService,
    private userFactoryService: UserFactoryService,
  ) {}

  @Get()
  async getAllUsers() {
    return await this.userUseCasesService.getAllUsers();
  }
  @Get(':id')
  async getUserById(id: string) {
    return await this.userUseCasesService.getUserById(id);
  }
  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    const createUserResponse = new CreateUserResponseDto();
    try {
      const user = this.userFactoryService.createNewUser(createUserDto);
      const createdUser = await this.userUseCasesService.createUser(user);
      createUserResponse.success = true;
      createUserResponse.createdUser = createdUser;
    } catch (error) {
      createUserResponse.success = false;
    }
    return createUserResponse;
  }
}
