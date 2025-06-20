type State = {
	isSettingMode: boolean
	downloadedPhoto?: File
	photoPreview?: string
	settingError: boolean
	settingSuccess: boolean
}

type Action =
	| { type: 'SET_SETTING_MODE'; payload: boolean }
	| { type: 'SET_DOWNLOADED_PHOTO'; payload?: File }
	| { type: 'SET_PHOTO_PREVIEW'; payload?: string }
	| { type: 'SET_SETTING_ERROR'; payload: boolean }
	| { type: 'SET_SETTING_SUCCESS'; payload: boolean }
	| { type: 'RESET_PHOTO' }

export const initialState: State = {
	isSettingMode: false,
	downloadedPhoto: undefined,
	photoPreview: undefined,
	settingError: false,
	settingSuccess: false,
}

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'SET_SETTING_MODE':
			return { ...state, isSettingMode: action.payload }
		case 'SET_DOWNLOADED_PHOTO':
			return { ...state, downloadedPhoto: action.payload }
		case 'SET_PHOTO_PREVIEW':
			return { ...state, photoPreview: action.payload }
		case 'SET_SETTING_ERROR':
			return { ...state, settingError: action.payload }
		case 'SET_SETTING_SUCCESS':
			return { ...state, settingSuccess: action.payload }
		case 'RESET_PHOTO':
			return { ...state, downloadedPhoto: undefined, photoPreview: undefined }
		default:
			return state
	}
}
