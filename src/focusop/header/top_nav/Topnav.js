import ThemeColor from "./ThemeColor"
import SignIn from "./SignIn"
import Language from "./Language"
import PostsAndComments from "./posts_comments/PostsAndComments"

function Topnav() {

  return (
    <div >
      <PostsAndComments/>
      <Language/>
      <SignIn/>
      <ThemeColor/>
    </div>
  )
}


export default Topnav