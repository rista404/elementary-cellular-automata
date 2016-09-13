import { curry, last, length, split, reverse, compose, map } from 'ramda'
import { getNRandomBinaries, dec2bin } from './utils'

// mapStatesToNewStateByRule :: [Int] -> Int -> Int -> Int -> Int
export const mapStatesToNewStateByRule = curry((rule, left, top, right) => {
	if(left && top && right) return rule[7]
	if(left && top && !right) return rule[6]
	if(left && !top && right) return rule[5]
	if(left && !top && !right) return rule[4]
	if(!left && top && right) return rule[3]
	if(!left && top && !right) return rule[2]
	if(!left && !top && right) return rule[1]
	if(!left && !top && !right) return rule[0]
})

// getCellStates :: [Int] -> [Int] -> [Int]
export const getCellStates = (rule, lastGeneration) => {
	const lastGenerationLength = length(lastGeneration)

	return lastGeneration.reduce((allNewCells, topCellState, topCellIndex, lastGeneration) => {
		const currCellState = mapStatesToNewStateByRule(
			rule,
			topCellIndex ? lastGeneration[topCellIndex - 1] : last(lastGeneration),
			topCellState,
			topCellIndex === lastGenerationLength - 1 ? lastGeneration[0] : lastGeneration[topCellIndex + 1]
		)

		return [...allNewCells, currCellState]
	}, [])
}

// createNewGeneration :: [Bool] Rule -> [[Int]] -> [Int]
export const createNewGeneration = (rule, matrix) => {
	const lastGeneration = last(matrix)

	return getCellStates(rule, lastGeneration)
}

// getGenerations :: [Int] -> [[Int]] -> Int
export function getGenerations(rule, matrix, n) {
	if(n === 0) return matrix

	const newGeneration = createNewGeneration(rule, matrix)

	const updatedMatrix = [...matrix, newGeneration]

	return getGenerations(rule, updatedMatrix, n - 1)
}


// automata :: Int -> [Int, Int] -> [[Int]]
export default function automata(number, [x, y] = [60, 60]) {
	const rule = compose(map(Number), reverse, dec2bin)(number)
	const randomGeneration = getNRandomBinaries(x)

	return getGenerations(rule, [randomGeneration], y)
}