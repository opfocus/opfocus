 // Currently, user registration and login are not provided, and users are anonymous
//  
import { useState, } from "react"
import { FormattedMessage } from "react-intl"
import {app} from '../../../index'

function SignIn() {

  const [isUserInfo, setIsUserInfo] = useState(false) 

  return (
    
    <div  style={{
      display:"inline-block",
      position:"relative"
    }}>
      {/* a  button:  user name display on top nav */}
      <button 
        className="w3-btn"
        onClick={() => setIsUserInfo(!isUserInfo)}
      >
        <FormattedMessage
          id="user"
          defaultMessage='匿名用户'
        />
      </button>
      {
        isUserInfo
        &&
        app.currentUser
        && 
        <div  style={
            {
              display:'block',
              position: 'absolute',
              backgroundColor: 'black',
              width:'100px',
            }
        }>
          <span>ID: </span>
          <span>...{app.currentUser.id.slice(-5, )}</span>
        </div>
      }
    </div>
  )
}

export default SignIn