import { useState } from "react"
import Media from "./Media"
// test data
const initMedias = [{
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
  title: '提提皮',
  link: 'https://medium.com/@whoistp',
  description: 'OP官方文章翻译至中文。subli乐观通讯翻译至中文'
},

]
function Medias() {
  const [Medias, ] = useState(initMedias)

  return (
    <div>
      <div className="title-block">
        <div className="medium-title">
          这里有一个媒体列表
        </div>
        <div className="title">
          我们收集了一些媒体。他们集中于某一个或者几个领域创作。
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