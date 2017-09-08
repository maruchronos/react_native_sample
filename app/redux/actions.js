const actions = {
	USER_LOGIN : 'USER_LOGIN'
};

export {actions};

export function doLogin(user) {	
	return {
		type: actions.USER_LOGIN,
		payload: user
	}
}