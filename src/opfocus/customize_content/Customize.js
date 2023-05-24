
import {useState } from "react"


function Customize() {
  const [localData, setLocalData] =useState(
    localStorage.data?
     JSON.parse(localStorage.data)
    :
    []
  )
  const [isInsertForm, setIsInsertForm] = useState(false)
  const [customizeWebData, setCustomizeWebData] = useState({
    customizeWebName: '',
    customizeWebLink: ''
    })
 
  const handleNameChange = (e) => {
    setCustomizeWebData(
      {...customizeWebData, customizeWebName: e.target.value}
    )
  }
  const handleLinkChange = (e) => {
    setCustomizeWebData(
      {...customizeWebData, customizeWebLink: e.target.value}
    )
  }
   
  const handleInsert = () => {

    // put data in localStorage,   change component state
    if (localData){
      localStorage.data = JSON.stringify([...localData, customizeWebData])
      let newdata = [...localData, customizeWebData]
      setLocalData(newdata)
    } 
    else {
      localStorage.data =JSON.stringify([customizeWebData])
      setLocalData([customizeWebData])
    }
    setCustomizeWebData(
      {
        customizeWebName: '',
        customizeWebLink: ''
        }
    )
  }


const handleDelete = () => {
  const nextLocalData = localData.filter(item => 
    item.customizeWebName !== customizeWebData.customizeWebName)

  localStorage.data =JSON.stringify(nextLocalData)
  setLocalData(nextLocalData)
  setCustomizeWebData(
    {
      customizeWebName: '',
      customizeWebLink: ''
      }
  )
}

if(localStorage)
  return (
    <div>
      {/* part2: display customize web data  */}
      {
        localData
        &&
        <div className="w3-container w3-border-bottom">
          <p className="large-text">
            自定义
          </p>
          <ul>
            {
              localData.map((item,index) => (
                <a 
                  key={index}
                  className="text w3-button"
                  target="_blank"
                  href={item.customizeWebLink} 
                  rel="noreferrer"
                >
                  {item.customizeWebName}
                </a> 
                )
              )
            }
          </ul>
        </div>
      }
    {/* part2: a button when clicked, would display
       a insert data form */}
    <div className="w3-center w3-padding">
      <button
        className="w3-button w3-circle w3-border large-text"
        onClick={()=>setIsInsertForm(!isInsertForm)}
      >
      { 
        isInsertForm?
        <i class="fa-solid fa-minus"></i>
        :
        <i class="fa-solid fa-plus"></i>
      }
      </button>
    </div>
    {/* part3: insert form here */}
    {
      isInsertForm
      &&
      <form >
        <div className="w3-row ">
          <label className="w3-input w3-col m4">
            名称：
            <input 
              className="w3-input" 
              name="customizeWebName"
              placeholder="删除只输入“名称”即可"
              value= {customizeWebData.customizeWebName}
              onChange={(e) => handleNameChange(e)}
            />
          </label>
          <label className="w3-input w3-col m6">
            网址：
            <input  
              className="w3-input"
              name="customizeWebLink"
              value={customizeWebData.customizeWebLink} 
              onChange = {(e) =>  handleLinkChange(e)}
            />
          </label>
          <div className="w3-col m2">
          {
            (customizeWebData.customizeWebName === ''
            ||
            customizeWebData.customizeWebLink === '')
            ?
            <button
            className="w3-button"
            onClick={handleInsert}
            disabled
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            :
            <button
              className="w3-button"
              onClick={handleInsert}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            }
            {
              customizeWebData.customizeWebName === ''
              ?
              <button
              className="w3-button " 
              onClick={handleDelete}
              disabled
              >
                <i class="fa-solid fa-trash"></i>
              </button>
              :
              <button
                className="w3-button " 
                onClick={handleDelete}
              >
                <i class="fa-solid fa-trash"></i>
              </button>              
            }
          </div>
        </div>
        <span className="w3-small w3-red">
            *测试阶段您的自定义添加仅存储在本地缓存中，
            如清除浏览器缓存数据将会消失，
            </span>
      </form>
    } 

    </div>
  )
}

export default Customize