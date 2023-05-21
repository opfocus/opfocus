import { useState, useContext} from "react"
import UserContext from "../../myFunciton/userContext"
import LogIn from "../../my_form/LogIn"
import Register from "../../my_form/Register_form"

function SignIn() {

  const [account, setAccount] = useContext(UserContext)
  const [status, setStatus] = useState("init")  // Sign in status

  return (
    <>
      {/* a sign in button or a logged user name display on top nav */}
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
      {/* modal:when clicked above sign in button display modal*/}
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
          className = "w3-modal-content sign-form">
          {/* close modal button, display on the modal top right*/}
          <button
            className="w3-display-topright w3-button w3-xlarge"
            onClick={() => setStatus("init")}
          >
            &times;
          </button>
          {/*there are different form here: sign in(log) or sign up(register)*/}
          {
          status === 'logging' 
          &&
          <LogIn setStatus={setStatus} setAccount={setAccount}/>
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