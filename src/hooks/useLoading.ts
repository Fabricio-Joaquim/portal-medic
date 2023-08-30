import { useAppDispatch, useAppSelector } from "@store/hookRedux"
import { setLoading } from "../store/Loading"
import { RootState } from "@store/index";

export const useLoading = () => {

    const dispatch = useAppDispatch();
    const loading = useAppSelector((state: RootState) => state.loading.loading);
    const setLoadingAction = (loading: boolean) => dispatch(setLoading(loading));

    return { loading, setLoadingAction };
}
