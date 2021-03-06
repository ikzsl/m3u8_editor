import {fromJS, Map, List} from 'immutable'
import {normalize} from 'normalizr'
import {channelListSchema, ChannelRecord} from '../schema'
import {testValues} from 'common/constants'
import reducer from '../reducer'
import {
	setNewList,
	setControl,
	sortChannel,
	sortGroup,
	setListName,
	createGroup,
	deleteGroup,
	editGroup,
	createChannel,
	editChannel,
	deleteChannel,
	copyChannel,
	moveChannel
} from '../actions'
import {initialState} from '../constants'

describe(`ListEditor reducer`, () => {
	it(`should return the initial state`, () => {
		const expectedResult = initialState
		expect(reducer(undefined, {})).toEqual(expectedResult)
	})
	it(`should set picker data`, () => {
		const groups = testValues.string
		const channels = [{id: 1, name: testValues.string}, {id: 2, name: testValues.string}]
		const normalizedChannels = normalize(channels, channelListSchema).entities.channels
		const playlistName = testValues.string
		const expectedResult = initialState.withMutations(map => map
			.set(`channels`, Map(normalizedChannels))
			.set(`groups`, fromJS(groups))
			.set(`playlistName`, playlistName))
		const action = setNewList({groups, channels, playlistName})
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`should set control data`, () => {
		const expectedResult = initialState
			.set(`control`, testValues.string)
		const action = setControl(testValues.string)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`should move channel in 'test' group`, () => {
		const mockedState = initialState
			.setIn([`groups`, `test`], List([`1`, `2`]))
		const expectedResult = initialState
			.setIn([`groups`, `test`], List([`2`, `1`]))
		const action = sortChannel({
			group: `test`,
			oldIndex: 1,
			newIndex: 0
		})
		expect(reducer(mockedState, action)).toEqual(expectedResult)
	})
	it(`should move items in 'index' group`, () => {
		const mockedState = initialState
			.setIn([`groups`, `index`], List([`1`, `2`]))
		const expectedResult = initialState
			.setIn([`groups`, `index`], List([`2`, `1`]))
		const action = sortGroup({
			oldIndex: 1,
			newIndex: 0
		})
		expect(reducer(mockedState, action)).toEqual(expectedResult)
	})
	it(`should set playlistName data`, () => {
		const expectedResult = initialState
			.set(`playlistName`, testValues.string)
		const action = setListName(testValues.string)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`should create new group`, () => {
		const expectedResult = initialState
			.setIn([`groups`, `${testValues.string}`], List())
			.updateIn([`groups`, `index`], index => index.push(testValues.string))
		const action = createGroup(testValues.string)
		expect(reducer(initialState, action)).toEqual(expectedResult)
	})
	it(`should delete group`, () => {
		const mockedState = initialState
			.setIn([`groups`, `${testValues.string}`], List())
			.updateIn([`groups`, `index`], index => index.push(testValues.string))
		const action = deleteGroup(testValues.string)
		expect(reducer(mockedState, action)).toEqual(initialState)
	})
	it(`should edit group`, () => {
		const mockedState = initialState
			.setIn([`groups`, `123`], List())
			.updateIn([`groups`, `index`], index => index.push(123))
		const expectedResult = initialState
			.setIn([`groups`, `${testValues.string}`], List())
			.updateIn([`groups`, `index`], index => index.push(testValues.string))
		const action = editGroup({
			current: `123`,
			newOne: testValues.string
		})
		expect(reducer(mockedState, action)).toEqual(expectedResult)
	})
	it(`should create channel`, () => {
		const action = createChannel({
			channel: {name: `test`},
			group: `none`
		})
		const result = reducer(initialState, action)
		const group = result.getIn([`groups`, `none`]).toJS()
		expect(group).toHaveLength(1)
		expect(Object.keys(result.get(`channels`).toJS())).toContain(group[0])
	})
	it(`should delete channel`, () => {
		const mockedState = initialState
			.updateIn([`groups`, `none`], group => group.push(`test`))
			.setIn([`channels`, `test`], new ChannelRecord())
		const action = deleteChannel({
			ids: [`test`],
			group: `none`
		})
		expect(reducer(mockedState, action)).toEqual(initialState)
	})
	it(`should edit channel`, () => {
		const channel = new ChannelRecord({id: `test`, name: `test`})
		const mockedState = initialState
			.updateIn([`groups`, `none`], group => group.push(`test`))
			.setIn([`channels`, `test`], new ChannelRecord())
		const expectedResult = mockedState
			.setIn([`channels`, `test`], new ChannelRecord({id: `test`, ...channel}))
		const action = editChannel({
			channel,
			id: `test`
		})
		expect(reducer(mockedState, action)).toEqual(expectedResult)
	})
	it(`should copy channel`, () => {
		const channel = new ChannelRecord({id: `test`, name: `test`})
		const mockedState = initialState
			.setIn([`groups`, `test2`], List())
			.setIn([`channels`, `test`], new ChannelRecord(channel))
		const action = copyChannel({
			group: `test2`,
			ids: [`test`]
		})
		const result = reducer(mockedState, action)
		const group = result.getIn([`groups`, `test2`]).toJS()
		expect(group).toHaveLength(1)
		expect(Object.keys(result.get(`channels`).toJS())).toContain(group[0])
	})
	it(`should move channel`, () => {
		const channel = new ChannelRecord({id: `test`, name: `test`})
		const mockedState = initialState
			.setIn([`groups`, `test`], List([`test`]))
			.setIn([`groups`, `test2`], List())
			.setIn([`channels`, `test`], new ChannelRecord(channel))
		const expectedResult = initialState
			.setIn([`groups`, `test`], List())
			.setIn([`groups`, `test2`], List([`test`]))
			.setIn([`channels`, `test`], new ChannelRecord(channel))
		const action = moveChannel({
			from: `test`,
			ids: [`test`],
			to: `test2`
		})
		expect(reducer(mockedState, action)).toEqual(expectedResult)
	})
})