import { setLoading } from "../store/Loading"
import { useDispatchApplication, useASelectorApplication } from "@store/hookRedux"

export const useLoading = () => {

    const dispatch = useDispatchApplication();
    const loading = useASelectorApplication((state) => state.loading.loading);
    const setLoadingAction = (loading: boolean) => dispatch(setLoading(loading));

    return { loading, setLoadingAction };
}
