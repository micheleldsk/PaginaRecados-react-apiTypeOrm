import { messageRepository } from "../../repositories";

export class SearchStatusMessagesService {
    async execute(userId:string, active: boolean) {
        const filteredMessages = await messageRepository.searchByStatus(userId, active);

        return filteredMessages;
    }
}