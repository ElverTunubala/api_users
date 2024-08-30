
import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'users' })
  export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
  
    @Column()
    password: string;

    @Column()
    birthdate: string;

    @Column()
    address: string;

    @Column()
    id_nationality:number;

    @Column()
    phone:string;

    @Column("simple-array")
    roles: string[];
    
    
}
