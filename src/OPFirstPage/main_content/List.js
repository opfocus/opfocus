

function List ({userdata, sibling}) {
  const children = userdata.filter(child => 
    sibling.child.indexOf(child.id) !== -1
    )
  return (
    <ul>
      {children.map(child => 
        <a key={child.id}
          className="w3-button text"
          target="_blank"
          href={child.link} rel="noreferrer">{child.title}</a>
        )}
    </ul>
  )
}

export default List