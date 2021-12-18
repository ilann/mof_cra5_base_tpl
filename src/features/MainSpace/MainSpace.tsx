
import styles from './MainSpace.module.css';
import {memo, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

interface MainSpaceProps {

}


function Poop() {

    const test = (ev: any, ...args: any[]) => {

        console.log ('***' , ev, ...args);



    }


    return (
        <div data-c="Poop" style={{backgroundColor:'pink'}}>
            <p>erergergre</p>
            <button onClick={e => test(e)}>Click</button>
        </div>
    );
}



function MainSpace (props: MainSpaceProps) {

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [mountNode, setMountNode] = useState<HTMLElement>();

    useEffect(() => {
        // Use iframeRef for:
        // - focus managing
        // - triggering imperative animations
        // - integrating with third-party DOM libraries
        iframeRef?.current?.focus();


        const mountNode = iframeRef?.current?.contentWindow?.document.body;
        setMountNode(mountNode);

        return () => {}
    }, [])



    return (

        <div className={styles.MainSpace}>
            <iframe title='main-space' ref={iframeRef}>
                {
                    mountNode && createPortal(<Poop/>, mountNode)
                }
            </iframe>
        </div>
    )
}

const MainSpaceMemo = memo(MainSpace);

export default MainSpaceMemo;
