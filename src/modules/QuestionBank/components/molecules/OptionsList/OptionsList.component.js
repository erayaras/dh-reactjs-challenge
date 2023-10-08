import PropTypes from "prop-types"
import React from "react"
import Option from "../Option/Option.component"
import styles from "./OptionsList.module.scss"

const OptionsList = ({
  options,
  correctAnswerId,
  onOptionSelect,
  selectedOption,
}) => {
  return (
    <div className={styles.optionsList}>
      {options?.map((option) => (
        <Option
          key={option.id}
          option={option}
          selectedOption={selectedOption}
          isSelected={selectedOption === option.id}
          onOptionSelect={() => onOptionSelect(option.id)}
          correctAnswerId={correctAnswerId}
        />
      ))}
    </div>
  )
}

OptionsList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  correctAnswerId: PropTypes.string.isRequired,
}

export default OptionsList
