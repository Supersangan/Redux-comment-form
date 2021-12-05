import React from 'react'

const CommentsForm = (props) => {

  const {nextCommentId, addComment} = props
  let author = ''
  let text = ''

  return (
    <form className="comments__form form" action="#">

      <h2>Добавить комментарий:</h2>
      
      <div className="form__field">
        <label className="form__label" htmlFor="comments-form-input-author">
          Автор:
        </label>

        <input
          className="form__input"
          type="text"
          name="author"
          id="comments-form-input-author"
          onChange={ev => {author = ev.target.value}}
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="comments-form-input-text">
          Комментарий:
        </label>

        <textarea
          className="form__textarea"
          type="text"
          name="text"
          id="comments-form-input-text"
          onChange={ev => {text = ev.target.value}}
        >
        </textarea>
      </div>

      <div className="form__field">
        <button
          className="form__submit"
          onClick={ev => {
            ev.preventDefault()
            
            const now = new Date();
            const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
            
            document.querySelector('.form__input').value = ''
            document.querySelector('.form__textarea').value = ''
            
            addComment(nextCommentId, author, text, dateTime)
          }}
        >
          Добавить комментарий
        </button>
      </div>

    </form>
  )
}

export default CommentsForm;
