'use client';

import styles from 'src/styles/atoms/text.module.scss';
import classNames from 'classnames';

// type imports:
import type { ReactNode } from "react";

type Props = {
    children: ReactNode,
    className?: string
}


const Text = ( { children, className } : Props ) => {
    return ( <p className={ classNames( styles.text, className ) }>{ children }</p> )
}

export default Text;