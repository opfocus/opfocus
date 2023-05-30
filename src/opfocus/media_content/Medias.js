import Media from "./Media"
import { FormattedMessage } from "react-intl"
import { useContext } from "react"
import {LanguageContext} from '../../App'
// test data

function Medias() {
  const [language,] = useContext(LanguageContext)  
 
  let initMedias 

  if (language !== 'en'){
    initMedias = [{
      _id: '001',
      logo_img:'images/subli_logo.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'Subli',
      link: 'https://optimismbysublidefi.substack.com',
      description: '＃解码Defi收益农场策略，项目入口、视频、教程和KOL。(多语言)'
    },
    {
      _id: '002',
      logo_img:'images/tipi_logo.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: '提皮',
      link: 'https://medium.com/@whoistp',
      description: 'OP官方文章翻译至中文。subli乐观通讯翻译至中文'
    },
    {
      _id: '003',
      logo_img:'images/ZachXBT.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'ZachXBT',
      link: 'https://app.optimism.io/retropgf-discovery/0x9D727911B54C455B0071A7B682FcF4Bc444B5596',
      description: "链上侦探。Rug pull幸存者变身 2D 侦探。（英语）"
    },
    {
      _id: '004',
      logo_img:'images/Ethereum_News.png'  ,
      chain_logo_img:'images/ethereum_logo.png',
      title: '每周以太坊要闻',
      link: 'https://weekinethereumnews.com/',
      description: "自2016年8月21日起的以太坊的每周时事通讯。（英语）"
    },
    {
      _id: '005',
      logo_img:'images/Jack_Anorak.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'OP 去哪儿了？',
      link: 'https://gov.optimism.io/t/op-grants-through-season-2-where-has-the-op-gone/4025/2',
      description: "不断更新治理线索，在交易层面详细说明前两个赛季治理基金发生给项目后的情况。"
    },
    {
      _id: '006',
      logo_img:'images/op_logo.svg'  ,
      chain_logo_img:'images/op_logo.svg',
      title: '乐观主义集体官方Blog',
      link: 'https://optimism.mirror.xyz/',
      description: "扩展以太坊为其未来提供资金。"
    },
    {
      _id: '007',
      logo_img:'images/base_logo.png'  ,
      chain_logo_img:'images/base_logo.png',
      title: 'Base官方Blog',
      link: 'https://base.mirror.xyz/',
      description: "由 Coinbase 孵化并建立在开源 OP Stack 之上的以太坊 L2。我们没有发行新代币的计划。"
    },
    {
      _id: '008',
      logo_img:'images/oplabs_logo.png'  ,
      chain_logo_img:'images/oplabs_logo.png',
      title: 'OP 实验室官方Blog',
      link: 'https://blog.oplabs.co/',
      description: "扩展以太坊，建设乐观"
    },
    ]
  }
  else {
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
      description: "Translate Subli's 'Optimistic Newsletter' and OP Official Newsletter into Chinese.(ZH)"
    },
    {
      _id: '003',
      logo_img:'images/ZachXBT.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'ZachXBT',
      link: 'https://app.optimism.io/retropgf-discovery/0x9D727911B54C455B0071A7B682FcF4Bc444B5596',
      description: "On-chain sleuth. Rug pull survivor turned 2D detective."
    },
    {
      _id: '004',
      logo_img:'images/Ethereum_News.png'  ,
      chain_logo_img:'images/ethereum_logo.png',
      title: 'Week in Ethereum News',
      link: 'https://weekinethereumnews.com/',
      description: "Week in Ethereum News is (wait for it!) a weekly newsletter about Ethereum. Since August 21, 2016."
    },
    {
      _id: '005',
      logo_img:'images/Jack_Anorak.png'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'Where has the OP Gone?',
      link: 'https://gov.optimism.io/t/op-grants-through-season-2-where-has-the-op-gone/4025/2',
      description: "Continuously updated governance thread detailing, at a transaction level, what happened with Governance Grants through the first two seasons."
    },
    {
      _id: '006',
      logo_img:'images/op_logo.svg'  ,
      chain_logo_img:'images/op_logo.svg',
      title: 'The Optimism Collective',
      link: 'https://optimism.mirror.xyz/',
      description: "Scaling Ethereum's Present to provide funding for its future."
    },
    {
      _id: '007',
      logo_img:'images/base_logo.png'  ,
      chain_logo_img:'images/base_logo.png',
      title: 'Base',
      link: 'https://base.mirror.xyz/',
      description: "An Ethereum L2, incubated by Coinbase and built on the open-source OP Stack. We have no plans to issue a new network token."
    },
    {
      _id: '008',
      logo_img:'images/oplabs_logo.png'  ,
      chain_logo_img:'images/oplabs_logo.png',
      title: 'OP LABS',
      link: 'https://blog.oplabs.co/',
      description: "Scale Ethereum,Build Optimism"
    },
    ]
  }

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
          initMedias.map(media => 
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