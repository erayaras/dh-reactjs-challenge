import PropTypes from "prop-types"
import React from "react"
import Bubble from "../../atoms/Bubble/Bubble.component"
import styles from "./BubbleRow.module.scss"

const BubbleRow = ({questionNumber, options, selectedOption}) => {
  return (
    <div className={styles.bubbleRow}>
      <span className={styles.questionLabel}>{questionNumber}.soru</span>
      {options.map((option) => (
        <Bubble
          key={option.id}
          label={option.id}
          isSelected={selectedOption === option.id}
        />
      ))}
    </div>
  )
}

BubbleRow.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
}

export default BubbleRow
