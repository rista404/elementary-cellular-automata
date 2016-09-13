import React from 'react'
import './App.css'

export const Cell = ({state}) => <div className={`cell state--${state}`}></div>

export const Generation = ({children, states}) => (
	<div className="generation">
		{states.map((state, index) => (
			<Cell key={index} state={state} />
		))}
	</div>
)

const AutomataGrid = ({matrix}) => (
	<main>
		{matrix.map((row, index) => <Generation key={index} states={row} /> )}
	</main>
)

export default AutomataGrid