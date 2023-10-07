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
      <Route path="/" element={<Homepage />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/question-bank/question" element={<QuestionBank />} />
      <Route path="/practice-exams" element={<PracticeExams />} />
      <Route path="/guidance-videos" element={<GuidanceVideos />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route
        path="/measurement-evaluation"
        element={<MeasurementEvaluation />}
      />
      <Route path="/cozucu-app" element={<CozucuApp />} />
      <Route path="/simdi-anladim-app" element={<SimdiAnladimApp />} />
      <Route path="/kocum-yanimda-app" element={<KocumYanimdaApp />} />
      <Route path="/feedback-suggestions" element={<FeedbackSuggestions />} />
    </Routes>
  )
}

export default AppRoutes
