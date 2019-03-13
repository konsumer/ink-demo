import React from 'react'
import { Box } from 'ink'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'

import { useCounter } from './hooks'
import { withStdout } from './hoc'

const App = ({ stdout }) => {
  const [counter] = useCounter()
  return (
    <Box height={stdout.rows} width={stdout.columns} flexShrink={0} flexGrow={1} alignItems='center' justifyContent='center'>
      <Gradient name='rainbow'>
        <BigText text={`${counter} unicorns`} />
      </Gradient>
    </Box>
  )
}

export default withStdout(App)
