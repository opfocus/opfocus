import { useState, useEffect, useContext } from "react"
import { LanguageContext } from "../../App"
import List from "./List"

function Main() {
  const [userdata, setUserData] = useState()
  const language = useContext(LanguageContext)

  useEffect(() => {
    if (language === 'zh')
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setUserData(data))
    else
      fetch("data_en.json")
        .then((res) => res.json())
        .then((data) => setUserData(data))
  }, [language])

  if (userdata) {
    const [root] = userdata.filter(data => data.id === '0000')
    const siblings = userdata.filter(sibling =>
      root.child.indexOf(sibling.id) !== -1)

    return (
      <div>
        {siblings.map(sibling =>
          <div
            key={sibling.id}
            className="w3-border-bottom "
          >
            <p className='large-text w3-container'>
              {sibling.title}
            </p>
            <div className="w3-bar  w3-bottombar w3-black">
              <List userdata={userdata} sibling={sibling} />
            </div>
          </div>
        )
        }
      </div>
    )
  }
}
export default Main