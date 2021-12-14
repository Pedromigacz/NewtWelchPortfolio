import React, { useEffect } from "react"
import * as styles from "../styles/SlideShow.module.sass"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CloseIcon from "../vectors/CloseIcon.jsx"

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return <a href={uri}>{children}</a>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
  },
}

const SlideShow = ({ modal, closeModal }) => {
  useEffect(() => {
    document.querySelector("html").style.overflow = "hidden"
  }, [])
  return (
    <div className={styles.backdrop}>
      <main className={styles.modal}>
        <section className={styles.firstSection}>
          <h1 className={styles.title}>
            {modal.title}{" "}
            <button className={styles.closeButton} onClick={closeModal}>
              <CloseIcon />
            </button>
          </h1>
          <p>{renderRichText(modal.description, richTextOptions)}</p>
        </section>
        <section className={styles.imagesContainer}>
          {modal.presentation &&
            modal.presentation.map((slide, key) => (
              <GatsbyImage image={getImage(slide)} alt={slide} key={key} />
            ))}
        </section>
        <div className={styles.spacer} />
      </main>
    </div>
  )
}

export default SlideShow
