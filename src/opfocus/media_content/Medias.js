import { useState } from "react"
import Media from "./Media"
import { FormattedMessage } from "react-intl"
import { useContext } from "react"
import {LanguageContext} from '../../App'
// test data

function Medias() {
  const [language,] = useContext(LanguageContext)  
  let initMedias 
  if (language === 'zh')
    initMedias = [{
      _id: '001',
      logo_img:'images/subli_logo.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'Subli',
      link: 'https://optimismbysublidefi.substack.com',
      description: '＃解码Defi收益农场策略，项目入口、视频、教程和KOL(多语言)'
    },
    {
      _id: '002',
      logo_img:'images/tipi_logo.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: '提皮',
      link: 'https://medium.com/@whoistp',
      description: 'OP官方文章翻译至中文。subli乐观通讯翻译至中文'
    },
    ]
  else 
    initMedias = [{
      _id: '001',
      logo_img:'images/subli_logo.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'Subli',
      link: 'https://optimismbysublidefi.substack.com',
      description: 'Decode yield farming strategy of #Defi, focused on User Experience & onboarding Threadoor, Video, Tutorial, KOL'
    },
    {
      _id: '002',
      logo_img:'images/tipi_logo.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'Tipi',
      link: 'https://medium.com/@whoistp',
      description: "Translate Subli's 'Optimistic Newsletter' and OP Official Newsletter into Chinese."
    },
    ]

  const [Medias, ] = useState(initMedias)

  return (
    <div>
      <div className="title-block">
        <div className="medium-title">
          <FormattedMessage
            id="medias_section"
            defaultMessage='这里有一个媒体列表'
          />  
        </div>
        <div className="title">
        <FormattedMessage
            id="medias_block_title"
            defaultMessage='我们收集了一些媒体。他们集中于某一个或者几个领域创作。'
          />  
        </div>
      </div>
      <div className="medias">
        {
          Medias.map(media => 
            <Media 
              key={media._id}
              media={media}
            /> )
        }
      </div>  
    
    </div>
  )
} 

export default Medias