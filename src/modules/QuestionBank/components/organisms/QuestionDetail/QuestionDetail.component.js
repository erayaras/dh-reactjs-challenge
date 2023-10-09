import React from "react"
import PropTypes from "prop-types"
import styles from "./QuestionDetail.module.scss"
import OptionsList from "../../molecules/OptionsList/OptionsList.component"
import QuestionDetailHeader from "../../molecules/QuestionDetailHeader/QuestionDetailHeader.component"

const QuestionDetail = ({
  lessonName,
  questionNumber,
  question,
  onOptionSelect,
  selectedOption,
}) => {
  return (
    <div className={styles.questionDetailContainer}>
      <div className={styles.headerAndQuestion}>
        <QuestionDetailHeader
          lessonName={lessonName}
          questionNumber={questionNumber}
        />

        <p className={styles.description}>{question?.description}</p>
        <p className={styles.question}>{question?.questionText}</p>
      </div>
      <OptionsList
        options={question?.options}
        correctAnswerId={question?.correctAnswerId}
        onOptionSelect={onOptionSelect}
        selectedOption={selectedOption}
      />
    </div>
  )
}

QuestionDetail.propTypes = {
  question: PropTypes.shape({
    description: PropTypes.string,
    questionText: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

export default QuestionDetail
