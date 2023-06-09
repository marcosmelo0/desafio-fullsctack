/* eslint-disable prettier/prettier */

import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";

export abstract class IContactsRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact> | Contact;
  abstract findAll(userId: string): Promise<Contact[]> | Contact[];
  abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact;
  abstract delete(id: string): Promise<void> | void;
  abstract findOne(userId: string): Promise<Contact>;
}
