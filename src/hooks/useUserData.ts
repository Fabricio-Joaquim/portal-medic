import { useDispatchApplication, useASelectorApplication } from "@store/hookRedux"
import { cleanToken, setToken } from "../store/userData"

export const useUserData = () => {

    const dispatch = useDispatchApplication();
    const token = useASelectorApplication((state) => state.userData.token)
    const setTokenAction = (token: string) => dispatch(setToken(token));

    const cleanTokenAction = () => dispatch(cleanToken());

    return { token, setTokenAction, cleanTokenAction };
}
