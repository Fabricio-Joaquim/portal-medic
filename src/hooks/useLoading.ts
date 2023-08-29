import { setLoading } from "../store/Loading"
import { useDispatch, useSelector } from "react-redux"

export const useLoading = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.loading.loading);
    const setLoadingAction = (loading: boolean) => dispatch(setLoading(loading));

    return { loading, setLoadingAction };
}
