import React, {useState} from "react"
import PropTypes from "prop-types"
import Option from "../Option/Option.component"
import styles from "./OptionsList.module.scss"

const OptionsList = ({options, correctAnswerId}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId)
  }

  return (
    <div className={styles["options-list"]}>
      {options?.map((option) => (
        <Option
          key={option.id}
          option={option}
          selectedOption={selectedOption}
          isSelected={selectedOption === option.id}
          onOptionSelect={() => handleOptionSelect(option.id)}
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
