import { MedicationsResponse } from "../interface/medicationsInterface"
import { RegisterMedication } from "../interface/registerMedication"
import { BaseAPI } from "./baseAPI";

export class MedicationService {
    static async getMedications({ page = 1, limit = 10 }: { page?: number, limit?: number }): Promise<MedicationsResponse> {
        return BaseAPI().get(`medications?page=${page}&limit=${limit}`)
            .then(({ data }) => data)
            .catch((error) => (error));
    }

    //POST medications
    static async postMedications(data: RegisterMedication): Promise<any> {
        return BaseAPI().post(`medications`, data)
            .then(({ data }) => data)
            .catch((error) => (error));
    }
}
