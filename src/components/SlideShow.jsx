import React from "react"
import * as styles from "../styles/SlideShow.module.sass"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
  return (
    <div className={styles.backdrop}>
      <main className={styles.modal}>
        <section className={styles.firstSection}>
          <h1 className={styles.title}>{modal.title}</h1>
          <p>{renderRichText(modal.description, richTextOptions)}</p>
        </section>
        <section>
          {modal.presentation &&
            modal.presentation.map((slide, key) => (
              <GatsbyImage image={getImage(slide)} alt={slide} key={key} />
            ))}
        </section>
      </main>
    </div>
  )
}

export default SlideShow
