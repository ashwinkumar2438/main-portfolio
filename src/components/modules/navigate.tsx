// css imports:
import styles from  'src/styles/modules/navigate.module.scss';

// component imports:
import Text from '../atoms/text';

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
                        <div className={ styles.line }></div>
                        <a href={ id }>
                            <Text>{ name }</Text>
                        </a>
                    </li>
                ) )
            }
        </ul>
    )
};


export default Navigate;