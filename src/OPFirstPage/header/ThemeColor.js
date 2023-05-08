import { useState } from "react"

function ThemeColor() {
  const [themeColor, setThemeColor] = useState(false)
  
  const mybody = document.documentElement.style
  if (themeColor){
    mybody.backgroundColor = 'black'
    mybody.color = 'white'
  } 
  else {
    mybody.backgroundColor = 'white'
    mybody.color = 'black'
  }
  return (
      <button 
      className="w3-btn w3-col m1"
        onClick={() => setThemeColor(!themeColor)}>
        {themeColor===false? 
        <i class="fa-solid fa-moon"></i>
        :
        <i class="fa-regular fa-sun"></i>
        } 
      </button>    
    // </div>
  )
}


export default ThemeColor