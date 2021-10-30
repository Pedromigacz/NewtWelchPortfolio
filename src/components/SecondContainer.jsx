import React from "react"
import * as styles from "../styles/SecondContainer.module.sass"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SecondContainer = () => {
  const {
    allContentfulProject: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          title
          id
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  `)

  return (
    <section className={styles.section}>
      {nodes.map(project => (
        <GatsbyImage
          image={getImage(project.image)}
          alt={project.title}
          className={styles.cardDiv}
        />
      ))}
    </section>
  )
}

export default SecondContainer
