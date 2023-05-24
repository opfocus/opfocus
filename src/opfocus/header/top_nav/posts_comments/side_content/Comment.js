import { useState} from "react"
import {app} from '../../../../../index'
import {INSERT_COMMENT} from '../../../../../graphql-operations'
import {useMutation} from '@apollo/client'


function Comment({
  item,
  postsAndCommentStatus,
  comments,
  }) { 
  const [newComment, setNewComment] = useState({
    _id:"new1",
    body: '',
    user_nickname:"匿名"
  })
  // preComments use to keep watch over comments value change
  const [preComments, setPreComments] = useState()
  // tempComments use to display newComment first on screen, 
  // because request from database too slowly 
  const [tempComments, setTempComments] = useState()

  if (preComments !== comments){
    setPreComments(comments)
    setTempComments(comments)
  }

  const [insertOneComment, ] = useMutation(INSERT_COMMENT)
  
  const handleChange = (e) => {
    setNewComment({...newComment, body: e.target.value})
  }

  const handleSubmit = async (e, item) => {
    e.preventDefault()
    setTempComments([...tempComments, newComment])
    setNewComment({
      _id: newComment._id + '1',
      body: '',
      user_nickname:"匿名"
    })

    await insertOneComment({
      variables: {
        mutation: {
          title_id: item._id,
          user_id: app.currentUser.id,
          user_nickname: '匿名',
          body: newComment.body,
          like:1,
          date: Date()
        }
      }
    })

  }

  return (
    <div className="w3-container">
      {
        tempComments
        &&
        tempComments.map(comment => 
        <div key={comment._id} className="w3-row w3-small w3-border-bottom">
          <span>
            {comment.body}     
          </span>
          <span className="w3-right w3-opacity">
            <i class="fa-regular fa-user"></i>
            {' '}
            {comment.user_nickname}
          </span>
        </div>
        )
      }

      <form onSubmit={(e) => handleSubmit(e, item)}>
        <textarea 
          rows="3" 
          className="w3-input w3-small"
          placeholder="登录状态下参与评论,长度少于20字符"
          onChange={(e) => handleChange(e)}
          value = {newComment.body}
        >
        </textarea>
        { 
          newComment.body.length !== 0 
          &&
          newComment.body.length < 20
          &&
          postsAndCommentStatus !== 'submiting' 
          &&
          app.currentUser
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
    </div>
  )
}

export default Comment

