import React, { useState, useEffect } from 'react'
import { render, Color } from 'ink'
import Box from 'ink-box'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  let i
  useEffect(() => {
    i = setInterval(() => {
      setCounter(c => c + 1)
    }, 500)
  }, () => {
    clearInterval(i)
  })

  return (
    <Box borderStyle='round' borderColor='cyan' float='center' padding={1}>
      I Love <Color magenta>Unicorns</Color> * {counter} ❤
    </Box>
  )
}

render(<Counter />)
