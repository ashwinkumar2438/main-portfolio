import styles from "./page.module.scss";

// components
import Text from "src/components/atoms/text";

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
          </section>
          <section className={ styles.right }>

          </section>
      </main>
    </div>
  );
}
