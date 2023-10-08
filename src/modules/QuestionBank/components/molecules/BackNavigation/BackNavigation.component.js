import React from "react"
import PropTypes from "prop-types"
import ArrowButton from "../../atoms/ArrowButton"
import Heading from "../../atoms/Heading"
import styles from "./BackNavigation.module.scss"

const BackNavigation = ({title, onBackClick}) => {
  return (
    <div className={styles.backNavigation}>
      <ArrowButton direction="left" onClick={onBackClick} />
      <Heading level="2">{title}</Heading>
    </div>
  )
}

BackNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  onBackClick: PropTypes.func.isRequired,
}

export default BackNavigation
