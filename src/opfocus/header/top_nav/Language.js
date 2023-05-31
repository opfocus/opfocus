
import { useContext } from "react"
import { Link } from "react-router-dom"
import { LanguageContext } from "../../../App"

function Language() {
  const language = useContext(LanguageContext)

  return (
    <>
      {
        language !== "en" ?
          <Link
            to='/en'
            className="w3-btn"
          >
            English
          </Link>
          :
          <Link
            to='/zh'
            className="w3-btn"
          >
            简体中文
          </Link>
      }
    </>
  )
}

export default Language