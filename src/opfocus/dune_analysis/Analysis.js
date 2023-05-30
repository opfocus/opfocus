import { useEffect, useState, useContext} from "react"
import { LanguageContext } from "../../App"
import {FormattedMessage} from "react-intl"

function Analysis() {
  const [analysisdata, setAnalysisdata] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [language,] = useContext(LanguageContext)

  useEffect(() => {
    if (language === 'zh')
      fetch("analysis.json")   
      .then((res) => res.json())
      .then((data) => setAnalysisdata(data))
    else
      fetch("analysis_en.json")   
      .then((res) => res.json())
      .then((data) => setAnalysisdata(data))
  },[language])

  const handleChange = e => {
    setSearchValue(e.target.value)
  }
  
  let searchedAnalysisdata = analysisdata.filter(item => (
    (item.category + item.describe).toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  )
    )

  if (searchedAnalysisdata)
    return (
      <>
        <div className="title-block">
          <div className=" flex-analysis">
            <img 
              src="/images/Dune Analytics.png" 
              alt="Dune Logo"
              className="w3-circle analysis-image"
            />
            <div className="medium-title w3-margin-left">
              <FormattedMessage
                id="dune_section"
                defaultMessage='你是否喜欢Dune'
              />
            </div>
          </div>
          <div className="title">
            <FormattedMessage
              id="dune_block_title"
              defaultMessage='这同样是一个优秀创作者集中的地方，希望他们能帮到你。'
            />  
               
          </div>
        </div>
        <div className="w3-row w3-padding">
          <input 
            className="w3-input w3-border w3-col s3"
            placeholder="search..."
            onChange={e => handleChange(e)}
            value={searchValue}
          />
        </div>
        <div className="analysis-block">
        {
          searchedAnalysisdata.map(item => (
            
              <a 
                key={item.id}
                className="analysis"
                href={item.link}
                target= "_black"
                rel="noreferrer"
              >
                <img 
                  src={item.logo}
                  alt="OP logo"
                  className="analysis-image"
                />
                <div className="w3-container">
                  <div className="large-text">{item.describe}</div>
                  <div >{item.category}<sub>@: {item.creator}</sub></div>
                </div>
              </a>
          ))
        }
        </div>
      </>
    )
  }

export default Analysis