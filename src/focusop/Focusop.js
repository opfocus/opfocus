import './mystyle.scss'
import UserContext from './myFunciton/userContext'
import { useState} from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import Main from './main_content/Main'
import Welcome from './welcome/Welcome'
import Customize from './customize_content/Customize'
import Medias from './media_content/Medias'

function Focusop() {
  const [account, setAccount] = useState()  // user account
  const value = [account, setAccount]

  return (
    <UserContext.Provider value={value}>
      <Header />
      <Banner/>
      <div className='w3-auto'>
        <Welcome/>
        <Main/> 
        <Customize/>
        <Medias/>
      </div>
   </UserContext.Provider>
  )
}

export default Focusop