import { FormattedMessage } from "react-intl"

function Footer() {

  return (
    <>
      <div className="title-block">
        <div className="medium-title">
          <FormattedMessage
            id="footer_section"
            defaultMessage='最后，欢迎在我们的讨论区留下信息。'
          />  
        </div>
      </div>
      <div style={{height: "500px"}}>

      </div>

    </>
  )
}

export default Footer