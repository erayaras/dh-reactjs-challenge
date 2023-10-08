import React from "react"
import PropTypes from "prop-types"
import styles from "./Option.module.scss"
import RadioButton from "../../atoms/RadioButton/RadioButton.component"
import Button from "../../../../../components/atoms/Button"

const Option = ({
  option,
  selectedOption,
  isSelected,
  onOptionSelect,
  correctAnswerId,
}) => {
  const isCorrect = option.id === correctAnswerId
  const shouldHighlightCorrect =
    selectedOption && selectedOption !== correctAnswerId && isCorrect

  const handleNavigateSolutionVideoClick = (e) => {
    e.stopPropagation() // Prevent triggering the option's onClick
  }

  return (
    <div
      className={`${styles.option} ${
        isSelected
          ? isCorrect
            ? styles.correct
            : styles.incorrect
          : shouldHighlightCorrect
          ? styles.highlightCorrect
          : ""
      }`}
    >
      <div className={styles.optionContent}>
        <RadioButton
          id={option?.id}
          name="questionOption"
          isSelected={isSelected}
          isCorrect={isCorrect}
          shouldHighlightCorrect={shouldHighlightCorrect}
        />

        <span>
          {option?.id?.toUpperCase()})&nbsp;&nbsp;
          <span dangerouslySetInnerHTML={{__html: option?.text || ""}} />
        </span>
      </div>

      {shouldHighlightCorrect ? (
        <Button
          label="Çözüm Videosu"
          theme="gradient"
          icon={"play"}
          onClick={handleNavigateSolutionVideoClick}
        />
      ) : null}

      {!selectedOption && (
        <Button
          hoverVisible
          label="Cevapla"
          theme="solid"
          className={styles.hoverButton}
          onClick={() => onOptionSelect(option?.id)}
        />
      )}
    </div>
  )
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  selectedOption: PropTypes.string,
  onOptionSelect: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
}

export default Option
