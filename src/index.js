import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import CommentsApp from './containers/App'
import {createStore} from 'redux'
import comments from './reducers'

const storeOfLocalStorage = JSON.parse(localStorage.getItem('store') || '[]')

const initialState = {
  comments: storeOfLocalStorage.comments || [],
  lastCommentId: storeOfLocalStorage.lastCommentId || 0
}

const store = createStore(comments, initialState)
ReactDOM.render(
  <React.StrictMode>
    <CommentsApp store={store} />
  </React.StrictMode>,
  document.getElementById('app')
) 