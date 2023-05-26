import Header from './opfocus/header/Header'
import Banner from './opfocus/banner/Banner'
import Main from './opfocus/main_content/Main'
import Welcome from './opfocus/welcome/Welcome'
import Customize from './opfocus/customize_content/Customize'
import Medias from './opfocus/media_content/Medias'
import { IntlProvider } from 'react-intl'

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
      </div>
   </IntlProvider>
  )
}

export default Chinese

