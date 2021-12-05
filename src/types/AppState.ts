

// This is not the ROOT STATE!
// (do not use this for the selectors)
// Use the 'rootState' for the app wide selectos

import {User} from './User';
import {AppStatus} from './AppStatus';
import {DebugData} from './DebugData';

export interface AppState {
    user: null | User;
    status: AppStatus;
    debugData: DebugData;
}
