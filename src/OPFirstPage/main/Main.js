import useFetch from './useFetch'
import List from "./List"


function Main() {
 const  [data] = useFetch('data.json')

  if (data){
    const parent = data[0]

    const siblings = data.filter(sibling =>
      parent.child.indexOf (sibling.id) !== -1)

    return (
      <main className=" w3-auto">
         {siblings.map(sibling => 
            <div key={sibling.id} className="w3-border-bottom w3-container">
              <h3>{sibling.title}</h3>
              
              <List data={data} sibling={sibling} />
            </div>
            )
          }
      </main>
    )
  }
}
export default Main