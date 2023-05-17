import { useState } from "react"
import { handleSubmit } from "../myFunciton/myFunction"
function Log({setStatus, setAccount}) {
  const [isErr, setIsErr] = useState(false)

  const handleLogSubmit =async (e, url) => {
    let [data] = await handleSubmit(e, url)

    if (data.nickname !== undefined){
      setIsErr(false)
      setAccount(data)
      setStatus('logged')
    }
    else
      setIsErr(true)
  }

  return (
    <form 
      onSubmit={(e) => handleLogSubmit(e, 'http://localhost:3000/data/user')}
      className=" w3-padding w3-padding-top-32">
      <label>
        用户名：
        <input 
          type="text"
          name="username" 
          id="username"
          className="w3-input"
        />
      </label> 
      <br/>
      <label>
        密码：
        <input 
          type="password" 
          name="passwords" 
          id="passwords"
          className="w3-input"
        />
       </label>
      {
        isErr?
        <span className="w3-small w3-text-red">*用户名或密码错误</span>
        :
        <></> 
      }
      <div 
        className="w3-row"
      >
        <button
          href="#" 
          className="w3-left w3-btn"
          onClick={()=>setStatus('registering')}
        >
          没有账号？
        </button>
        <input 
          type="submit" 
          className="w3-btn w3-right" 
          value="登录"
        />
      </div>
    </form>
  )
}

export default Log