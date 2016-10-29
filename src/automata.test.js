import automata, { mapStatesToNewStateByRule, createNewGeneration } from './automata'

test('automata exist', () => {
	expect(automata).toBeDefined()
})

test('mapStatesToNewStateByRule exist', () => {
	expect(mapStatesToNewStateByRule).toBeDefined()
})

test('mapStatesToNewStateByRule is currable', () => {
	const rule = [0, 1, 2, 3, 4, 5, 6, 7]

	expect( typeof mapStatesToNewStateByRule(rule) ).toBe('function')
	expect( typeof mapStatesToNewStateByRule(rule, 1) ).toBe('function')
	expect( typeof mapStatesToNewStateByRule(rule, 1, 0) ).toBe('function')

	expect( typeof mapStatesToNewStateByRule(rule, 1, 0, 1) ).not.toBe('function')
})

test('mapStatesToNewStateByRule throws if no rule specified', () => {
	expect(() => mapStatesToNewStateByRule(undefined, 1, 0, 1) ).toThrow('No rule specified')
})

// test('mapStatesToNewStateByRule throws if rule isn\'t valid ', () => {
// 	expect(() => mapStatesToNewStateByRule([1, 2], 1, 0, 1) ).toThrow('Rule is not valid')
// 	expect(() => mapStatesToNewStateByRule(5, 1, 0, 1) ).toThrow('Rule is not valid')
// })

test('mapStatesToNewStateByRule works correctly', () => {
	const rule = [0, 1, 2, 3, 4, 5, 6, 7]
	const mapWithRule = mapStatesToNewStateByRule(rule)

	expect( mapWithRule(1, 1, 1) ).toBe(7)
	expect( mapWithRule(1, 1, 0) ).toBe(6)
	expect( mapWithRule(1, 0, 1) ).toBe(5)
	expect( mapWithRule(1, 0, 0) ).toBe(4)
	expect( mapWithRule(0, 1, 1) ).toBe(3)
	expect( mapWithRule(0, 1, 0) ).toBe(2)
	expect( mapWithRule(0, 0, 1) ).toBe(1)
	expect( mapWithRule(0, 0, 0) ).toBe(0)
})

test('createNewGeneration exist', () => {
	expect(createNewGeneration).toBeDefined()
})

test('createNewGeneration returns empty array if matrix is empty', () => {
	const rule = [0, 1, 2, 3, 4, 5, 6, 7]
	expect( createNewGeneration(rule, []) ).toEqual([])
})

test('createNewGeneration returns empty array if rule is undefined', () => {
	expect( createNewGeneration(undefined, []) ).toEqual([])
})

test('createNewGeneration creates new row by rule', () => {
	const rule = [0, 1, 2, 3, 4, 5, 6, 7]

})