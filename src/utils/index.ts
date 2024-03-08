const joinClasses = ( ...classes: ( string | null | undefined )[] ): string  => classes.filter( name => !!name ).join( ' ' );


export {
    joinClasses
}