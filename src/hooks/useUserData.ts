import { cleanToken, getToken, setToken } from "../store/userData"
import { useDispatch, useSelector } from "react-redux"

export const useUserData = () => {

    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const setTokenAction = (token: string) => dispatch(setToken(token));
    const cleanTokenAction = () => dispatch(cleanToken);
    
    return { token, setTokenAction, cleanTokenAction };
}
