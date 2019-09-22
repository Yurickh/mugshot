import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion/macro'
import Mugshot from './Mugshot'
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

ReactDOM.render(<Mugshot />, document.getElementById('root'))

serviceWorker.register()
