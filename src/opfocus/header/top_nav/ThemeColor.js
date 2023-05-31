import { useState } from "react"

function ThemeColor() {
  const [themeColor, setThemeColor] = useState(false)

  const mybody = document.documentElement.style

  /*set body background and text color here*/
  if (themeColor) {
    mybody.setProperty('--primary-background-color', 'black')
    mybody.setProperty('--primary-text-color', 'white')
  }
  else {
    mybody.setProperty('--primary-background-color', 'white')
    mybody.setProperty('--primary-text-color', 'black')
  }
  return (
    <button
      className="w3-btn"
      onClick={() => setThemeColor(!themeColor)}>
      {themeColor === false ?
        <i className="fa-solid fa-moon"></i>
        :
        <i className="fa-regular fa-sun"></i>
      }
    </button>
  )
}


export default ThemeColor