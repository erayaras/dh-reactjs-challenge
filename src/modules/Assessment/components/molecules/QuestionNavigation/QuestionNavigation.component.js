import React from "react"
import Button from "../../atoms/Button"
import styles from "./QuestionNavigation.module.scss"

const QuestionNavigation = () => {
  return (
    <div className={styles["question-navigation"]}>
      <Button
        label="Önceki Soru"
        theme="navigation"
        icon="chevron-left"
        iconPosition="left"
      />
      <Button
        label="Sonraki Soru"
        theme="navigation"
        icon="chevron-right"
        iconPosition="right"
      />
    </div>
  )
}

export default QuestionNavigation
