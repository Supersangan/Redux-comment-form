export const addComment = (id, author, text, dateTime) => {
  return {
    type: 'ADD_COMMENT',
    id,
    author, 
    text, 
    dateTime
  }
}

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    id
  }
}