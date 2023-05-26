//!! need to be fixed when use database:The order of data returned by the database cannot be
//!! -guaranteed
// !!if can't access database ,should Adjust comment statement   use: [userdata] = usFetch('data.json')   
import { useState, useEffect, useContext } from "react" 
import { LanguageContext } from "../../App"
import List from "./List"

function Main() {
  const [userdata, setUserData] = useState()
  const [language,] = useContext(LanguageContext)
 

  useEffect(() => {
      // fetch("http://localhost:3000/data/content_data")
       // if can't access database ,should use the following line -
    if (language ==='zh')
      fetch("data.json")   
      .then((res) => res.json())
      .then((data) => setUserData(data))
    else 
    fetch("data_en.json")   
    .then((res) => res.json())
    .then((data) => setUserData(data))
    },[language])

  if (userdata){
    const [root] = userdata.filter(data => data.id === '0000')
    const siblings = userdata.filter(sibling =>
      root.child.indexOf (sibling.id) !== -1)

    return (
      <div>
         {siblings.map(sibling => 
            <div 
              key={sibling.id} 
              className="w3-border-bottom w3-container"
            >
              <p className='large-text'>
                {sibling.title}
              </p>
              <List userdata={userdata} sibling={sibling} />
            </div>
            )
          }
      </div>
    )
  }
}
export default Main