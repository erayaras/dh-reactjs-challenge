import React from "react"
import Button from "../../../../../components/atoms/Button"
import styles from "./QuestionDetailToolBar.module.scss"

const QuestionDetailToolBar = () => {
  return (
    <div className={styles.questionDetailToolbar}>
      <Button theme={"tool"} icon={"brush"} />
      <Button theme={"tool"} icon={"zoom-in"} />
      <Button theme={"tool"} icon={"zoom-out"} />
      <Button theme={"tool"} icon={"alert-circle"} />
    </div>
  )
}

export default QuestionDetailToolBar
