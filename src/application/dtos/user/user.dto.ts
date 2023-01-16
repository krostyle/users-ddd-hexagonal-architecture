import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
