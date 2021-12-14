import React, { useState } from "react"
import ContactIcon from "../vectors/ContactIcon.jsx"
import * as styles from "../styles/Contact.module.sass"
import { FloatingTagInput } from "./"
import CloseIcon from "../vectors/CloseIcon.jsx"
import { AnimatePresence, motion } from "framer-motion"

const ContactForm = ({ closeModal }) => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form className={styles.formModal}>
        <h1 className={styles.title}>
          <span>CONTACT</span>
          <button className={styles.closeContact} onClick={closeModal}>
            <CloseIcon />
          </button>
        </h1>
        <FloatingTagInput
          label="Name:"
          value={form.name}
          onChange={e => {
            setForm(prev => ({ ...prev, name: e.target.value }))
          }}
        />
        <FloatingTagInput
          label="Email:"
          value={form.email}
          onChange={e => {
            setForm(prev => ({ ...prev, email: e.target.value }))
          }}
        />
        <FloatingTagInput
          label="Phone:"
          value={form.phone}
          onChange={e => {
            setForm(prev => ({ ...prev, phone: e.target.value }))
          }}
        />
        <FloatingTagInput
          label="Message:"
          textArea={true}
          value={form.message}
          onChange={e => {
            setForm(prev => ({ ...prev, message: e.target.value }))
          }}
        />
        <button type="submit" className={styles.submitButton}>
          {loading ? "Loading..." : "SEND"}
        </button>
      </form>
    </motion.div>
  )
}

const Contact = () => {
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open ? (
        <ContactForm closeModal={closeModal} key="70" />
      ) : (
        <button className={styles.contactButton} onClick={() => setOpen(true)}>
          <ContactIcon />
        </button>
      )}
    </AnimatePresence>
  )
}

export default Contact
