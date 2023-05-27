import { Column, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity, UserEntity } from ".";

export class MessageEntity extends BaseEntity {
    @Column({name: "user_id"})
    userId!: string 

    @Column()
    status!: boolean 

    @Column()
    titulo!: string 

    @Column()
    descricao!: string 

    @ManyToOne(() => UserEntity, (fk) => fk.messages)
    @JoinColumn({name: "user_id", referencedColumnName: "id"})
    user?: UserEntity
}