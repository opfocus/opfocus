import { useState } from "react"

function Banner () {
  const [banner, setBanner] = useState(true)

  if (banner)
    return (
      <div className="w3-container w3-border-bottom flex">
        <span className="">免责声明：本网站链接均为第三方资源的原样提供，
          对于其内容不承担相关责任，如您有任何疑问或者担忧，
          请您在点击前做好调查工作！
        </span>
          <button
          className="w3-button w3-right"
          onClick={() => setBanner(false)}>
            <i class="fa-solid fa-x"></i>
            </button>
        </div>
    )
  else 
    return (
      <>
      </>
    )
}


export default Banner