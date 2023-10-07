import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Icon from "../../../../../components/atoms/Icon/Icon.component"
import styles from "./NavButton.module.scss"

const NavButton = ({iconName, to}) => {
  return (
    <Link className={styles["nav-button-link"]} to={to}>
      <Icon name={iconName} />
    </Link>
  )
}

NavButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired, // New prop type for the route path
}

export default NavButton
