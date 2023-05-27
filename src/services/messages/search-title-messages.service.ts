import { messageRepository } from "../../repositories";

export class SearchTitleMessagesService {
    async execute(userId:string, title: string) {
        const filteredMessages = await messageRepository.searchByTitle(userId, title);

        return filteredMessages;
    }
}