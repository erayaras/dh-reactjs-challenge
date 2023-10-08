import React from "react"
import styles from "./ErrorBoundary.module.scss"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: "",
      errorStack: "",
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorStack: error.stack || "",
      errorMessage: error.message,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    const {hasError, errorMessage, errorStack} = this.state
    const {children} = this.props
    const isDevelopment = process.env.NODE_ENV === "development"

    if (hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.caption}>
            <div className={styles.warn}>!</div>
            <div className={styles.info}>Oops, something went wrong...</div>
            <button
              className={styles.buttonReload}
              onClick={() => window.location.reload()}
            >
              Please try again
            </button>
          </div>
          {isDevelopment && (
            <div className={styles.errorContainer}>
              <div className={styles.message}>
                <span className={styles.errorCaption}>Message: </span>
                <span className={styles.errorDescription}>{errorMessage}</span>
              </div>
              <div className={styles.stack}>
                <span className={styles.errorCaption}>Stack:</span>
                {errorStack}
              </div>
            </div>
          )}
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
