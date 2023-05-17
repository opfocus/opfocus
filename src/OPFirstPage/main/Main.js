import useUserData from "./useUserData"
import { useState } from "react"
import List from "./List"
import useFetch from "../myFunciton/useFetch"

let initdata 
function Main() {
  const [userdata, setUserData] = useState(initdata)
  
  // [initdata] = useUserData('data.json')   数据库请求无法保证获得的顺序，而json文件似乎可以
  [initdata] = useFetch("http://localhost:3000/data/content_data")

  if (userdata){
    const [parent] = userdata.filter(data => data.id === '0000')
    const siblings = userdata.filter(sibling =>
      parent.child.indexOf (sibling.id) !== -1)

    return (
      <div className=" w3-auto">
         {siblings.map(sibling => 
            <div key={sibling.id} className="w3-border-bottom w3-container">
              <p className='middleTitle'>{sibling.title}</p>
              <List userdata={userdata} sibling={sibling} />
            </div>
            )
          }
      </div>
    )
  }
}
export default Main