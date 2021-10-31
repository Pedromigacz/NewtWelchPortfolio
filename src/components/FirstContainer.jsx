import React, { useState, useEffect } from "react"
import * as styles from "../styles/FirstContainer.module.sass"
import { AnimatePresence, motion } from "framer-motion"

const FirstContainer = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) setScrolled(true)
      else setScrolled(false)
    })
  }, [])

  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleOne}>Hanlo, I am</span>
          <span className={styles.titleTwo}>
            <span className={styles.titleFirstName}>NEWT</span>{" "}
            <span className={styles.titleSecondName}>WELCH</span>
          </span>
        </h1>
      </div>
      <AnimatePresence>
        {!scrolled && (
          <motion.a
            href="#sectionTwo"
            className={styles.buttonContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={styles.portfolioButton}>PORTFOLIO</button>
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FirstContainer
