
import { Nationality } from 'src/nationality/entity/nationality.entity';
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

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
    id_nationality:string;

    @Column()
    phone:string;

    @Column("simple-array")
    roles: string[];

    //un usuario tiene una nacionalidad
    @ManyToOne(() => Nationality, nationality => nationality.users)
    nationality: Nationality;
    
}
