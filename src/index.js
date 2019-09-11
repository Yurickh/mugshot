import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion/macro'
import App from './App'
import * as serviceWorker from './serviceWorker'

injectGlobal`
  body {
    background-color: red;
    margin: 0;
  }

  @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap');
`

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
