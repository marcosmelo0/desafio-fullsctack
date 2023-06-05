/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ContactController } from './contacts.controller';
import { ContactService } from './contacts.service';
import { IContactsRepository } from './repositories/contacts.repository';
import { ContactPrismaRepository } from './repositories/prisma/contacts-prisma.repository';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    {
      provide: IContactsRepository,
      useClass: ContactPrismaRepository,
    },
  ],
  exports: [ContactService]
})
export class ContactModule {}
