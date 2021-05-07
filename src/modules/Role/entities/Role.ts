import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('roles')
export default class Role {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @Column()
    description:string;

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
