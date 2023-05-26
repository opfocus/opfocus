import { useState } from "react"
import { FormattedMessage } from "react-intl"
function Banner () {
  const [banner, setBanner] = useState(true)

  if (banner)
    return (
      <div className="w3-container w3-border-bottom flex sticky">
        <span className="">
          <FormattedMessage
            id="disclaimer"
            defaultMessage='
            声明：个人网站与任何企业实体无关。链接均为第三方资源的原样提供，
            对于其内容不承担相关责任。如您有任何疑问或者担忧，
            请您在使用前先进行调查工作！'
          />
        </span>
          <button
          className="w3-button"
          onClick={() => setBanner(false)}>
            <i className="fa-solid fa-x"></i>
            </button>
        </div>
    )
}


export default Banner