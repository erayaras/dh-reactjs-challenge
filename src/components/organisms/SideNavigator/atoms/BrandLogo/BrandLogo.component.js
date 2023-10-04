import React from "react"
import PropTypes from "prop-types"
import Logo from "../../../../../assets/brand/dh-icon.svg"
import styles from "./BrandLogo.module.scss"

const BrandLogo = ({onClick}) => {
  return (
    <div className={styles["brand-logo"]} onClick={onClick}>
      <img src={Logo} alt="Doping Hafıza" />
    </div>
  )
}

BrandLogo.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default BrandLogo
