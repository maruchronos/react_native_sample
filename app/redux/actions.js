const types = {
	USER_LOGIN : 'USER_LOGIN',
	HIDE_LOADING : 'HIDE_LOADING',
	LOAD_FROM_API : 'LOAD_FROM_API',
	SHOW_LOADING: 'SHOW_LOADING'
};

const actions = {
	doLogin: function (user) {
		return {
			type: types.USER_LOGIN,
			payload: user
		}
	},
	hideLoading: function() {
		return {
			type: types.HIDE_LOADING,
			payload: null
		}
	},
	showLoading: function() {
		return {
			type: types.SHOW_LOADING,
			payload: null
		}
	},
	loadFromAPI: function(remoteData) {
		return {
			type: types.LOAD_FROM_API,
			payload: remoteData
		}
	}
}


export {actions, types};