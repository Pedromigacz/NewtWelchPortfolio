import React from "react"
import * as styles from "../styles/SecondContainer.module.sass"
import { graphql, useStaticQuery, Link } from "gatsby"
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
        <div className={styles.cardDiv}>
          <GatsbyImage image={getImage(project.image)} alt={project.title} />
          <Link className={styles.projectLink} to={`/projects/${project.id}`}>
            <span className={styles.porjectDetailsText}>Project details</span>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default SecondContainer
