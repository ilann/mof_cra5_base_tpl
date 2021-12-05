import React, {useCallback} from 'react';
import styles from './App.module.css';
import SideBar from './features/SideBar/SideBar';
import NavBar from './features/NavBar/NavBar';
import {useAppDispatch} from './appState/storeUtils';
import {AppActions} from './appState/AppSlice';

import Selector from './shared/Selector/Selector';

import * as AppSelectors from './appState/AppSelectors';
// import {useSelector} from 'react-redux';
import {DebugData} from './types/DebugData';

function App() {

    const dispatch = useAppDispatch();

    // const debugData = useSelector(AppSelectors.debugDataSelector);


    const debugTestHandler = useCallback(ev => {

        console.log('ddddd', ev);

        dispatch(AppActions.debugAction({
            ts: Date.now(),
            message: 'miaw',
            data: [1, 2, 3],
            origin: 'app'
        }))
    }, [dispatch]);


    return (
        <div className={styles.App}>
            <div className={styles.header}>Header</div>
            <div className={styles.nav}>
                <NavBar>
                    <button onClick={debugTestHandler}>1</button>
                    <Selector selector={AppSelectors.debugDataSelector}>
                        {(d: DebugData) => <div>[{d.ts}]</div>}
                    </Selector>
                </NavBar>
            </div>
            <div className={styles.sideBar}>
                <SideBar/>
            </div>
            <div className={styles.content}>Contetn</div>
            <div className={styles.footer}>footer</div>
        </div>
    );
}

export default App;
