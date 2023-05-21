import Topnav from "./top_nav/Topnav"
function Header() {

  return (
      <header className="flex w3-black w3-border-bottom">
        <div className="w3-hide-small">
          <img
          src="optimism-base.webp" 
          alt="OP and Base logo"
          style={{width: '150px'}}
          />
        </div>
        <Topnav/>
      </header>
  )
}

export default Header