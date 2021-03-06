import {defineMessages} from 'react-intl'

export default defineMessages({
	test: `Тестовое сообщение`,
	listUpload: `Загрузить список`,
	'yes': `Да`,
	'no': `Нет`,
	'edit': `Изменить`,
	'add': `Добавить`,
	'cancel': `Отменить`,
	'build': `Сформировать`,
	'stop': `Остановить`,
	'again': `Заново`,
	'apply': `Применить`,
	'clear': `Отчистить`,
	'waitMessage': `Пожалуйста, ждите...`,
	'underConstruction': `Функционал в разработке`,
	'control.import': `Импорт`,
	'control.import.popover.content': `Открывает панель импорта плэйлиста.
		Позволяет импортировать исходный лист.`,
	'control.compare': `Сравнение`,
	'control.compare.popover.content': `Открывает панель результатов сравнения листов.
		Позволяет выбрать новые элементы на добавление или ненужные на удаление.`,
	'control.edit': `Редактирование`,
	'control.edit.popover.content': `Открывает панель формирования плэйлиста.
		Позволяет управлять элементами листа и распределять элементы по группам.`,
	'control.order': `Сортировка`,
	'control.order.popover.content': `Открывает панель сортировки.
		Позволяет перемещать элементы листа и групп.`,
	'control.export': `Экспорт`,
	'control.export.popover.content': `Открывает панель экспорта плэйлиста.
		Позволяет сохранить сформированный лист.`,
	'listEditor.sorter.groupsSelector.label': `Группа`,
	'listEditor.sorter.groupsSelector.placeholder': `Выберите группу`,
	'import.radio.header': `Выберите метод загрузки нового листа:`,
	'import.radio.newList': `Загрузить новый лист`,
	'import.radio.compareList': `Сравнить с новым листом`,
	'import.useLocalStorageHeader': `Выберите опцию локального хранилища браузера:`,
	'import.useLocalStorage': `Использовать локальное хранилище браузера при редактировании листа`,
	'import.loadNamedStorageList.text': `Локальное хранилище содержит "{name}" лист от {date}`,
	'import.loadNoNamedStorageList.text': `Локальное хранилище содержит безымянный лист от {date}`,
	'import.dragInstructions': `Нажмите на область или перенесите сюда файл`,
	'import.dragFile.message.success':
		`Файл {name} успешно загружен. Продолжите на следующей странице.`,
	'import.compare.noDiff': `Не найдено отличий в сравниваемом файле`,
	'compare.tab.newChannels.title': `Новые каналы`,
	'compare.tab.newLinks.title': `Новые ссылки`,
	'compare.tab.lostChannels.title': `Не найденные каналы`,
	'compare.tab.newChannels.description':
		`Выбранные новые каналы будут добавлены в конец соответствующих групп`,
	'compare.tab.newLinks.description':
		`Выбранные каналы будут обновлены соответствующими новыми ссылками`,
	'compare.tab.lostChannels.description':
		`Выбранные отсутствующие каналы будут необратимо удалены из исходного списка. 
		Пожалуйста будьте внимательны при выборе`,
	'compare.table.group.title': `Группа`,
	'compare.table.name.title': `Название`,
	'compare.table.link.title': `Ссылка`,
	'compare.table.newLink.title': `Новая ссылка`,
	'order.searchChannel.placeholder': `Введите название канала`,
	'order.channelList.label': `Сортировка каналов`,
	'order.channelList.placeholder': `Выберите группу`,
	'order.groupList.label': `Сортировка групп`,
	'order.groupList.placeholder': `Загрузите список`,
	'edit.playlistName.addon': `Название листа`,
	'edit.playlistName.placeholder': `Введите название листа`,
	'edit.group.add.placeholder': `Введите название группы`,
	'edit.group.add.message': `Группа "{value}" создана`,
	'edit.group.delete.confirm.title': `Удалить группу "{group}" ?`,
	'edit.group.delete.button': `Удалить группу`,
	'edit.channel': `Канал`,
	'edit.channel.delete.confirm.title':
		`Удалить {count, plural, one {# канал} few {# канала} many {# каналов}} ?`,
	'edit.channel.title': `Название`,
	'edit.channel.title.message': `Необходимо ввести название канала`,
	'edit.channel.link': `Ссылка`,
	'edit.channel.link.message': `Необходимо ввести ссылку на канал`,
	'edit.channel.duration': `Длительность`,
	'edit.channel.duration.message': `Необходимо ввести продолжительность трека`,
	'edit.channel.collapse.header': `Дополнительные поля`,
	'edit.channel.tvgName.placeholder': `Название канала в телепрограмме`,
	'edit.channel.audioTrack.popover': `Определение аудио дорожек канала, 
		если эта возможность поддерживается оператором. 
		Коды языка в формате ISO 639-2. 
		Допускается использование нескольких кодов через запятую (e.g.: eng, rus, deu). 
		Первый указанный код будет использован по умолчанию`,
	'export.configurator.header': `Пожалуйста, выберите опции`,
	'export.configurator.groupTitleParam': `Добавлять название группы в параметр group-title канала`,
	'export.configurator.groupExtentionParam': `Добавлять название группы в директиву #EXTGRP канала`,
	'export.configurator.playlistNameParam': `Добавить название плэйлиста`,
	'export.configurator.additionalParam': `Добавлять дополнительные директивы канала перед ссылкой`,
	'export.configurator.formatDurationParam': `Устанавливать продолжительность канала по умолчанию в -1 (поток)`,
	'export.configurator.tvgShiftParam': `Добавлять корректировку времени телепрограммы в параметр tvg-shift канала`,
	'export.configurator.tvgNameParam': `Добавлять название канала для телепрограммы в параметр tvg-name канала`,
	'export.configurator.tvgLogoParam': `Добавлять наименование логотипа канала для телепрограммы в параметр tvg-logo канала`,
	'export.configurator.audioTrackParam': `Добавлять настройки аудио дорожек в параметр audio-track канала`,
	'export.result.header': `Всё верно ?`,
	'export.defaultListName': `playlist`
})