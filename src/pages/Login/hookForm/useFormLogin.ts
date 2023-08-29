import { LoginService } from "../../../service/loginService";
import { ILogin } from "../../../interface/LoginInterface";
import { useUserData } from "../../../hooks/useUserData";
import { useLoading } from "../../../hooks/useLoading";
import { yupResolver } from "@hookform/resolvers/yup";
import { RouterEnum } from "../../../Enum/routerEnum"
import { loginSchema } from "../schema/login.schema";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
export const useFormLogin = () => {
    const resolverMemoSchemaLogin = useMemo(() => loginSchema, []);
    const navigation = useNavigate();
    const { setTokenAction } = useUserData();
    const { setLoadingAction } = useLoading();
    const { control, handleSubmit } = useForm<ILogin>({
        mode: "onBlur",
        resolver: yupResolver(resolverMemoSchemaLogin),
    });

    const onSubmit = (data: ILogin) => {
        setLoadingAction(true);
        LoginService.login(data).then(({ token }) => {
            setTokenAction(token);
            navigation(RouterEnum.HOME);
        })
            .finally(() => {
                setLoadingAction(false);
            });
    }

    return {
        control,
        onSubmit: handleSubmit(onSubmit)
    };
}
