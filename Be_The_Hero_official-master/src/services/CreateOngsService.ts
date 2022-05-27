import Ong from "../models/Ong";
import OngsRepository from "../repositories/OngsRepository";

interface Request {
    name: string,
    whatsapp: string,
    email: string,
    city: string,
    uf: string,
}

class CreateOngsService {
    public async execute(data: Request): Promise<Ong> {

        const ongsRepository = new OngsRepository();

        const ong = await ongsRepository.create(data);


        return ong;
    }
}

export default CreateOngsService;