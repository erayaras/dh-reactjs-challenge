import React from "react"
import PropTypes from "prop-types"
import Button from "../../../../../components/atoms/Button"
import styles from "./QuestionNavigation.module.scss"

const QuestionNavigation = ({
  currentQuestionNumber,
  totalQuestions,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className={styles["question-navigation"]}>
      <div className={currentQuestionNumber > 1 ? "" : styles["hidden"]}>
        <Button
          label="Önceki Soru"
          theme="navigation"
          icon="chevron-left"
          iconPosition="left"
          onClick={onPrevClick}
        />
      </div>
      <div
        className={
          currentQuestionNumber < totalQuestions ? "" : styles["hidden"]
        }
      >
        <Button
          label="Sonraki Soru"
          theme="navigation"
          icon="chevron-right"
          iconPosition="right"
          onClick={onNextClick}
        />
      </div>
    </div>
  )
}

QuestionNavigation.propTypes = {
  currentQuestionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
}

export default QuestionNavigation
