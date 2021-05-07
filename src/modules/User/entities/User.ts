import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Role from '../../Role/entities/Role'

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

    @ManyToOne(() => Role)
    @JoinColumn()
    role: Role;

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date
}
