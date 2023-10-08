import React from "react"
import {Route, Routes} from "react-router-dom"

import Homepage from "./QuestionBank/pages/Question.component"
import Lessons from "./QuestionBank/pages/Question.component"
import QuestionBank from "./QuestionBank/pages/Question.component"
import PracticeExams from "./QuestionBank/pages/Question.component"
import GuidanceVideos from "./QuestionBank/pages/Question.component"
import Statistics from "./QuestionBank/pages/Question.component"
import MeasurementEvaluation from "./QuestionBank/pages/Question.component"
import CozucuApp from "./QuestionBank/pages/Question.component"
import SimdiAnladimApp from "./QuestionBank/pages/Question.component"
import KocumYanimdaApp from "./QuestionBank/pages/Question.component"
import FeedbackSuggestions from "./QuestionBank/pages/Question.component"

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home/:lessonName/:testName/:testNumber/:questionNumber"
        element={<Homepage />}
      />
      <Route
        path="/lessons/:lessonName/:testName/:testNumber/:questionNumber"
        element={<Lessons />}
      />
      <Route
        path="/question-bank/:lessonName/:testName/:testNumber/:questionNumber"
        element={<QuestionBank />}
      />
      <Route
        path="/practice-exams/:lessonName/:testName/:testNumber/:questionNumber"
        element={<PracticeExams />}
      />
      <Route
        path="/guidance-videos/:lessonName/:testName/:testNumber/:questionNumber"
        element={<GuidanceVideos />}
      />
      <Route
        path="/statistics/:lessonName/:testName/:testNumber/:questionNumber"
        element={<Statistics />}
      />
      <Route
        path="/measurement-evaluation/:lessonName/:testName/:testNumber/:questionNumber"
        element={<MeasurementEvaluation />}
      />
      <Route
        path="/cozucu-app/:lessonName/:testName/:testNumber/:questionNumber"
        element={<CozucuApp />}
      />
      <Route
        path="/simdi-anladim-app/:lessonName/:testName/:testNumber/:questionNumber"
        element={<SimdiAnladimApp />}
      />
      <Route
        path="/kocum-yanimda-app/:lessonName/:testName/:testNumber/:questionNumber"
        element={<KocumYanimdaApp />}
      />
      <Route
        path="/feedback-suggestions/:lessonName/:testName/:testNumber/:questionNumber"
        element={<FeedbackSuggestions />}
      />
    </Routes>
  )
}

export default AppRoutes
