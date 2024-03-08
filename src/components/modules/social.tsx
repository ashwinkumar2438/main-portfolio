'use client';

// local imports:
import { joinClasses } from 'src/utils';

// image imports:
import SandBox from 'src/components/svgs/sandbox.svg';
import LinkedIn from 'src/components/svgs/linkedin.svg';
import Medium from 'src/components/svgs/medium.svg';
import GitHub from 'src/components/svgs/github.svg';

// style imports:
import styles from 'src/styles/modules/social.module.scss';


// type imports:
import { ComponentType } from 'react';

const socials: Array< { title: string, url: string, Icon: ComponentType< { className?: string } > } > = [
    { title: 'Medium', url: 'https://medium.com/@ashwinkumar2438', Icon: Medium },
    { title: 'CodeSandbox', url: 'https://codesandbox.io/u/ashwinkumar2438', Icon: SandBox },
    { title: 'LinkedIn', url: '', Icon: LinkedIn },
    { title: 'GitHub', url: 'https://github.com/ashwinkumar2438', Icon: GitHub }
]


type Props = {
    className?: string
}
const Social = ( { className = '' } : Props ) => {

    return (
        <ul className={ joinClasses( styles.social, className ) }>
            {
                socials.map( ( { title, url, Icon } ) => (
                    <li key={ url }>
                        <a href={ url } title={ title }>
                            <Icon className={ styles.svg } />
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Social;