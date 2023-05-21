
import { useState } from "react"
import { handleSubmit } from "../myFunciton/myFunction"

function Register({setStatus}) {
  const [newUsername, setNewUserName] = useState('')
  const [newNickname, setNewNickname] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [newPassword2,setNewPassword2] = useState('')
  const [isErr, setIsErr] = useState(false)

  const  handleRegisterSubmit =async (e, url) => {
   let data =await handleSubmit(e, url)
        if (data[0].message){
          setStatus("logging")
          setIsErr(false)
        }
        else {
          setIsErr(true)
      }
  }

  return (
    <>
    <form 
      onSubmit={e => handleRegisterSubmit(e, "http://localhost:3000/data/user/register")} 
    >
      <label >
        用户名：
        <input 
          type="text"
          name="newUsername"
          id="newUsername"
          className="w3-input"
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </label> 
      <br/>
      <label >
        昵称：
        <input 
          type="text"
          name="nickname"
          id="nickname"
          className="w3-input"
          onChange={(e) => setNewNickname(e.target.value)}
        />
      </label> 
      <br/>
      <label>
        请输入密码：
        <input 
          type="password" 
          name="newPasswords" 
          id="newPasswords"
          className="w3-input"
          value= {newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <br/>
      <label>
        请再次输入密码：
        <input 
          type="password" 
          name="newPasswords2" 
          id="newPasswords2"
          className="w3-input"
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
        />
      </label>
      {
        isErr?
        <span  className="w3-small w3-text-red">*注册中遇到错误,请重试或反馈问题</span>
        :
        <></>
      }
      <div 
        className="w3-row">
          <button
            className="w3-left w3-button"
            onClick={()=>setStatus("logging")}
          >
          已有账号？
        </button>
        <input 
        type="submit" 
        className="w3-button w3-right" 
        value="注册"
        disabled = 
        { 
          newUsername && newPassword && newPassword === newPassword2 ?
          ''
          :
          'disabled'
        }
        
      />
      </div> 
    </form>
    </>
  )
}

export default Register