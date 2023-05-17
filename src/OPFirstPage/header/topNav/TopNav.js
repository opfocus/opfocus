import ThemeColor from "./ThemeColor"
import SignIn from "./SignIn"
import Others from "./Others"
import Language from "./Language"

function TopNav() {

  return (
    <div >
      <Others/>
      <Language/>
      <SignIn/>
      <ThemeColor/>
    </div>
  )
}


export default TopNav