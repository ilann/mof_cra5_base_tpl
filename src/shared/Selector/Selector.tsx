import {memo} from 'react';
import {useRootSelector} from '../../appState/storeUtils';

interface SelectorProps {
    selector: (res: any) => any;
    // selector: any;
    children: (data: any) => React.ReactElement
}


function Selector({selector, children}: SelectorProps) {

    const selectorResult = useRootSelector(selector);

    return children(selectorResult);

}

const SelectorMemo = memo(Selector);

export default SelectorMemo;
