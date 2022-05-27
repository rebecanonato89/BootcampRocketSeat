import { Request, Response } from "express"; //Utilizados para verificar a tipagem
import { UsersService } from "../services/UsersService";

class UsersController {

    async createUsers(request: Request, response: Response) {

        const { email } = request.body;

        const usersService = new UsersService();
        try {
            const user = await usersService.create(email);

            return response.json(user);
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }
    }

    async showUsers(request: Request, response: Response) {
        const usersService = new UsersService();

        try {
            const users = await usersService.show();

            return response.json(users);
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }
    }
}

export { UsersController };