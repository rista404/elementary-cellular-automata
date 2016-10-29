import React from 'react'
import { render } from 'react-dom'
import automata from './automata'
import AutomataGrid from './AutomataGrid'

const rootElement = document.getElementById('root')

const cellsX = Math.floor(window.innerWidth / 14)
const cellsY = Math.floor(window.innerHeight / 14)

const rule = 90

const matrix = automata(rule, [cellsX, cellsY])
const automataGrid = <AutomataGrid matrix={matrix} />

render(automataGrid, rootElement)
