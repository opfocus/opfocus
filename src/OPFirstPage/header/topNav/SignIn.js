import { useState } from "react"
import Log from "../../my_form/Log"
import Register from "../../my_form/Register_form"

function SignIn() {
  // const [modalState, setModalState] = useState(false)
  // const [hasAccount, setHasAccount] = useState(true)
  const [account, setAccount] = useState(null)
  // status inclue init, logging, registering, logged
  const [status, setStatus] = useState("init")


  return (
    <>
      <button 
        className="w3-btn"
        onClick={() => {
           status === 'init'&& setStatus("logging") 
          }}
      >
        { 
          status === 'logged'?
           account.nickname
          :
          "登录"
        }
        
      </button>
      {/* modal:when 'logging' and 'registering' display modal*/}
      <div 
        className="w3-modal" 
        style={
          status === 'logging' || status === 'registering' ?
            {display:"block"}
            : 
            {display:"none"}
        }>
        {/* modal content */}
        <div 
          className = "w3-modal-content w3-black">
          {/* close modal button */}
          <button
            className="w3-display-topright w3-btn w3-xlarge"
            onClick={() => setStatus("init")}
          >
            &times;
          </button>
          {/* sign in form: there are different form here*/}
          {
          status === 'logging' 
          &&
          <Log setStatus={setStatus} setAccount={setAccount}/>
          }
          {
          status=== 'registering'
          &&
          <Register setStatus={setStatus}/>
          }          
        </div>
      </div>
    </>
  )
}

export default SignIn