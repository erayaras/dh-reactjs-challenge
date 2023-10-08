import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Icon from "../../../../../components/atoms/Icon/Icon.component"
import styles from "./NavButton.module.scss"

const NavButton = ({iconName, to, isActive}) => {
  return (
    <Link className={styles.navButtonLink} to={to}>
      <div className={styles.iconWrapper}>
        {isActive && <Icon name="highlighter" />}
      </div>
      <Icon name={iconName} />
    </Link>
  )
}

NavButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default NavButton
