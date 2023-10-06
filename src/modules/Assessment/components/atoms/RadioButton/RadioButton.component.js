import React from "react"
import PropTypes from "prop-types"
import styles from "./RadioButton.module.scss"

const RadioButton = ({
  id,
  name,
  isSelected,
  isCorrect,
  shouldHighlightCorrect,
}) => {
  let styleClass = styles.radioButton // Default

  if ((isSelected && isCorrect === true) || shouldHighlightCorrect) {
    styleClass = `${styles.radioButton} ${styles.correct}`
  } else if (isSelected && isCorrect === false) {
    styleClass = `${styles.radioButton} ${styles.incorrect}`
  } else if (isSelected) {
    styleClass = `${styles.radioButton} ${styles.selected}`
  }

  return (
    <div className={styleClass}>
      <input type="radio" id={id} name={name} checked={isSelected} />
    </div>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  isCorrect: PropTypes.bool, // If null, the answer has not been submitted yet
}

export default RadioButton
