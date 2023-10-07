import React from "react"
import Button from "../../../../../components/atoms/Button"
import styles from "./QuestionNavigation.module.scss"

const QuestionNavigation = ({onPrevClick, onNextClick}) => {
  return (
    <div className={styles["question-navigation"]}>
      <Button
        label="Önceki Soru"
        theme="navigation"
        icon="chevron-left"
        iconPosition="left"
        onClick={onPrevClick}
      />
      <Button
        label="Sonraki Soru"
        theme="navigation"
        icon="chevron-right"
        iconPosition="right"
        onClick={onNextClick}
      />
    </div>
  )
}

export default QuestionNavigation
