import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion/macro'
import App from './App'
import * as serviceWorker from './serviceWorker'

injectGlobal`
  html, body {
    overflow: hidden;
  }

  body {
    margin: 0;
    background-color: black;
    /* Avoid scrolling on iPad */
    position: fixed;
  }

  @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap');
`

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
