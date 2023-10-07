import PropTypes from "prop-types"
import React from "react"
import styles from "./Switch.module.scss"

const Switch = ({isOn, handleToggle}) => {
  return (
    <div className={styles.switchContainer}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchCheckbox}
        id={`switch-new`}
        type="checkbox"
      />
      <label className={styles.switchLabel} htmlFor={`switch-new`}>
        <span className={styles.switchButton} />
      </label>
    </div>
  )
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
}

export default Switch
