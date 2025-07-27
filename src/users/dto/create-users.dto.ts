import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid roles required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
