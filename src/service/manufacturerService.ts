import { api } from "./baseAPI"

export class ManufacturerService {
    static async getManufacturers(): Promise<any> {
        return api.get(`manufacturers`)
            .then(({ data }) => data)
            .catch((error) => (error));
    }
}
