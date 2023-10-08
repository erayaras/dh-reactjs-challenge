import PropTypes from "prop-types"
import React from "react"
import Bubble from "../../atoms/Bubble/Bubble.component"
import styles from "./BubbleRow.module.scss"

const BubbleRow = ({
  questionNumber,
  options,
  selectedOption,
  currentQuestionNumber,
}) => {
  const isCurrentQuestion = questionNumber === currentQuestionNumber
  return (
    <div
      className={`${styles.bubbleRow} ${
        isCurrentQuestion ? styles.current : ""
      }`}
    >
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
  currentQuestionNumber: PropTypes.number.isRequired,
}

export default BubbleRow
