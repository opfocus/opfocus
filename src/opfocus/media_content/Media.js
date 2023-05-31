

function Media({ media }) {

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
        <p>
          <strong><i>
            {media.title}
          </i>
          </strong>
        </p>
        <p className="media-description">
          {media.description}
        </p>
      </div>
    </a>
  )
}

export default Media