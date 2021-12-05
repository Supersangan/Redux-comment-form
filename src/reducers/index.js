const comments = (state = [], action) => {
  let newState

  switch (action.type) {
    case 'ADD_COMMENT':
      const {id, author, text, dateTime} = action

      newState = {
        comments: [
          ...state.comments,
          {
            id,
            author,
            text,
            dateTime
          }
        ],
        lastCommentId: id
      }

      localStorage.setItem('store', JSON.stringify(newState));

      return newState

    case 'REMOVE_COMMENT':
      const comments = state.comments.filter(comment => comment.id !== action.id)

      newState = {
        comments,
        lastCommentId: state.lastCommentId
      }

      localStorage.setItem('store', JSON.stringify(newState));

      return newState

    default:
      return state
  }
}

export default comments;