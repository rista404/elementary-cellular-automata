import React from 'react'
import { render } from 'react-dom'
import automata from './automata'
import AutomataGrid from './AutomataGrid'

const rootElement = document.getElementById('root')

const matrix = automata(50, 64, 60)
const automataGrid = <AutomataGrid matrix={matrix} />

render(automataGrid, rootElement)
