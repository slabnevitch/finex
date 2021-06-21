/**
 * Подключаем файлы модуля
 */
import state from './moduleMessengerState.js'
import mutations from './moduleMessengerMutations.js'
import actions from './moduleMessengerActions.js'
import getters from './moduleMessengerGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
