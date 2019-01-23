
import ActionTypes from './constants';

export function getEnvConfig() {
	return {
		type: ActionTypes.GET_ENV_CONFIG
	};
}

export function getEnvConfigSuccess(config) {
	return {
		type: ActionTypes.GET_ENV_CONFIG_SUCCESS,
		config: config
	};
}

export function navigateToErrorPage() {
	return {
		type: ActionTypes.NAVIGATE_TO_ERROR_PAGE
	};
}
