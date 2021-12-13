import React, { useState } from "react"

import Seo from "../components/seo"

import { FirstContainer, SecondContainer, SlideShow } from "../components"

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
      <SlideShow modal={modal} closeModal={closeModal} />
    </>
  )
}

export default IndexPage
