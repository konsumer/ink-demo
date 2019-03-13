import React from 'react'
import { StdoutContext } from 'ink'

// HOC to give your component stdout
export const withStdout = (Component) => props => <StdoutContext.Consumer>{({ stdout }) => <Component stdout={stdout} {...props} />}</StdoutContext.Consumer>
