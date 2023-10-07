import PropTypes from "prop-types"
import React from "react"
import Icon from "../../../../../components/atoms/Icon/Icon.component"
import styles from "./BubbleHeader.module.scss"

const BubbleHeader = ({iconName, label, questionCount}) => {
  return (
    <div className={styles["bubble-header"]}>
      <Icon name={iconName} />
      <div className={styles["lesson"]}>
        <span className={styles["label"]}>{label}</span>
        <span className={styles["question-count"]}>{questionCount} soru</span>
      </div>
    </div>
  )
}

BubbleHeader.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  questionCount: PropTypes.string.isRequired,
}

export default BubbleHeader
