import { registerMedicationSchema } from "../schema/registerMedication.schema";
import { RegisterMedication } from "../../../interface/registerMedication";
import { formatOptionsSelect } from "../../../helpers/formatOptionsSelect";
import { ManufacturerService } from "../../../service/manufacturerService"
import { optionsSelect } from "../../../interface/optionsSelect";
import { MedicationService } from "@services/medicationService";
import { objectToArray } from "@helpers/objectToArray";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const useRegisterMedication = () => {
    const resolverMemoSchemaLogin = useMemo(() => registerMedicationSchema, []);
    const [manufacture, setManufacture] = useState<optionsSelect[]>([] as optionsSelect[]);
    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors }, watch, register } = useForm<RegisterMedication>({
        mode: "onBlur",
        resolver: yupResolver(resolverMemoSchemaLogin),
    });

    useEffect(() => {
        ManufacturerService.getManufacturers().then(({ data }) => {
            const format = formatOptionsSelect(data, 'name', 'name');
            setManufacture(format);
        });
    }, [])

    const onSubmit = (data: RegisterMedication) => {
        const manufactoreFormated = objectToArray(data.manufacturers)
        const dataFormated = {
            ...data,
            manufacturers: manufactoreFormated
        }

        MedicationService.postMedications(dataFormated).then(() => {
            navigate(-1)
        })
    }

    return {
        control,
        onSubmit: handleSubmit(onSubmit),
        manufactureOptions: manufacture,
        errors,
        watch,
        register
    };

}
