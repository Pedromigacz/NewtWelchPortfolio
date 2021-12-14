import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"

import Seo from "../components/seo"

import {
  FirstContainer,
  SecondContainer,
  SlideShow,
  Contact,
} from "../components"

const IndexPage = () => {
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <Seo title="Newt Welch portfolio" />
      <FirstContainer />
      <SecondContainer setModal={setModal} />
      <AnimatePresence>
        {modal && <SlideShow modal={modal} closeModal={closeModal} />}
      </AnimatePresence>
      <Contact />
    </>
  )
}

export default IndexPage
