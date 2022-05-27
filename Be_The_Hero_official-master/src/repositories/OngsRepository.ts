import { getRepository, Not, Repository } from 'typeorm';
import ICreateOngDTO from '../dtos/ICreateOngDTO';
import Ong from '../models/Ong';
import IOngsRepository from './interfaces/IOngsRepository';

class OngsRepository implements IOngsRepository {

    private ormRepository: Repository<Ong>;

    constructor() {
        this.ormRepository = getRepository(Ong);
    }


    async create(ongData: ICreateOngDTO): Promise<Ong> {
        const ong = this.ormRepository.create(ongData);
        await this.ormRepository.save(ong);

        return ong;
    }

    async find(id: string): Promise<Ong | undefined> {
        const ong = await this.ormRepository.findOne(id);

        return ong;
    }
}




export default OngsRepository;