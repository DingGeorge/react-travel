import { useSelector as useReactReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './store';

export const useSelector: TypedUseSelectorHook<RootState> = useReactReduxSelector;
