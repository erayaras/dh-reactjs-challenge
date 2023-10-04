import React from "react"
import PropTypes from "prop-types"
import "./Icon.module.scss"

const Icon = ({name, onClick = () => {}}) => {
  let iconSrc
  try {
    iconSrc = require(`../../../assets/icons/${name}.svg`)
  } catch (e) {
    console.warn(`Icon "${name}" not found!`)
    return null
  }

  return <img className="icon" src={iconSrc} alt={name} onClick={onClick} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
}

export default Icon
