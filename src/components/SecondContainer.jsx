import React from "react"
import * as styles from "../styles/SecondContainer.module.sass"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SecondContainer = ({ setModal }) => {
  const {
    allContentfulProject: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          description {
            raw
          }
          title
          id
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: TRACED_SVG
            )
          }
          presentation {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              layout: FULL_WIDTH
              quality: 100
            )
            title
          }
        }
      }
    }
  `)

  return (
    <section className={styles.section} id="sectionTwo">
      {nodes.map(project => (
        <button
          className={styles.cardDiv}
          onClick={() => {
            setModal(project)
          }}
        >
          <GatsbyImage image={getImage(project.image)} alt={project.title} />
          <p className={styles.openProjectButton}>
            <span className={styles.porjectDetailsText}>See more</span>
          </p>
        </button>
      ))}
    </section>
  )
}

export default SecondContainer
