export interface RegisterMedication {
    drug_name: string;
    units_per_package: number;
    issued_on: Date;
    expires_on: Date;
    manufacturers: object;
}