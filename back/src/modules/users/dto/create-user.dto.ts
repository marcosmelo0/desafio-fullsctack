/* import { ApiProperty } from '@nestjs/swagger'; */
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

// data tranfer object
export class CreateUserDto {
  /*  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'Marcos Melo',
  }) */
  @IsString()
  @IsNotEmpty()
  name: string;

  /*   @ApiProperty() */
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /*   @ApiProperty() */
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;
}
