import React from "react"
import BackNavigation from "../components/molecules/BackNavigation/BackNavigation.component"
import styles from "./Question.module.scss"

const Question = () => {
  const handleBackClick = () => {}

  return (
    <div className={styles["question-container"]}>
      <BackNavigation
        title="Konu Tarama Testi #1"
        onBackClick={handleBackClick}
      />
    </div>
  )
}
export default Question
