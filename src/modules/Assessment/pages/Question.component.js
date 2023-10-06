// @ts-nocheck
import React, {useState, useEffect} from "react"
import BackNavigation from "../components/molecules/BackNavigation/BackNavigation.component"
import QuestionDetail from "../components/organisms/QuestionDetail/QuestionDetail.component"
import styles from "./Question.module.scss"
import questionsData from "./../../../data/questions.json"

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    // Set the first question initially
    setCurrentQuestion(questionsData[questionIndex])
  }, [questionIndex])

  const handleBackClick = () => {}

  return (
    <div className={styles["question-container"]}>
      <BackNavigation
        title="Konu Tarama Testi #1"
        onBackClick={handleBackClick}
      />
      {currentQuestion && <QuestionDetail question={currentQuestion} />}
    </div>
  )
}

export default Question
