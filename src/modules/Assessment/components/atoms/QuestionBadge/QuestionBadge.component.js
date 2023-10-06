import React from "react"
import styles from "./QuestionBadge.module.scss"
import PropTypes from "prop-types"

const QuestionBadge = ({label}) => {
  return (
    <div className={styles["question-badge"]}>
      <span>{label}</span>
    </div>
  )
}

QuestionBadge.propTypes = {
  label: PropTypes.string.isRequired,
}

export default QuestionBadge
