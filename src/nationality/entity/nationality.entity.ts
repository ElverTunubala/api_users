import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Nationality {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    //Una nacionalidad puede estar asociada a varios usuario
    @OneToMany(() => UserEntity, user => user.nationality)
    users: UserEntity[];
}
