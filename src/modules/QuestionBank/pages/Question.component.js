// @ts-nocheck
import React, {useEffect, useState} from "react"
import BackNavigation from "../components/molecules/BackNavigation/BackNavigation.component"
import QuestionNavigation from "../components/molecules/QuestionNavigation/QuestionNavigation.component"
import BubbleSheet from "../components/organisms/BubbleSheet/BubbleSheet.component"
import AssessmentActions from "../components/molecules/AssessmentActions/AssessmentActions.component"
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
      <div className={styles["question"]}>
        <BackNavigation
          title="Konu Tarama Testi #1"
          onBackClick={handleBackClick}
        />

        {currentQuestion && <QuestionDetail question={currentQuestion} />}

        <QuestionNavigation />
      </div>

      <div className={styles["answer"]}>
        <AssessmentActions />
        <BubbleSheet questions={questionsData} />
      </div>
    </div>
  )
}

export default Question
