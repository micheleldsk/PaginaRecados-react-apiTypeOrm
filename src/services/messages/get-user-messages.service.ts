import { messageRepository } from "../../repositories";

export class GetUserMessagesService {
    async execute(userId: string) {
        const userMessages = await messageRepository.getUserMessages(userId);

        return userMessages;
    }
}