import { User } from '../../../domain/entities/';
export class CreateUserResponseDto {
  success: boolean;
  createdUser: User;
}
