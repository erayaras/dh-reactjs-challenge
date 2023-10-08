// @ts-nocheck
import PropTypes from "prop-types"
import React, {useEffect, useRef} from "react"
import BubbleHeader from "../../molecules/BubbleHeader/BubbleHeader.component"
import BubbleRow from "../../molecules/BubbleRow/BubbleRow.component"
import styles from "./BubbleSheet.module.scss"

const BubbleSheet = ({
  lessonName,
  questions,
  selectedOptions,
  currentQuestionNumber,
}) => {
  const sheetRef = useRef(null)

  // This effect runs whenever the currentQuestionNumber changes
  useEffect(() => {
    // Check if the ref is attached to the DOM element
    if (sheetRef.current) {
      // Find the current question element using the `data-id` attribute
      const currentQuestionElement = sheetRef.current.querySelector(
        `[data-id="question-${currentQuestionNumber}"]`
      )
      // If found, scroll the question into view smoothly
      if (currentQuestionElement) {
        currentQuestionElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }
    }
  }, [currentQuestionNumber])

  return (
    <div className={styles.bubbleSheet} ref={sheetRef}>
      <BubbleHeader
        iconName="lesson-turkish"
        label={lessonName}
        questionCount={questions.length}
      />
      {questions.map((question, index) => (
        <BubbleRow
          key={question.id}
          questionNumber={index + 1}
          options={question.options}
          selectedOption={selectedOptions[question.id]}
          currentQuestionNumber={currentQuestionNumber}
        />
      ))}
    </div>
  )
}

BubbleSheet.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      questionText: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
      correctAnswerId: PropTypes.string.isRequired,
    })
  ).isRequired,
  lessonName: PropTypes.string.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
}

export default BubbleSheet
