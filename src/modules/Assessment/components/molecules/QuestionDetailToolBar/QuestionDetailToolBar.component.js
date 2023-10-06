import React from "react"
import Button from "../../atoms/Button"
import styles from "./QuestionDetailToolBar.module.scss"

const QuestionDetailToolBar = () => {
  return (
    <div className={styles["question-detail-toolbar"]}>
      <Button theme={"tool"} icon={"brush"} />
      <Button theme={"tool"} icon={"zoom-in"} />
      <Button theme={"tool"} icon={"zoom-out"} />
      <Button theme={"tool"} icon={"alert-circle"} />
    </div>
  )
}

export default QuestionDetailToolBar
