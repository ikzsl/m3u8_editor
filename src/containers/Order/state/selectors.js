import {createSelector} from 'reselect'
import {denormalize} from 'normalizr'
import {channelListSchema} from 'containers/ListEditor/state/schema'
import {makeSelectEditorData} from 'containers/ListEditor/state/selectors'

export const selectOrder = (state) => state.get(`order`)

const makeSelectGroup = () => createSelector(
	selectOrder,
	order => order.get(`group`)
)

export const makeSelectGroupChannels = () => createSelector(
	makeSelectEditorData(`groups`),
	makeSelectEditorData(`channels`),
	makeSelectGroup(),
	(groups, channels, name) => {
		if (name && groups && channels) {
			const group = groups.get(name)
			const entities = {channels: channels.toJS()}

			return denormalize(group, channelListSchema, entities)
		}

		return null
	}
)