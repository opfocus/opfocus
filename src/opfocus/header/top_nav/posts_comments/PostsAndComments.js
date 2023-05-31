import { useContext, useState } from "react"
import Post from "./side_content/Post"
import { FormattedMessage } from "react-intl"
// graphql
import { GET_POSTS, INSERT_POST } from '../../../../graphql-operations'
import { useQuery, useMutation } from "@apollo/client"
import { app } from "../../../../index"
import { LanguageContext } from "../../../../App"




function PostsAndComments() {
  const [isOpenPosts, setIsOpenPosts] = useState(false)

  const { data } = useQuery(GET_POSTS)

  const posts = data ? data.posts : null

  return (
    <>
      {/* a button on nav, clicked will change state and display posts */}
      <button
        className="w3-btn"
        onClick={() => setIsOpenPosts(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {/* posts block on the right side*/}
      {
        isOpenPosts === true
        &&
        <Posts
          setIsOpenPosts={setIsOpenPosts}
          posts={posts}
        />
      }
    </>
  )
}
export default PostsAndComments

// posts component
function Posts({ setIsOpenPosts, posts }) {
  const [isAddPost, setIsAddPost] = useState(false)
  const [newPost, setNewPost] = useState({
    _id: 'new1',
    title: '',
    body: ''
  })
  const language = useContext(LanguageContext)
  // prePosts use to  keep watch over  posts value change  
  const [prePosts, setPrePosts] = useState()
  // tempPosts use to add newPost to display on screen. it not
  //  from database, becacuse request to datebase too slow
  const [tempPosts, setTempPosts] = useState()

  if (prePosts !== posts) {
    setTempPosts(posts)
    setPrePosts(posts)
  }

  const [insertOnePost,] = useMutation(INSERT_POST)

  const handleTitleChange = (e) => {
    const nextPost = { ...newPost, title: e.target.value }
    setNewPost(nextPost)
  }
  const handleTextChange = (e) => {
    const nextPost = { ...newPost, body: e.target.value }
    setNewPost(nextPost)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsAddPost(false)
    setTempPosts([newPost, ...tempPosts])
    setNewPost({
      _id: newPost._id + '1',
      title: '',
      body: ''
    })
    await insertOnePost({
      variables: {
        mutation: {
          title: newPost.title,
          user_id: app.currentUser.id,
          user_nickname: '匿名',
          body: newPost.body,
          like: 1,
          date: Date()
        }
      }
    })
  }

  return (
    <>
      <div
        className=" sidebar w3-display-content w3-padding-64"
        style={{ right: "0px" }}
      >
        {/* a button clicked will  close posts block */}
        <button
          className="w3-button w3-opacity w3-display-topright"
          onClick={() => setIsOpenPosts(false)}
        >
          <i className="fa-solid fa-x"></i>
        </button>
        {/* a button click will display the add post form */}
        {
          isAddPost ?
            <button
              className="w3-button w3-display-topleft w3-opacity"
              onClick={() => setIsAddPost(false)}
            >
              <FormattedMessage
                id="post_close"
                defaultMessage='关闭'
              />
            </button>
            :
            <button
              className="w3-button w3-display-topleft w3-opacity"
              onClick={() => setIsAddPost(true)}
            >
              <FormattedMessage
                id="post_open"
                defaultMessage='发帖'
              />
            </button>
        }

        {/* add post form */}
        {
          isAddPost
          &&
          <form className="w3-container"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>
              <FormattedMessage
                id="post_title"
                defaultMessage='标题：'
              />
              <input
                className="w3-input"
                onChange={(e) => handleTitleChange(e)}
                value={newPost.title}
              />
            </label>
            <label>
              <FormattedMessage
                id="post_text"
                defaultMessage='正文：'
              />
              <textarea
                rows='5'
                className="w3-input "
                onChange={(e) => handleTextChange(e)}
                value={newPost.body}
                style={{ resize: 'none' }}
              />
            </label>
            {
              newPost.title.length > 0
                &&
                newPost.title.length <= 100
                &&
                newPost.body.length > 0
                &&
                newPost.body.length <= 500
                &&
                app.currentUser
                ?
                <input
                  type='submit'
                  className="w3-button w3-right w3-small"
                  value={
                    language === 'zh' ?
                      "提交" : "Submit"
                  }
                />
                :
                <input
                  type='submit'
                  className="w3-button w3-right w3-small"
                  value={
                    language === 'zh' ?
                      "提交" : "Submit"
                  }
                  disabled
                />
            }
          </form>
        }
        {/* posts */}
        {
          tempPosts
          &&
          tempPosts.map(item => (
            <Post
              key={item._id}
              item={item}
            />)
          )
        }
      </div>
    </>
  )
}