import R from 'ramda'

const { compose, curry, range, map, last, forEach } = R

export function boolToNumber(bool) {
	return Number(bool)
}

export function getRandomBinary() {
	return Math.random() >= 0.5
}

export function dec2bin(dec){
	return (dec >>> 0).toString(2)
}

export const getRandomBinaryInt = compose(boolToNumber, getRandomBinary)

export const getNRandomBinaries = (n) => {
	return map(getRandomBinaryInt, range(0, n))
}