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

  const [selectedOptions, setSelectedOptions] = useState({})

  const {lessonName, testName} = useParams()
  const testNumber = Number(useParams().testNumber)
  const questionNumber = Number(useParams().questionNumber)
  const displayLessonName = getDisplayLessonName(lessonName)
  const displayTestName = getDisplayTestName(testName)

  useEffect(() => {
    setCurrentQuestion(questionsData[questionNumber - 1])
  }, [questionNumber])

  const handleOptionSelect = (questionNumber, optionId) => {
    setSelectedOptions((prev) => ({...prev, [questionNumber]: optionId}))
  }

  const handleBackClick = () => {}

  const handlePrevClick = () => {
    if (questionNumber > 1) {
      navigate(
        `/question-bank/${lessonName}/${testName}/${testNumber}/${
          questionNumber - 1
        }`
      )
    }
  }

  const handleNextClick = () => {
    if (questionNumber < questionsData.length) {
      navigate(
        `/question-bank/${lessonName}/${testName}/${testNumber}/${
          questionNumber + 1
        }`
      )
    }
  }

  return (
    <div className={styles.questionContainer}>
      <div className={styles.question}>
        <BackNavigation
          title={`${displayTestName} Testi #${testNumber}`}
          onBackClick={handleBackClick}
        />

        {currentQuestion && (
          <QuestionDetail
            lessonName={displayLessonName}
            questionNumber={questionNumber}
            question={currentQuestion}
            onOptionSelect={(optionId) =>
              handleOptionSelect(questionNumber, optionId)
            }
            selectedOption={selectedOptions[questionNumber]}
          />
        )}

        <QuestionNavigation
          currentQuestionNumber={questionNumber}
          totalQuestions={questionsData.length}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>

      <div className={styles.answer}>
        <AssessmentActions />
        <BubbleSheet
          lessonName={displayLessonName}
          questions={questionsData}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          currentQuestionNumber={questionNumber}
        />
      </div>
    </div>
  )
}

export default Question
