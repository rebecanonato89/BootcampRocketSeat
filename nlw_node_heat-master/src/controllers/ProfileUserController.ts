import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';


class ProfileUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const service = new ProfileUserService();

        try {
            const result = await service.execute(user_id);

            return response.json(result);
        } catch (error: any) {
            return response.json(error.message);
        }

    }
}

export { ProfileUserController };