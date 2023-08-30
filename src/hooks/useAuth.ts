import { useAppDispatch, useAppSelector } from "@store/hookRedux"
import { changeAuth, cleanAuth } from "@store/userData"
import { RootState } from "@store/index";

export const useAuth = () => {

    const dispatch = useAppDispatch();
    const isAuth = useAppSelector((state: RootState) => state.userData.auth)
    const changeAuthAction = (auth: boolean) => dispatch(changeAuth(auth));

    const cleanAuthAction = () => dispatch(cleanAuth());

    return { isAuth, changeAuthAction, cleanAuthAction };
}

