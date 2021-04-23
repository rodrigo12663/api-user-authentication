import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    cpf:string

    @Column()
    password:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
