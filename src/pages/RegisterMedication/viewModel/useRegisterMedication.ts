import { registerMedicationSchema } from "../schema/registerMedication.schema";
import { objectToArrayLabelIsValue } from "@helpers/objectToArrayLabelIsValue";
import { RegisterMedication } from "../../../interface/registerMedication";
import { formatOptionsSelect } from "../../../helpers/formatOptionsSelect";
import { ManufacturerService } from "../../../service/manufacturerService"
import { optionsSelect } from "../../../interface/optionsSelect";
import { MedicationService } from "@services/medicationService";
import { useLoading } from "../../../hooks/useLoading";
import { RouterEnum } from "../../../Enum/routerEnum";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useRegisterMedication = () => {
    const resolverMemoSchemaLogin = useMemo(() => registerMedicationSchema, []);
    const [manufacture, setManufacture] = useState<optionsSelect[]>([] as optionsSelect[]);
    const { setLoadingAction } = useLoading()
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterMedication>({
        mode: "onChange",
        resolver: yupResolver(resolverMemoSchemaLogin),
    });

    const searchManufacture = async () => {
        setLoadingAction(true)
        ManufacturerService.getManufacturers().then(({ data }) => {
            const formatResponseManufacture = formatOptionsSelect(data, 'name', 'name');
            setManufacture(formatResponseManufacture);
        })
            .catch(() => toast.error('Failed to load manufacturers'))
            .finally(() => setLoadingAction(false))
    }

    const onSubmit = (data: RegisterMedication) => {
        setLoadingAction(true)
        const manufactoreFormated = objectToArrayLabelIsValue(data.manufacturers)
        const dataFormated = {
            ...data,
            manufacturers: manufactoreFormated
        }

        MedicationService.postMedications(dataFormated).then(() => {
            toast.success('Medication registered successfully')
            navigate(RouterEnum.HOME)
        }).catch(() => toast.error('Failed to register medication'))
            .finally(() => setLoadingAction(false))
    }

    useEffect(() => {
        searchManufacture()
    }, [])


    return {
        control,
        onSubmit: handleSubmit(onSubmit),
        manufactureOptions: manufacture,
        errors
    };
}
