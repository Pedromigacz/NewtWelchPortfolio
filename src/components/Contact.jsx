import React, { useState } from "react"
import ContactIcon from "../vectors/ContactIcon.jsx"
import * as styles from "../styles/Contact.module.sass"
import { FloatingTagInput } from "./"
import CloseIcon from "../vectors/CloseIcon.jsx"
import { AnimatePresence, motion } from "framer-motion"
import axios from "axios"

const ContactForm = ({ closeModal }) => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [feedback, setFeedback] = useState({ message: "", success: false })

  const handleSubmit = event => {
    event.preventDefault()
    if (loading) {
      return
    }
    setLoading(true)

    if (!form.name) {
      setFeedback({ message: "Missing Name!", success: false })
      return setLoading(false)
    }
    if (!form.message) {
      setFeedback({ message: "Missing message!", success: false })
      return setLoading(false)
    }

    axios
      .request({
        method: "POST",
        url: "/",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: new URLSearchParams({
          "form-name": "contact",
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Message: form.message,
        }),
      })
      .then(e => {
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setFeedback({ message: "Message sent successfully!", success: true })
        setLoading(false)
      })
      .catch(err => {
        setFeedback({ message: "Something went wrong!", success: false })
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form
        className={styles.formModal}
        onSubmit={handleSubmit}
        action="/contact"
        method="post"
        name="contact"
        data-netlify="true"
        dataNetlify="true"
        data-netlify-honeypot="bot-field"
        dataNetlifyHoneypot="bot-field"
        netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h1 className={styles.title}>
          <span>CONTACT</span>
          <button
            className={styles.closeContact}
            onClick={e => {
              e.preventDefault()
              closeModal()
            }}
          >
            <CloseIcon />
          </button>
        </h1>
        <FloatingTagInput
          name="Name"
          label="Name:"
          value={form.name}
          onChange={e => {
            setForm(prev => ({ ...prev, name: e.target.value }))
          }}
        />
        <FloatingTagInput
          name="Email"
          label="Email:"
          value={form.email}
          onChange={e => {
            setForm(prev => ({ ...prev, email: e.target.value }))
          }}
        />
        <FloatingTagInput
          name="Phone"
          label="Phone:"
          value={form.phone}
          onChange={e => {
            setForm(prev => ({ ...prev, phone: e.target.value }))
          }}
        />
        <FloatingTagInput
          name="Message"
          label="Message:"
          textArea={true}
          value={form.message}
          onChange={e => {
            setForm(prev => ({ ...prev, message: e.target.value }))
          }}
        />

        <p
          style={{ color: feedback.success ? "#00c822" : "#f12" }}
          className={styles.feedbackMessage}
        >
          {feedback.message.length > 0 && (
            <>
              {feedback.message}{" "}
              <button
                onClick={e => {
                  e.preventDefault()
                  setFeedback({ message: "", success: "" })
                }}
              >
                X
              </button>
            </>
          )}
        </p>
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
    <>
      <AnimatePresence>
        {open ? (
          <ContactForm closeModal={closeModal} key="70" />
        ) : (
          <button
            className={styles.contactButton}
            onClick={() => setOpen(true)}
          >
            <ContactIcon />
          </button>
        )}
      </AnimatePresence>
      <form
        style={{ display: "none" }}
        type="hidden"
        action="/contact"
        method="post"
        name="contact"
        data-netlify="true"
        dataNetlify="true"
        data-netlify-honeypot="bot-field"
        dataNetlifyHoneypot="bot-field"
        netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="Name" />
        <input type="hidden" name="Email" />
        <input type="hidden" name="Phone" />
        <input type="hidden" name="Message" />
      </form>
    </>
  )
}

export default Contact
