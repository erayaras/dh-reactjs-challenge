import React from "react"
import PropTypes from "prop-types"
import QuestionBadge from "../../atoms/QuestionBadge"
import styles from "./QuestionDetailHeader.module.scss"
import QuestionDetailToolBar from "../../molecules/QuestionDetailToolBar/QuestionDetailToolBar.component"

const QuestionDetailHeader = ({lessonName, questionNumber}) => {
  return (
    <div className={styles.questionDetailHeader}>
      <QuestionBadge lessonName={lessonName} questionNumber={questionNumber} />
      <QuestionDetailToolBar />
    </div>
  )
}

QuestionDetailHeader.propTypes = {
  lessonName: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired,
}

export default QuestionDetailHeader
