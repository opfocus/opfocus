import { FormattedMessage } from "react-intl"

function Welcome() {

  return(
    <div className="title-block">
      <div className="large-title">
        <FormattedMessage
          id="welcome"
          defaultMessage="在这里开始吧"
        />
      </div>
      <div className="title">
        <FormattedMessage
          id="links_block_title"
          defaultMessage="一起发现它。一起创建它。选择你喜欢的入口选项。"
        />
        </div>
    </div>
  )
}

export default Welcome