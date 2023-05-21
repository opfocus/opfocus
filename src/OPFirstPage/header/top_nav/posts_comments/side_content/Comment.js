import { useState, useContext } from "react"
import UserContext from "../../../../myFunciton/userContext"


function Comment({
  setPostsAndCommentStatus,
  item,
  postsAndCommentStatus,
  comments,
  handleOpenCommentsClick
  }) { 
  const [newComment, setNewComment] = useState('')
  const [account, setAccount] = useContext(UserContext)
  
  const handleSubmit = (e, item) => {
    e.preventDefault()

    const options = {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title_id: item._id,
        user_id: account._id,
        user_nickname: account.nickname,
        body: newComment,
      })
    }
    setPostsAndCommentStatus('submiting')
    fetch('http://localhost:3000/data/blog/comments/insert', options)
    .then(() => handleOpenCommentsClick(item))
  }

  return (
    <div className="w3-container">
      {
        comments.map(comment => 
        <div key={comment._id} className="w3-row w3-small w3-border-bottom">
          <span>
            {comment.body}     
          </span>
          <span className="w3-right">
            <i class="fa-regular fa-user"></i>
            {' '}
            <strong>{comment.user_nickname}</strong>
          </span>
        </div>
        )
      }

      <form>
        <textarea 
          rows="3" 
          name="comment"
          className="w3-input w3-small"
          placeholder="登录状态下参与评论,长度少于20字符"
          onChange={(e) => setNewComment(e.target.value)}
        >
        </textarea>
        { 
          newComment.length !== 0 
          &&
          newComment.length < 20
          &&
          postsAndCommentStatus !== 'submiting' 
          &&
          account
          ?
            <input 
              type="submit"
              className="w3-button w3-right w3-small"
              onClick={(e) => handleSubmit(e, item)}
            />
            :
            <input 
            type="submit"
            className="w3-button w3-right w3-small"
            disabled
          />  
        }
      </form>
    </div>
  )
}

export default Comment

