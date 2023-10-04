import React from "react"
import PropTypes from "prop-types"
import Icon from "../../../../../components/atoms/Icon/Icon.component"
import styles from "./NavButton.module.scss"

const NavButton = ({iconName, onClick}) => {
  return (
    <div className={styles["nav-button"]} onClick={onClick}>
      <Icon name={iconName} />
    </div>
  )
}

NavButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default NavButton
