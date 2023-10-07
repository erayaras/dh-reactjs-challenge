import React from "react"
import BrandLogo from "./atoms/BrandLogo"
import NavButton from "./atoms/NavButton"
import styles from "./SideNavigator.module.scss"

const SideNavigator = () => {
  const mainNavButtons = [
    {name: "Homepage", icon: "homepage", route: "/"},
    {name: "Lessons", icon: "lessons", route: "/lessons"},
    {
      name: "Question Bank",
      icon: "question-bank",
      route: "/question-bank/question",
    },
    {name: "Practice Exams", icon: "practice-exams", route: "/practice-exams"},
    {
      name: "Guidance Videos",
      icon: "guidance-videos",
      route: "/guidance-videos",
    },
    {name: "Statistics", icon: "statistics", route: "/statistics"},
    {
      name: "MeasurementEvaluation",
      icon: "measurement-evaluation",
      route: "/measurement-evaluation",
    },
  ]

  const appNavButtons = [
    {name: "CozucuApp", icon: "cozucu-app", route: "/cozucu-app"},
    {
      name: "SimdiAnladimApp",
      icon: "simdi-anladim-app",
      route: "/simdi-anladim-app",
    },
    {
      name: "KocumYanimdaApp",
      icon: "kocum-yanimda-app",
      route: "/kocum-yanimda-app",
    },
  ]

  return (
    <div className={styles["side-navigator"]}>
      <div className={styles["brand-logo"]}>
        <BrandLogo />
      </div>

      <div className={styles["main-nav-buttons"]}>
        {mainNavButtons.map((button) => (
          <div
            className={
              button.icon === "measurement-evaluation"
                ? styles["icon-with-border"]
                : ""
            }
            key={button.name}
          >
            <NavButton iconName={button.icon} to={button.route} />
          </div>
        ))}
      </div>

      <div className={styles["app-nav-buttons"]}>
        {appNavButtons.map((button) => (
          <NavButton iconName={button.icon} to={button.route} />
        ))}
      </div>

      <div className={styles["feedback-suggestions-button"]}>
        <NavButton iconName="feedback-suggestions" to="/feedback-suggestions" />
      </div>
    </div>
  )
}

export default SideNavigator
