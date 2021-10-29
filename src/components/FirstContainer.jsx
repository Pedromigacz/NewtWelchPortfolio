import React from "react"
import * as styles from "../styles/FirstContainer.module.sass"

const FirstContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleOne}>Hanlo, I am</span>
          <span className={styles.titleTwo}>
            <span className={styles.titleFirstName}>NEWT</span>{" "}
            <span className={styles.titleSecondName}>WELCH</span>
          </span>
        </h1>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.portfolioButton}>PORTFOLIO</button>
      </div>
    </>
  )
}

export default FirstContainer
