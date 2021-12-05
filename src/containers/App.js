import React from 'react'
import {connect} from 'react-redux'

import CommentsList from '../components/comments-list'
import CommentsForm from '../components/comments-form'

import {addComment, removeComment} from '../actions'

let CommentsApp = (props) => {
  const {state, addComment, removeComment} = props
  return (
    <div class="app-container">
      <CommentsList comments={state.comments} removeComment={removeComment} />
      <CommentsForm nextCommentId={state.lastCommentId + 1} addComment={addComment} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state: {
      comments: state.comments,
      lastCommentId: state.lastCommentId
    }
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (id, author, text, dateTime) => dispatch(addComment(id, author, text, dateTime)),
    removeComment: (id) => dispatch(removeComment(id))
  }
} 

CommentsApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsApp)

export default CommentsApp