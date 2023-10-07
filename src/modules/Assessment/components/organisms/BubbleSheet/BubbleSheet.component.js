import PropTypes from "prop-types"
import React from "react"
import BubbleHeader from "../../molecules/BubbleHeader/BubbleHeader.component"
import BubbleRow from "../../molecules/BubbleRow/BubbleRow.component"
import styles from "./BubbleSheet.module.scss"

const BubbleSheet = ({questions}) => {
  return (
    <div className={styles.bubbleSheet}>
      <BubbleHeader
        iconName="lesson-turkish"
        label="Türkçe"
        questionCount="15"
      />
      {questions.map((question, index) => (
        <BubbleRow
          key={question.id}
          questionNumber={index + 1}
          options={question.options}
          selectedOption={question.selectedOption}
          onSelect={(optionId) => {
            // Handle option selection logic here
          }}
        />
      ))}
    </div>
  )
}

BubbleSheet.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      selectedOption: PropTypes.string,
    })
  ).isRequired,
}

export default BubbleSheet
