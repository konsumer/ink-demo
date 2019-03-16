import React from 'react'
import { Box } from 'ink'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'

import { useCounter, useStdout } from './hooks'

const App = () => {
  const [counter] = useCounter()
  const stdout = useStdout()
  return (
    <Box height={stdout.rows} width={stdout.columns} flexShrink={0} flexGrow={1} alignItems='center' justifyContent='center'>
      <Gradient name='rainbow'>
        <BigText text={`${counter % 100} unicorns`} />
      </Gradient>
    </Box>
  )
}

export default App
