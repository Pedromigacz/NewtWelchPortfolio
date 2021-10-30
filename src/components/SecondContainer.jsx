import React from "react"
import * as styles from "../styles/SecondContainer.module.sass"

const SecondContainer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cardDiv}>Image 1</div>
      <div className={styles.cardDiv}>Image 2</div>
      <div className={styles.cardDiv}>Image 3</div>
      <div className={styles.cardDiv}>Image 4</div>
      <div className={styles.cardDiv}>Image 5</div>
    </section>
  )
}

export default SecondContainer
