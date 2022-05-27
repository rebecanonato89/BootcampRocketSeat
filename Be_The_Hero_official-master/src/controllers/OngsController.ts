import { Request, Response } from "express";
import CreateOngService from "../services/CreateOngsService";



export default class OngController {

    public async create(request: Request, response: Response) {

        const { name, email, whatsapp, city, uf } = request.body;

        const createOngService = new CreateOngService();

        const ongs = createOngService.execute({ name, email, whatsapp, city, uf });

        return response.status(201).json(ongs);
    }


}