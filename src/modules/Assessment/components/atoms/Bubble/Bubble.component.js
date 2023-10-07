import React from "react"
import PropTypes from "prop-types"
import styles from "./Bubble.module.scss"

const Bubble = ({isSelected, onClick, label}) => {
  return (
    <div
      className={`${styles.bubble} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {label.toUpperCase()}
    </div>
  )
}

Bubble.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default Bubble
