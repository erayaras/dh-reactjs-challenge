export const lessonNameMap = {
  turkce: "Türkçe",
}

export const testNameMap = {
  "konu-tarama": "Konu Tarama",
}

export const getDisplayLessonName = (urlLessonName) => {
  return lessonNameMap[urlLessonName] || urlLessonName // default to the URL name if not found in the map
}

export const getDisplayTestName = (urlTestName) => {
  return testNameMap[urlTestName] || urlTestName // default to the URL name if not found in the map
}
