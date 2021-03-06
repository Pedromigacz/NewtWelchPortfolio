import React, { useState } from "react"
import { motion } from "framer-motion"
import * as styles from "../styles/FloatingTagInput.module.sass"

const FloatingTagInput = ({ label, onChange, value, textArea, name }) => {
  const [labelFocused, setLabelFocused] = useState(false)
  return (
    <span className={styles.inputContainer}>
      <motion.label
        initial={{ y: 36 }}
        animate={{ y: value || labelFocused ? 10 : 36 }}
      >
        {label}
      </motion.label>
      {textArea ? (
        <textarea
          name={name}
          rows="8"
          cols="54"
          onFocus={e => setLabelFocused(true)}
          onBlur={e => setLabelFocused(false)}
          type="text"
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          name={name}
          onFocus={e => setLabelFocused(true)}
          onBlur={e => setLabelFocused(false)}
          type="text"
          onChange={onChange}
          value={value}
        />
      )}
    </span>
  )
}

export default FloatingTagInput
