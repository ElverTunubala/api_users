import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nationality {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
}
