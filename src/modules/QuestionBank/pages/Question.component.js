// @ts-nocheck
import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {
  getDisplayLessonName,
  getDisplayTestName,
} from "../../../utils/urlConverters"
import AssessmentActions from "../components/molecules/AssessmentActions/AssessmentActions.component"
import BackNavigation from "../components/molecules/BackNavigation/BackNavigation.component"
import QuestionNavigation from "../components/molecules/QuestionNavigation/QuestionNavigation.component"
import BubbleSheet from "../components/organisms/BubbleSheet/BubbleSheet.component"
import QuestionDetail from "../components/organisms/QuestionDetail/QuestionDetail.component"
import questionsData from "./../../../data/questions.json"
import styles from "./Question.module.scss"

const Question = () => {
  const navigate = useNavigate()

  const [currentQuestion, setCurrentQuestion] = useState(null)

  const {lessonName, testName, testNumber} = useParams()
  const questionNumber = Number(useParams().questionNumber)
  const displayLessonName = getDisplayLessonName(lessonName)
  const displayTestName = getDisplayTestName(testName)

  useEffect(() => {
    setCurrentQuestion(questionsData[questionNumber - 1])
  }, [questionNumber])

  const handleBackClick = () => {}

  const handlePrevClick = () => {
    if (questionNumber > 1) {
      navigate(
        `/question-bank/${lessonName}/${testName}/${testNumber}/${
          Number(questionNumber) - 1
        }`
      )
    }
  }

  const handleNextClick = () => {
    if (questionNumber < questionsData.length) {
      navigate(
        `/question-bank/${lessonName}/${testName}/${testNumber}/${
          Number(questionNumber) + 1
        }`
      )
    }
  }

  return (
    <div className={styles["question-container"]}>
      <div className={styles["question"]}>
        <BackNavigation
          title={`${displayTestName} Testi #${testNumber}`}
          onBackClick={handleBackClick}
        />

        {currentQuestion && (
          <QuestionDetail
            lessonName={displayLessonName}
            questionNumber={questionNumber}
            question={currentQuestion}
          />
        )}

        <QuestionNavigation
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>

      <div className={styles["answer"]}>
        <AssessmentActions />
        <BubbleSheet lessonName={displayLessonName} questions={questionsData} />
      </div>
    </div>
  )
}

export default Question
