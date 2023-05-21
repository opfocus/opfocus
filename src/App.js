import './mystyle.scss'
import UserContext from './opfocus/myFunciton/userContext'
import { useState} from 'react'
import Header from './opfocus/header/Header'
import Banner from './opfocus/banner/Banner'
import Main from './opfocus/main_content/Main'
import Welcome from './opfocus/welcome/Welcome'
import Customize from './opfocus/customize_content/Customize'
import Medias from './opfocus/media_content/Medias'

function Opfocus() {
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

export default Opfocus