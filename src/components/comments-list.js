import React from 'react'

const CommentsList = (props) => {
  const {comments, removeComment} = props

  return (
    <div>
      <ul className="comments__list">
        {
          comments.map((comment) => {
            return (
              <li className="comments__item comment" data-id={comment.id} key={comment.id} >

                <span className="comment__author">{comment.author}: </span>
                <span className="comment__text">{comment.text}</span>
                <span className="comment__date-time">{comment.dateTime}</span>
                <button
                  className="comment__delete"
                  onClick={ev => {
                    ev.preventDefault()
                    removeComment(comment.id)
                  }}
                >
                  Удалить
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}

export default CommentsList
