/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    type: String,
    default: 'Marcos Melo',
  })
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;
  
}
