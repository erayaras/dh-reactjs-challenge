import PropTypes from "prop-types"
import React from "react"
import BubbleHeader from "../../molecules/BubbleHeader/BubbleHeader.component"
import BubbleRow from "../../molecules/BubbleRow/BubbleRow.component"
import styles from "./BubbleSheet.module.scss"

const BubbleSheet = ({
  lessonName,
  questions,
  selectedOptions,
  currentQuestionNumber,
}) => {
  return (
    <div className={styles.bubbleSheet}>
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
