import { useAppSelector, useAppDispatch } from "@store/hookRedux"
import { cleanToken, setToken } from "../store/userData"
import { RootState } from "@store/index";

export const useUserData = () => {

    const dispatch = useAppDispatch();
    const token = useAppSelector((state: RootState) => state.userData.token)
    const setTokenAction = (token: string) => dispatch(setToken(token));

    const cleanTokenAction = () => dispatch(cleanToken());

    return { token, setTokenAction, cleanTokenAction };
}
