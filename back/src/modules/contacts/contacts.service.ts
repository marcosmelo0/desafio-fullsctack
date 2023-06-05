/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { IContactsRepository } from './repositories/contacts.repository';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(private contactsRepository: IContactsRepository) {}

  async create(createContactDto: CreateContactDto, userId: string) {
    const findContact = await this.contactsRepository.findOne(
      createContactDto.email,
    );

    if (findContact && findContact.user_id === userId) {
      throw new ConflictException('Você já cadastrou esse contato');
    }

    const user = await this.contactsRepository.create(createContactDto, userId);

    return user;
  }

  async findAll(userId: string) {
    const contacts = await this.contactsRepository.findAll(userId);
    return contacts;
  }


  async findOne( userId: string): Promise<Contact | undefined> {
    const user = await this.contactsRepository.findOne(userId);
    return user;
  }

  async update(id: string, updatecontactDto: UpdateContactDto) {
    const user = await this.contactsRepository.update(id, updatecontactDto);
    return user;
  }

  async remove(id: string) {
    await this.contactsRepository.delete(id);
    return;
  }
}
