import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./AnswerToggle.module.scss"
import Switch from "../../../../../components/atoms/Switch/Switch.component"

const AnswerToggle = ({label}) => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div className={styles.answerToggleContainer}>
      <span className={styles.label}>{label}</span>
      <Switch isOn={isOn} handleToggle={handleToggle} />
    </div>
  )
}

AnswerToggle.propTypes = {
  label: PropTypes.string.isRequired,
}

export default AnswerToggle
