import ICreateOngDTO from "../../dtos/ICreateOngDTO";
import Ong from "../../models/Ong";

export default interface IOngsRepository {
    create(data: ICreateOngDTO): Promise<Ong>;
    find(id: string): Promise<Ong | undefined>;
}
