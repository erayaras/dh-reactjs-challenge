import React from "react"
import BrandLogo from "./atoms/BrandLogo"
import NavButton from "./atoms/NavButton"
import styles from "./SideNavigator.module.scss"
import {useLocation} from "react-router-dom"

const SideNavigator = () => {
  const location = useLocation()

  const mainNavButtons = [
    {name: "Homepage", icon: "homepage", route: "/home"},
    {name: "Lessons", icon: "lessons", route: "/lessons"},
    {
      name: "Question Bank",
      icon: "question-bank",
      route: "/question-bank/turkce/konu-tarama/1/1",
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
    <div className={styles.sideNavigator}>
      <div className={styles.brandLogo}>
        <BrandLogo />
      </div>

      <div className={styles.mainNavButtons}>
        {mainNavButtons.map((button) => (
          <div
            className={
              button.icon === "measurement-evaluation"
                ? styles.iconWithBorder
                : ""
            }
            key={button.name}
          >
            <NavButton
              iconName={button.icon}
              to={button.route}
              isActive={
                button.route === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(button.route)
              }
            />
          </div>
        ))}
      </div>

      <div className={styles.appNavButtons}>
        {appNavButtons.map((button) => (
          <NavButton
            key={button.name}
            iconName={button.icon}
            to={button.route}
            isActive={
              button.route === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(button.route)
            }
          />
        ))}
      </div>

      <div className={styles.feedbackSuggestionsButton}>
        <NavButton
          iconName="feedback-suggestions"
          to="/feedback-suggestions"
          isActive={location.pathname.startsWith("/feedback-suggestions")}
        />
      </div>
    </div>
  )
}

export default SideNavigator
