/*

DOESN'T WORK!

But the idea is this will hot-reload the app, eventually

*/

import React from 'react'
import { watch } from 'chokidar'
import { render } from 'ink'
import clearRequire from 'clear-require'

let ready = false
let app

class AppWrapper extends React.Component {
  render () {
    const App = require('./App').default
    return <App />
  }
}

watch(__dirname, { ignored: /(^|[/\\])\../ })
  .on('all', (event, path) => {
    if (ready && (event === 'unlink' || event === 'add' || event === 'change')) {
      clearRequire.all()
      app.rerender()
    }
  })
  .on('ready', () => {
    ready = true
    app = render(<AppWrapper />, process.stdout)
  })