

function List ({userdata, sibling}) {
  const children = userdata.filter(child => 
    sibling.child.indexOf(child.id) !== -1
    )
  return (
    <>
      {children.map(child => 
        (child.child === null) ?
          <a 
            key={child.id}
            className="w3-button text w3-bar-item"
            target="_blank"
            href={child.link} rel="noreferrer"
          >
              {child.title}
          </a>
        :
          <div key={child.id} className="w3-dropdown-hover">
            <button 
              className="w3-button text"
            >
              {child.title}
            </button>
            <div className="w3-dropdown-content w3-bar-block w3-card">
              <List userdata={userdata} sibling={child}/>
            </div>
            
          </div>
              )
      }

    </>
  )
}

export default List