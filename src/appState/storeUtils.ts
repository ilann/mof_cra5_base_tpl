import {Action,  ThunkAction} from '@reduxjs/toolkit';
import  {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import store from './Store';


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType, RootState, unknown, Action<string>>

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
