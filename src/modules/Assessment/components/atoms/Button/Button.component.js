import React from "react"
import PropTypes from "prop-types"
import styles from "./Button.module.scss"
import Icon from "../../../../../components/atoms/Icon/Icon.component"

const Button = ({
  label,
  theme,
  icon,
  iconPosition = "left",
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
      {icon && iconPosition === "left" && (
        <div className={`${styles["icon"]} ${styles["icon-left"]}`}>
          <Icon name={icon} />
        </div>
      )}
      {label}
      {icon && iconPosition === "right" && (
        <div className={`${styles["icon"]} ${styles["icon-right"]}`}>
          <Icon name={icon} />
        </div>
      )}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.oneOf(["solid", "gradient", "tool", "navigation"]),
  icon: PropTypes.string,
  className: PropTypes.string,
  hoverVisible: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
