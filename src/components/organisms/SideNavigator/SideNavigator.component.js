import React from "react"
import BrandLogo from "./atoms/BrandLogo"
import NavButton from "./atoms/NavButton"
import styles from "./SideNavigator.module.scss"

const SideNavigator = () => {
  const mainNavButtons = [
    {name: "Homepage", icon: "homepage"},
    {name: "Lessons", icon: "lessons"},
    {name: "Question Bank", icon: "question-bank"},
    {name: "Practice Exams", icon: "practice-exams"},
    {name: "Guidance Videos", icon: "guidance-videos"},
    {name: "Statistics", icon: "statistics"},
    {name: "MeasurementEvaluation", icon: "measurement-evaluation"},
  ]

  const appNavButtons = [
    {name: "CozucuApp", icon: "cozucu-app"},
    {name: "SimdiAnladimApp", icon: "simdi-anladim-app"},
    {name: "KocumYanimdaApp", icon: "kocum-yanimda-app"},
  ]

  return (
    <div className={styles["side-navigator"]}>
      <div className={styles["brand-logo"]}>
        <BrandLogo onClick={() => handleNavClick("Homepage")} />
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
            <NavButton
              key={button.iconName}
              iconName={button.icon}
              onClick={() => handleNavClick(button.name)}
            />
          </div>
        ))}
      </div>

      <div className={styles["app-nav-buttons"]}>
        {appNavButtons.map((button) => (
          <NavButton
            key={button.name}
            iconName={button.icon}
            onClick={() => handleNavClick(button.name)}
          />
        ))}
      </div>

      <div className={styles["feedback-suggestions-button"]}>
        <NavButton
          iconName="feedback-suggestions"
          onClick={() => handleNavClick("Feedback & Suggestions")}
        />
      </div>
    </div>
  )

  function handleNavClick(name) {
    console.log(`Navigating to: ${name}`)
  }
}

export default SideNavigator
