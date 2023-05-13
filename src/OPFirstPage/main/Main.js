import useUserData from "./useUserData"
import { useState } from "react"
import List from "./List"

let initdata 
function Main() {
  const [userdata, setUserData] = useState(initdata)
  
  [initdata] = useUserData('data.json')

  if (userdata){
    const parent = userdata[0]
    const siblings = userdata.filter(sibling =>
      parent.child.indexOf (sibling.id) !== -1)

    return (
      <main className=" w3-auto">
         {siblings.map(sibling => 
            <div key={sibling.id} className="w3-border-bottom w3-container">
              <p className='middleTitle'>{sibling.title}</p>
              
              <List userdata={userdata} sibling={sibling} />
            </div>
            )
          }
      </main>
    )
  }
}
export default Main