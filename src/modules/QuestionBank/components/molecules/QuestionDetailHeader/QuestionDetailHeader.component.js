import React from "react"
import PropTypes from "prop-types"
import QuestionBadge from "../../atoms/QuestionBadge"
import styles from "./QuestionDetailHeader.module.scss"
import QuestionDetailToolBar from "../../molecules/QuestionDetailToolBar/QuestionDetailToolBar.component"

const QuestionDetailHeader = ({badgeLabel}) => {
  return (
    <div className={styles.questionDetailHeader}>
      <QuestionBadge label={badgeLabel} />
      <QuestionDetailToolBar />
    </div>
  )
}

QuestionDetailHeader.propTypes = {
  badgeLabel: PropTypes.string.isRequired,
}

export default QuestionDetailHeader
