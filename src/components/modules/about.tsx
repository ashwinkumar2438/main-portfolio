// local imports:
import Text from "../atoms/text"

// styles:
import styles from 'src/styles/modules/about.module.scss';

const About = () => {
    return (
        <Text className={ styles.about }>
            <span>
                A never nester at heart and a monad admirer. I love solving problems and engaging in discussions to figure out the most optimal solutions. 
                I am in the constant search to find the simplest solutions to the complex problems. As Leanardo Da Vinci said: 
            </span>
            <code>"Simplicity is the ultimate sophistication"</code> 
        </Text>
    )
}


export default About;