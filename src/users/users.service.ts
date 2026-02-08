import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}

  findByUsername(username:string) {
    return this.prisma.user.findUnique({
      where: {username}
    })
  }
}
