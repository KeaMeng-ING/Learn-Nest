import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dto/create-users.dto';
import { UpdateUsersDto } from 'src/users/dto/update-users.dto';

@Injectable()
export class UsersService {
  private user = [
    {
      id: 1,
      name: 'Sok Vanna',
      email: 'vanna.sok@example.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Chan Dara',
      email: 'dara.chan@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Ly Rith',
      email: 'rith.ly@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Kim Sreyleak',
      email: 'sreyleak.kim@example.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Hem Phalla',
      email: 'phalla.hem@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const roleArray = this.user.filter((user) => user.role === role);
      if (roleArray.length === 0) {
        throw new NotFoundException('No users found with the specified role');
      }
      return roleArray;
    }
    return this.user;
  }

  findOne(id: number) {
    const user = this.user.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  create(createUsersDto: CreateUsersDto) {
    const newUser = { id: this.user.length + 1, ...createUsersDto };
    this.user.push(newUser);
    return newUser;
  }

  update(id: number, updateUsersDto: UpdateUsersDto) {
    const userIndex = this.user.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.user[userIndex] = { ...this.user[userIndex], ...updateUsersDto };
      return this.user[userIndex];
    }
    return this.findOne(id);
  }

  delete(id: number) {
    const userIndex = this.user.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      const deletedUser = this.user.splice(userIndex, 1);
      return deletedUser[0];
    }
    return null;
  }
}
