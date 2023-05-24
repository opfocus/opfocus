// react
import './mystyle.scss'
import Header from './opfocus/header/Header'
import Banner from './opfocus/banner/Banner'
import Main from './opfocus/main_content/Main'
import Welcome from './opfocus/welcome/Welcome'
import Customize from './opfocus/customize_content/Customize'
import Medias from './opfocus/media_content/Medias'

function Opfocus() {

  return (
    <>
      <Header />
      <Banner/>
      <div className='w3-auto'>
        <Welcome/>
        <Main/> 
        <Customize/>
        <Medias/>
      </div>
   </>
  )
}

export default Opfocus