import { useState, useEffect, useContext } from 'react'
import { StdoutContext } from 'ink'

// simple demo-counter hook
export const useCounter = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const i = setInterval(() => setCounter(c => c + 1), 500)
    return () => clearInterval(i)
  })
  return [counter, setCounter]
}

export const useStdout = () => useContext(StdoutContext).stdout
