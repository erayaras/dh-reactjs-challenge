import React from "react"
import styles from "./QuestionBadge.module.scss"
import PropTypes from "prop-types"

const QuestionBadge = ({lessonName, questionNumber}) => {
  return (
    <div className={styles.questionBadge}>
      <span className={styles.fixedText}>Soru:{lessonName}</span>
      <span className={styles.dynamicNumber}>#{questionNumber}</span>
    </div>
  )
}

QuestionBadge.propTypes = {
  lessonName: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired,
}

export default QuestionBadge
