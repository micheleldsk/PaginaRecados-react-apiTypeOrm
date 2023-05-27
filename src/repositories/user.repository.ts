import { UserEntity } from "../database/entities";
import { pgHelper } from "../database/pg-helper";
import { User } from "../models";

class UserRepository {

    async addUser(user: User) {
        
        const manager = pgHelper.client.manager
        const newUser = manager.create(UserEntity, user)
        
        return await manager.save(newUser) 
    }

    async checkValidEmail(email: string) {
        const manager = pgHelper.client.manager
        const validEmail = await manager.findOne(UserEntity, {where:{email}})

        return !!validEmail
    }

    async login(email: string, password: string) {
        const manager = pgHelper.client.manager
        const user = await manager.findOne(UserEntity, {where:{email, password}})
                
        return user 

    }

    async checkUserId(userId: string) {
        const manager = pgHelper.client.manager
        const user = await manager.findOne(UserEntity, {where:{id: userId}})
                
        return !!user
    }
}

export const userRepository = new UserRepository();