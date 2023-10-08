import React from "react"
import PropTypes from "prop-types"
import styles from "./Bubble.module.scss"

const Bubble = ({isSelected, label}) => {
  return (
    <div className={`${styles.bubble} ${isSelected ? styles.selected : ""}`}>
      {label.toUpperCase()}
    </div>
  )
}

Bubble.propTypes = {
  isSelected: PropTypes.bool,

  label: PropTypes.string.isRequired,
}

export default Bubble
