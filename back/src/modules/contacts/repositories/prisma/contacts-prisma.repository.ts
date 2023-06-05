/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { IContactsRepository } from '../contacts.repository';

@Injectable()
export class ContactPrismaRepository implements IContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });

    const findContact = await this.prisma.contact.findFirst({
      where: {
        email: contact.email,
        userId: userId
      }
    })

    if(findContact) {
      throw new ConflictException('Você já cadastrou esse contato');
    }
    
    const newContact = await this.prisma.contact.create({
      data: {... contact, userId},
    });

    return newContact
  }
  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });

    return contact
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async findOne(userId: string): Promise<Contact> {
    return;
  }
  async findAll(userId: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: {
        userId: userId
      }
    })
    return contacts;
  }
}
