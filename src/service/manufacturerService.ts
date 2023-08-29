import { BaseAPI } from "./baseAPI"

export class ManufacturerService {
    static async getManufacturers(): Promise<any> {
        return BaseAPI().get(`manufacturers`)
            .then(({ data }) => data)
            .catch((error) => (error));
    }
}
