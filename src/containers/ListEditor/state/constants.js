import {fromJS} from 'immutable'

export const LOAD_NEW_LIST = `ListEditor/LOAD_NEW_LIST`
export const SET_NEW_LIST = `ListEditor/SET_NEW_LIST`
export const SET_CONTROL = `ListEditor/SET_CONTROL`
export const SORT_CHANNEL = `ListEditor/SORT_CHANNEL`
export const SORT_GROUP = `ListEditor/SORT_GROUP`
export const SET_LIST_NAME = `ListEditor/SET_LIST_NAME`

export const initialState = fromJS({
	control: `edit`,
	groups: {
		none: [],
		index: [`none`]
	},
	channels: {},
	playlistName: null
})