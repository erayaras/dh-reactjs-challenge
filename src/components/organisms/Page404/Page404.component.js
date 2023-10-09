import React from "react"
import styles from "./Page404.module.scss"

const Page404 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>404</h1>
        <h4 className={styles.subtitle}>Sayfa Bulunamadı</h4>
      </div>
    </div>
  )
}

export default Page404
