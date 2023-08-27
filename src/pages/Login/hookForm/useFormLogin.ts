import { LoginService } from "../../../service/LoginService";
import { ILogin } from "../../../interface/LoginInterface";
import { useUserData } from "../../../hooks/useUserData";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/login.schema";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

export const useFormLogin = () => {
    const resolverMemoSchemaLogin = useMemo(() => loginSchema, []);
    
    const { setTokenAction } = useUserData();

    const { control, handleSubmit } = useForm<ILogin>({
        mode: "onBlur",
        resolver: yupResolver(resolverMemoSchemaLogin),
    });

    const onSubmit = (data: ILogin) => {
        LoginService.login(data).then((response) => {
            setTokenAction(response.token);
        });
    }

    return {
        control,
        onSubmit: handleSubmit(onSubmit)
    };

}
