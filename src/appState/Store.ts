import {configureStore} from '@reduxjs/toolkit';
import {appSlice} from './AppSlice';

// Main App Store

// Store might have to be exposed for a HOST,
// so we define it as default
const store = configureStore({

    reducer: {
        appState: appSlice.reducer
    },

    devTools: true

});

export default store;
