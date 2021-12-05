import {memo, ReactNode} from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
    children: ReactNode
}

function NavBar({children}: NavBarProps) {

    return (
        <div className={styles.NavBar}>
            {children}
        </div>
    )
}

const NavBarMemo = memo(NavBar);

export default NavBarMemo;
