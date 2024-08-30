import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNationalityDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}