import { MessageEntity } from "../database/entities";
import { pgHelper } from "../database/pg-helper";
import { Message } from "../models";

class MessageRepository {

    async addMessage(message: Message) {

        const manager = pgHelper.client.manager
        const newMessage = manager.create(MessageEntity, message)
        
        return await manager.save(newMessage) 

    }

    async getUserMessages(userId: string) {
        const manager = pgHelper.client.manager
        const userMessages = await manager.find(MessageEntity, {where:{userId}});

        return userMessages
    }

    updateMessage(id: string, title?: string, description?: string) {
        const manager = pgHelper.client.manager

            if(title) {
                manager.update(MessageEntity, {id}, {title})
            }

            if(description) {
                manager.update(MessageEntity, {id}, {description})
            }
        

        return
    }

    async toggleActiveStatus(id: string) {
        const manager = pgHelper.client.manager
        const message = await manager.findOne(MessageEntity, {where:{id}});
        manager.update(MessageEntity, {id}, {status:!message?.status})
        
        return
    }

    async searchByTitle(userId:string, filterText: string) {
        const manager = pgHelper.client.manager
        const filteredMessages = await manager.findBy(MessageEntity, {userId, title: filterText})

        return filteredMessages
    }

    async searchByStatus(userId:string, status: boolean) {
        const manager = pgHelper.client.manager
        const filteredMessages = await manager.findBy(MessageEntity, {userId, status})

        return filteredMessages
    }
    
    deleteMessage(id: string) {
        const manager = pgHelper.client.manager
        manager.delete(MessageEntity, {id})

        return
    }

    async checkMessageId(messageId: string) {
        const manager = pgHelper.client.manager
        const message = await manager.findOne(MessageEntity, {where:{id: messageId}})
                
        return !!message
    }
}

export const messageRepository = new MessageRepository();