import { CreateUsersDto } from 'src/users/dto/create-users.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
