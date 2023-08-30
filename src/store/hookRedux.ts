import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './';

export const useDispatchApplication = () => useDispatch<AppDispatch>();
export const useASelectorApplication: TypedUseSelectorHook<RootState> = useSelector;

