import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from '../types/AppState';
import {AppStatus} from '../types/AppStatus';
import {DebugData} from '../types/DebugData';


type PayLoad<T = {}, U = T & {origin?: string}> = PayloadAction<U>;

const initialAppState: AppState = {

    user: null,

    status: AppStatus.init,

    debugData: {
        data: null,
        ts: Date.now(),
        message: ''
    }
};



export const appSlice = createSlice({
    name: 'AppState',
    initialState: initialAppState,
    reducers: {
        debugAction: (state, {payload: {data, ts, message, origin}}: PayLoad<DebugData>) => {
            console.log ('debug data @ reducer' , origin, message);

            return {
                ...state,
                debugData: {
                    data,
                    ts,
                    message
                }
            }
        }
    },
    extraReducers: {

    }
})


export const AppActions = appSlice.actions;
