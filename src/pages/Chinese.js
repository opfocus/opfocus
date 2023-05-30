import Header from '../opfocus/header/Header'
import Banner from '../opfocus/banner/Banner'
import Main from '../opfocus/main_content/Main'
import Welcome from '../opfocus/welcome/Welcome'
import Customize from '../opfocus/customize_content/Customize'
import Medias from '../opfocus/media_content/Medias'
import { IntlProvider } from 'react-intl'
import Analysis from '../opfocus/dune_analysis/Analysis'
import Footer from '../opfocus/footer/Footer'

function Chinese() {
  const messagesInEnglish = {
    
  }

  return (
    <IntlProvider
      messages={messagesInEnglish}
      locale="zh"
      defaultLocale="zh"
    >
      <Header />
      <Banner/>
      <div className='w3-auto'>
        <Welcome/>
        <Main/> 
        <Customize/>
        <Medias/>
        <Analysis/>
        <Footer/>
      </div>
   </IntlProvider>
  )
}

export default Chinese

