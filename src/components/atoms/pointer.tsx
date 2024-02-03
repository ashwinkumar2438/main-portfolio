'use client';
import { useEffect, useState } from "react";

// style imports:
import styles from 'src/styles/atoms/pointer.module.scss';

// type imports:
import { CSSProperties } from "react";

type Position = [ number, number ]

const Pointer = () => {
    const [ pointer, setPointer ] = useState< boolean >( false );
    const [ position, setPosition ] = useState< Position | null >( null );


    useEffect( () => {
        const mouseActive = window.matchMedia( '(pointer:fine)' )?.matches;
        setPointer( mouseActive );
        console.log( mouseActive );
        if( !mouseActive )return;

        document.addEventListener( 'mousemove', ( e ) => {
            const [ x, y ] = [ e?.clientX, e?.clientY ];
            if( !x && !y )return;
            setPosition( [ x, y ] );
        })
    }, [] )
    
    if( !pointer )return null;

    return (
        <div 
            className={ styles.pointer }
            style={ !position ? {} : {
                '--left': `${ position[ 0 ] }px`,
                '--top': `${ position[ 1 ] }px`
            } as CSSProperties }
        ></div>
    )
}


export default Pointer;