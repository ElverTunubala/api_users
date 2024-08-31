import { IsArray, IsDateString, IsEmail, IsNotEmpty,IsString } from 'class-validator';
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
  birthdate: string;  //la fecha esta en un formato de cadena compatible con ISO 8601 (1990-05-15)

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  id_nationality: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsArray()
  @IsString({ each: true })
  roles: string[];

}
