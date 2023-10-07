// @ts-nocheck
import React, {useEffect, useState} from "react"
import BackNavigation from "../components/molecules/BackNavigation/BackNavigation.component"
import QuestionNavigation from "../components/molecules/QuestionNavigation/QuestionNavigation.component"
import BubbleSheet from "../components/organisms/BubbleSheet/BubbleSheet.component"
import QuestionDetail from "../components/organisms/QuestionDetail/QuestionDetail.component"
import questionsData from "./../../../data/questions.json"
import styles from "./Question.module.scss"

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

      <div className={styles["main"]}>
        {currentQuestion && <QuestionDetail question={currentQuestion} />}

        <BubbleSheet questions={questionsData} />
      </div>

      <QuestionNavigation />
    </div>
  )
}

export default Question
