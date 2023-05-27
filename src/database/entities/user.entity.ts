import { Column, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity, MessageEntity } from ".";

export class UserEntity extends BaseEntity {
    @Column()
    nome!: string 

    @Column()
    email!: string 

    @Column()
    senha!: string 

    @OneToMany(() => MessageEntity, (fk) => fk.user)
    @JoinColumn({name: "id", referencedColumnName: "user_id"})
    messages?: MessageEntity[]
}