import ThemeColor from "./ThemeColor"
import Logo from "./Logo"
function Header() {

  return (
      <header className="flex w3-black w3-border-bottom">
        <Logo className={'w3-col m1 '}/>
        <ThemeColor/>
      </header>
  )
}

export default Header