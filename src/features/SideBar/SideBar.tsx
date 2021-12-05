import styles from './SideBar.module.css';
import {memo, ReactNode} from 'react';

export interface SideBarProps {
    children?: ReactNode
}

// Do not use that React.FC<Props> form.
// It is not considered best practice

const SideBar = ({children}: SideBarProps) => {


    return (
        <div className={styles.SideBar}>
            <div>Side bar</div>
            <div>
                {children}
            </div>
        </div>
    );
}


const SideBarMemo = memo(SideBar);

// Always use default if we're about the expose a component
export default SideBarMemo;
