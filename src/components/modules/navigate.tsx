// css imports:
import styles from  'src/styles/modules/navigate.module.scss';

type Link = {
    id: string, 
    name: string
}

type Props = {
    links: Link[]
}

const Navigate = ( { links } : Props ) => {

    return (
        <ul className={ styles.navigations }>
            {
                links.map( ( { id, name } ) => (
                    <li key={ name }>
                        <a href={ id }>
                            <div className={ styles.line }></div>
                            <span>{ name }</span>
                        </a>
                    </li>
                ) )
            }
        </ul>
    )
};


export default Navigate;