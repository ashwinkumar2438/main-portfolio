import styles from "./page.module.scss";

// components
import Text from "src/components/atoms/text";
import Navigate from "src/components/modules/navigate";
import Social from "src/components/modules/social";
import { links } from "src/consts";

export default function Home() {
  return (
    <div className={ styles.root }>
      <main className={styles.main}>
          <section className={ styles.left }>
              <div className={ styles.details }>
                <h1 className={styles.header}>Ashwin Kumar</h1>
                <h3 className={styles.subHeader}>Senior Frontend Developer at Skillovilla</h3>
                <Text>A simple developer with passion for building complex tools</Text>
              </div>
              <Navigate 
                links={ links }
              />
              <Social className={ styles.social }/>
          </section>
          <section className={ styles.right }>

          </section>
      </main>
    </div>
  );
}
