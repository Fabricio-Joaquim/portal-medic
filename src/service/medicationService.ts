import { MedicationsResponse, requestMedications } from "../interface/medicationsInterface"
import { RegisterMedication } from "../interface/registerMedication"
import { api } from "./baseAPI";

export class MedicationService {
    static async getMedications({ page = 1, limit = 10, search }: requestMedications): Promise<MedicationsResponse> {
        const searchQuery = search ? `&search=${search}` : '';

        return api.get(`medications?page=${page}&limit=${limit}${searchQuery}`)
            .then(({ data }) => data)
            .catch((error) => (error));
    }

    static async postMedications(data: RegisterMedication): Promise<any> {
        return api.post(`medications`, data)
            .then(({ data }) => data)
            .catch((error) => (error));
    }
}


