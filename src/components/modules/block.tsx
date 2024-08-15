// components:
import Text from "../atoms/text"

// styles:
import styles from 'src/styles/modules/block.module.scss';

// types:
import type { ReactNode } from "react"

type Props = {
    experience: string,
    title: string,
    company: string,
    description: ReactNode,
    tags: { name: string }[]
}

export const Block = ( {
    experience,
    title,
    company,
    description,
    tags
}: Props ) => {

    return (
        <div className={ styles.block }>
            <div className={ styles.left }>
                <Text className={ styles.experience }>{ experience }</Text>
            </div>
            <div className={ styles.right }>
                <h4>
                    <Text>{ title }</Text>
                    <span className={ styles.dot }></span>
                    <Text>{ company }</Text>
                </h4>
                <Text className={ styles.description }>{ description }</Text>
                <div className={ styles.tags }></div>
            </div>
        </div>
    )
}