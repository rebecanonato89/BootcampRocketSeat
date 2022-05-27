import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('ongs')
class Ong {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    whatsapp: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Ong
