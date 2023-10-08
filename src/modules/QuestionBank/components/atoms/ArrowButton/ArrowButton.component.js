import React from "react"
import PropTypes from "prop-types"
import styles from "./ArrowButton.module.scss"
import Icon from "../../../../../components/atoms/Icon/Icon.component"

const ArrowButton = ({direction, onClick}) => {
  return (
    <div className={styles.arrowButton} onClick={onClick}>
      <Icon name={`arrow-${direction}`} />
    </div>
  )
}

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ArrowButton
