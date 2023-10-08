import React from "react"
import Logo from "../../../../../assets/brand/dh-icon.svg"
import styles from "./BrandLogo.module.scss"

const BrandLogo = () => {
  return (
    <div className={styles.brandLogo}>
      <img src={Logo} alt="Doping Hafıza" />
    </div>
  )
}

export default BrandLogo
