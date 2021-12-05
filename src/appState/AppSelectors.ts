import {RootState} from './storeUtils';
import {createSelector} from 'reselect';
// import {createSelectorCreator, defaultMemoize} from 'reselect';


const appState = (state: RootState) => state.appState;

export const debugDataSelector = createSelector(
    appState,
    a => a.debugData
)

