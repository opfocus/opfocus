import TopNav from "./topNav/TopNav"
import Logo from "./Logo"
function Header() {

  return (
      <header className="flex w3-black w3-border-bottom">
        <Logo/>
        <TopNav/>
      </header>
  )
}

export default Header