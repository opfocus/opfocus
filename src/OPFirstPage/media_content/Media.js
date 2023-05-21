

function Media ({media}) {

  return (
      <a 
        href={media.link}
        target="_blank" 
        className="media" 
        rel="noreferrer"
      >

        <img 
          className="chain-logo"
          src={media.chain_logo_img}
          alt="OP logo"
        />

        {/* part1: media logo*/}

        <img
          className="media-logo"
          src={media.logo_img} alt="Media logo"
        />

        {/* part2: text */}
        <div>
          <p  className="large-text">
            {media.title}
          </p>
          {/* <div 
            className="网址">
            {media.link}
          </div> */}
          <p className="media-description">
            {media.description}
          </p>
        </div>
      </a>
  )
}

export default Media