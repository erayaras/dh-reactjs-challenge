import React from "react"
import PropTypes from "prop-types"
import styles from "./Button.module.scss"
import Icon from "../../../../../components/atoms/Icon/Icon.component"

const Button = ({
  label,
  theme,
  icon,
  onClick,
  className,
  hoverVisible = false,
}) => {
  return (
    <button
      className={`${styles["button"]} ${styles[theme]} ${className} ${
        hoverVisible ? styles["hover-button"] : ""
      }`}
      onClick={onClick}
    >
      {icon && (
        <div className={styles["icon"]}>
          <Icon name={icon} />
        </div>
      )}
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.oneOf(["solid", "gradient", "tool"]),
  icon: PropTypes.string,
  className: PropTypes.string,
  hoverVisible: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
