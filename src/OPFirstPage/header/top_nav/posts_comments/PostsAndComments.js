
import { useState, useContext } from "react"
import UserContext from "../../../myFunciton/userContext"
import Post from "./side_content/Post"


function PostsAndComments() {
  const [isOpenPosts,setIsOpenPosts] = useState(false)
  const [isAddPost, setIsAddPost] = useState(false)
  const [postData, setPostData] = useState()
  const [newPost, setNewPost] = useState ({
      newPostTitle: '',
      newPostText: ''
    })
  const [account, setAccount] = useContext(UserContext)

  const handleClick =  () => {
    fetch('http://localhost:3000/data/blog/posts')
    .then(res => res.json())
    .then(data => setPostData(data))
    .then(() => setIsOpenPosts(true))
  }
  const handleTitleChange = (e) => {
    const nextPost = {...newPost, newPostTitle: e.target.value}
    setNewPost(nextPost)
  }
  const handleTextChange = (e) => {
    const nextPost = {...newPost, newPostText: e.target.value}
    setNewPost(nextPost)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const request = Object.fromEntries(formData.entries())
    const options = {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: request.newPostTitle,
        body: request.newPostText,
        user_id: account._id,
        user_nickname: account.nickname,
        
      })
    }
    setIsAddPost(false)
    fetch('http://localhost:3000/data/blog/posts/insert', options)
    .then(() => handleClick())
  }
// debugger
  return (
    <>
      {/* a button on nav, clicked will change state and display posts */}
      <button
        className="w3-btn"
        onClick={handleClick}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {/* posts block on the right side*/}
      {
        isOpenPosts === true
        &&
        <div 
          className=" sidebar w3-display-content"
          style={{right:"0px"}}
        >
          {/* a button clicked will  close posts block */}
          <button 
            className="w3-button w3-display-topright"
            onClick={()=> {
              setIsOpenPosts(false)
              setIsAddPost(false)
            }}
          >
            <i class="fa-solid fa-x"></i>
          </button>
          {/* a button click will display the add post form */}
          {
            isAddPost?
            <button 
            className="w3-button w3-display-topleft"
            onClick={()=> setIsAddPost(false)}
            >
              关闭
            </button>
            :
            <button 
            className="w3-button w3-display-topleft"
            onClick={()=> setIsAddPost(true)}
           >
            发帖
          </button>
          }
          {/* block title */}
          <div className="w3-center">
            <h3>讨论区</h3>
          </div>
          {/* add post form */}
          {
            isAddPost
            && 
            <form className="w3-container"
              onSubmit={(e) => handleSubmit(e)}>
              <label>
                标题： 
                <input
                name="newPostTitle"
                className="w3-input"
                placeholder="需登录,长度少于20字符"
                onChange={(e)=> handleTitleChange(e)}
                />
            </label>
            <label>
                正文： 
                <textarea
                rows= '5'
                name="newPostText"
                className="w3-input "
                placeholder="需登录,长度少于50字符"
                onChange={(e) => handleTextChange(e)}
                />
            </label>
            {
              newPost.newPostTitle.length > 0 
              && 
              newPost.newPostTitle.length <= 20
              &&
              newPost.newPostText.length > 0
              &&
              newPost.newPostText.length <= 50
              &&
              account
              ?
              <input 
                type="submit"
                className="w3-button w3-right w3-small"
              />
              :
              <input 
              type="submit"
              className="w3-button w3-right w3-small"
              disabled
            />
            }

            </form>
          }
          {/* posts */}
          {
            postData.map(item => (
              <Post 
                key={item._id}
                item={item}
              />)
            )
          }
        </div>
      }
    </> 
  )
}
export default PostsAndComments