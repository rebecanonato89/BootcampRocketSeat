import { Request, Response } from "express"; //Utilizados para verificar a tipagem
import { getCustomRepository } from "typeorm";
import { SettingsService } from '../services/SettingsService';


class SettingsController {

    async createSetting(request: Request, response: Response) {
        //Retirando as informações do request body
        const { username, chat } = request.body;

        const settingsService = new SettingsService();


        try {
            const setting = await settingsService.create({ chat, username });

            return response.json(setting);
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }
    }

    async showSetting(request: Request, response: Response) {

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.show();

            return response.json(settings);
        } catch (err) {
            return response.status(400).json({ message: err.message });
        }
    }
}

export { SettingsController };