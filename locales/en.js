import {defineMessages} from 'react-intl'

export default defineMessages({
	test: `Test message`,
	listUpload: `Click to Upload`,
	'yes': `Yes`,
	'no': `No`,
	'edit': `Edit`,
	'add': `Add`,
	'cancel': `Cancel`,
	'build': `Build`,
	'stop': `Stop`,
	'again': `Again`,
	'apply': `Apply`,
	'clear': `Clear`,
	'waitMessage': `Please, wait...`,
	'underConstruction': `Functionality is under construction`,
	'control.import': `Import`,
	'control.import.popover.content': `Opens the playlist upload panel.
		Allows to upload the source list.`,
	'control.compare': `Compare`,
	'control.compare.popover.content': `Opens the playlists compare result.
		Allows to select new items to add or unnecessary to delete.`,
	'control.edit': `Edit`,
	'control.edit.popover.content': `Opens the playlist creation panel.
		Allows to manage the elements of the list and distribute the elements into groups.`,
	'control.order': `Order`,
	'control.order.popover.content': `Opens the sort panel.
		Allows to rearrange the order of the list elements and groups.`,
	'control.export': `Export`,
	'control.export.popover.content': `Opens the playlist export panel.
		Allows you to save a formed list.`,
	'listEditor.sorter.groupsSelector.label': `Group`,
	'listEditor.sorter.groupsSelector.placeholder': `Select group`,
	'import.radio.header': `Select import list method:`,
	'import.radio.newList': `Import new list`,
	'import.radio.compareList': `Compare with new list`,
	'import.useLocalStorageHeader': `Select browser's local storage usage:`,
	'import.useLocalStorage': `Use browser's local storage when editing list`,
	'import.loadNamedStorageList.text': `Local storage contains "{name}" list of {date}`,
	'import.loadNoNamedStorageList.text': `Local storage contains "unnamed" list of {date}`,
	'import.dragInstructions': `Click or drag file to this area to upload`,
	'import.dragFile.message.success':
		`File {name} uploaded successfully. Continue with next page.`,
	'compare.tab.newChannels.title': `New channels`,
	'compare.tab.newLinks.title': `New links`,
	'compare.tab.lostChannels.title': `Lost channels`,
	'compare.tab.newChannels.description':
		`Selected new channels will be inserted into the bottom of the same groups`,
	'compare.tab.newLinks.description':
		`Selected channels will be updated with provided new links`,
	'compare.tab.lostChannels.description':
		`Selected lost channels will be permanently deleted from the source list. 
		Please be careful and check it twice`,
	'compare.table.group.title': `Group`,
	'compare.table.name.title': `Name`,
	'compare.table.link.title': `Link`,
	'compare.table.newLink.title': `New link`,
	'order.searchChannel.placeholder': `Input channel name`,
	'order.channelList.label': `Channel sorting`,
	'order.channelList.placeholder': `Select group`,
	'order.groupList.label': `Group sorting`,
	'order.groupList.placeholder': `Load list`,
	'edit.playlistName.addon': `Playlist name`,
	'edit.playlistName.placeholder': `Enter playlist name`,
	'edit.group.add.placeholder': `Enter group name`,
	'edit.group.add.message': `Group "{value}" created`,
	'edit.group.delete.confirm.title': `Delete group "{group}" ?`,
	'edit.group.delete.button': `Delete group`,
	'edit.channel': `Channel`,
	'edit.channel.delete.confirm.title':
		`Delete {count, plural, one {# channel} other {# channels}} ?`,
	'edit.channel.title': `Title`,
	'edit.channel.title.message': `Please, enter the title of the channel`,
	'edit.channel.link': `Link`,
	'edit.channel.link.message': `Please, enter the link of the channel`,
	'edit.channel.duration': `Duration`,
	'edit.channel.duration.message': `Please, enter the duration of the track`,
	'edit.channel.collapse.header': `Additional options`,
	'edit.channel.tvgName.placeholder': `Name for teleguide`,
	'edit.channel.audioTrack.popover': `Audio track definition of this channel, 
		if it's supported by stream. 
		Write language codes in ISO 639-2 standard. 
		You may use several codes separated by comma (e.g.: eng, rus, deu). 
		The first item in the list will be defined as default`,
	'export.configurator.header': `Please, select options`,
	'export.configurator.groupTitleParam': `Put group name into the channel's group-title param`,
	'export.configurator.groupExtentionParam': `Put group name into the channel's #EXTGRP directive`,
	'export.configurator.playlistNameParam': `Put playlist name into the result`,
	'export.configurator.additionalParam': `Put additional channels directives before the channel link`,
	'export.configurator.formatDurationParam': `Set default channel duration as -1 (stream)`,
	'export.configurator.tvgShiftParam': `Put teleguide timeshift into the channel's tvg-shift param`,
	'export.configurator.tvgNameParam': `Put teleguide channel name into the channel's tvg-name param`,
	'export.configurator.tvgLogoParam': `Put teleguide channel logo into the channel's tvg-logo param`,
	'export.configurator.audioTrackParam': `Put audio tracks settings into the channel's audio-track param`,
	'export.result.header': `Is this OK ?`,
	'export.defaultListName': `playlist`
})