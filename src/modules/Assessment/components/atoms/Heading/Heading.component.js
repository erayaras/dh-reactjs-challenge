import React from "react"
import styles from "./Heading.module.scss"
import PropTypes from "prop-types"

const Heading = ({level = "1", children}) => {
  const tagType = `h${level}`
  return React.createElement(
    tagType,
    {className: styles[`heading${level}`]},
    children
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
  children: PropTypes.node.isRequired,
}

export default Heading
