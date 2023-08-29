export interface MedicationsResponse {
    data:      Datum[];
    total:     number;
    last_page: number;
}

export interface Datum {
    application_number: string;
    product_number:     string;
    form:               string | Form;
    strength:           string;
    reference_drug:     string;
    drug_name:          string;
    active_ingredient:  string;
    reference_standard: string;
}

export enum Form {
    InjectableInjection = "INJECTABLE;INJECTION",
    SolutionDropsOphthalmic = "SOLUTION/DROPS;OPHTHALMIC",
    TabletOral = "TABLET;ORAL",
}

export interface requestMedications {
    page?: number,
    limit?: number,
    search?: string
}