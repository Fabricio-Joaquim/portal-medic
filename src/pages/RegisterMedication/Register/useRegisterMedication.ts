import { registerMedicationSchema } from "../schema/registerMedication.schema";
import { RegisterMedication } from "../../../interface/registerMedication";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

export const useRegisterMedication = () => {
    const resolverMemoSchemaLogin = useMemo(() => registerMedicationSchema, []);
    

    const { control, handleSubmit } = useForm<RegisterMedication>({
        mode: "onBlur",
        resolver: yupResolver(resolverMemoSchemaLogin),
    });

    const onSubmit = (data: RegisterMedication) => {
        console.log(data);
    }

    return {
        control,
        onSubmit: handleSubmit(onSubmit)
    };

}
