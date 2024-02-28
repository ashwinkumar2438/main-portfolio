'use client';

// type imports:
import type { ReactNode } from "react";

type Props = {
    children: ReactNode
}


const Text = ( { children } : Props ) => {
    return ( <p className="text-node">{ children }</p> )
}

export default Text;