import { useState, useEffect } from 'react'

// simple demo-counter hook
export const useCounter = () => {
  const [counter, setCounter] = useState(0)
  let i
  useEffect(() => {
    i = setInterval(() => {
      setCounter(c => c + 1)
    }, 500)

    return () => clearInterval(i)
  })
  return [counter, setCounter]
}
