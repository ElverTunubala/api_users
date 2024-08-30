import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
// import { RegisterAuthDto } from 'src/auth/dto/register.dto';

export class CreateUserDto {
    
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsDateString()
  birthdate: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  id_nationality: number;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsArray()
  @IsString({ each: true })
  roles: string[];

}
