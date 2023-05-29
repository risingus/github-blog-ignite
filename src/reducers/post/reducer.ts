import { formatDateToNow, formatNumber, formatString } from '../../utils/functions'
import { ActionTypes } from './actions'


interface PostReducerInitial {
	title: string
	login: string
	createdAt: string
	comments: number,
	body: string
}

export const postReducer = (state: PostReducerInitial, action: any) => {
	switch (action.type) {
		case ActionTypes.SET_POST_DATA: {
			return {
				...state,
				title: formatString(action?.payload?.value?.title),
				login: formatString(action?.payload?.value?.user?.login),
				createdAt: formatDateToNow(action?.payload?.value?.['created_at']),
				comments: formatNumber(action?.payload?.value?.comments),
				body: action?.payload?.value?.body || ''
			}
		}

		default: {
			return state
		}
	}
}
