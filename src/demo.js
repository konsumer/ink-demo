#!/usr/bin/env node

// this is the actual CLI that gets built

import React from 'react'
import { render } from 'ink'

import App from './App'

let app = render(<App />, process.stdout)

