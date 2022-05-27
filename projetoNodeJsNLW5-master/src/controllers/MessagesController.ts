import { Request, Response } from "express"; //Utilizados para verificar a tipagem
import { MessagesService } from '../services/MessagesService';


class MessagesController {

    async createMessages(request: Request, response: Response): Promise<Response> {
        const { admin_id, user_id, text } = request.body;

        const messagesService = new MessagesService();
        try {
            const message = await messagesService.create({ admin_id, user_id, text });
            return response.json(message);
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }
    }


    async showMessages(request: Request, response: Response) {
        const messagesService = new MessagesService();

        try {
            const setting = await messagesService.show();

            return response.json(setting);
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }
    }

    async showByUsers(request: Request, response: Response) {
        const { id } = request.params;

        const messagesService = new MessagesService();
        try {
            const messages = await messagesService.listByUser(id);

            return response.json(messages);
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }
    }
}

export { MessagesController };