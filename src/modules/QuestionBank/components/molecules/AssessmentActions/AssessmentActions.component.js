import React from "react"
import Button from "../../../../../components/atoms/Button"
import AnswerToggle from "../../molecules/AnswerToggle/AnswerToggle.component"
import styles from "./AssessmentActions.module.scss"

const AssessmentActions = () => {
  return (
    <div className={styles.assessmentActionsContainer}>
      <AnswerToggle label="Cevapları Göster" />
      <Button
        label="Testi Bitir"
        theme="end-test"
        icon="off"
        iconPosition="left"
      />
    </div>
  )
}

export default AssessmentActions
