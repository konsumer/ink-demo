/*

DOESN'T WORK!

But the idea is this will hot-reload the app, eventually

*/

import React from 'react'
import { watch } from 'chokidar'
import { render } from 'ink'
import clearRequire from 'clear-require'

class AppWrapper extends React.Component {
  render () {
    const App = require('./App').default
    return <App />
  }
}

let app

const handleChange = path => {
  if (app) {
    clearRequire.all()
    app.rerender()
  }
}

watch(__dirname, { ignored: /(^|[/\\])\../ })
  .on('unlink', handleChange)
  .on('add', handleChange)
  .on('change', handleChange)
  .on('ready', () => { app = render(<AppWrapper />, process.stdout) })
