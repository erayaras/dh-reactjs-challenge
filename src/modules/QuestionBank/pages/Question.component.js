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
  const {
    lessonName,
    testName,
    testNumber: testNum,
    questionNumber: questionNum,
  } = useParams()
  const testNumber = Number(testNum)
  const questionNumber = Number(questionNum)
  const displayLessonName = getDisplayLessonName(lessonName)
  const displayTestName = getDisplayTestName(testName)

  const [selectedOptions, setSelectedOptions] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [questionsForCurrentTest, setQuestionsForCurrentTest] = useState([])

  useEffect(() => {
    const questionsForLesson = questionsData[lessonName]
    const questionsForTest = questionsForLesson?.[testName]
    const questionsForTestNumber = questionsForTest?.[testNumber]
    const specificQuestion = questionsForTestNumber?.[questionNumber - 1]

    if (!specificQuestion) {
      navigate("/404")
      return
    }

    setCurrentQuestion(specificQuestion)
    setTotalQuestions(questionsForTestNumber.length)
    setQuestionsForCurrentTest(questionsForTestNumber)
  }, [lessonName, testName, testNumber, questionNumber, navigate])

  const navigateToQuestion = (num) => {
    navigate(`/question-bank/${lessonName}/${testName}/${testNumber}/${num}`)
  }

  const handleOptionSelect = (questionNumber, optionId) => {
    setSelectedOptions((prev) => ({...prev, [questionNumber]: optionId}))
  }

  const handleBackClick = () => {}

  const handlePrevClick = () => {
    if (questionNumber > 1) navigateToQuestion(questionNumber - 1)
  }

  const handleNextClick = () => {
    if (questionNumber < questionsForCurrentTest.length)
      navigateToQuestion(questionNumber + 1)
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
          totalQuestions={totalQuestions}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
      <div className={styles.answer}>
        <AssessmentActions />
        <BubbleSheet
          lessonName={displayLessonName}
          questions={questionsForCurrentTest}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          currentQuestionNumber={questionNumber}
        />
      </div>
    </div>
  )
}

export default Question
