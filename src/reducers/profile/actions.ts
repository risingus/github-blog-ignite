import { FetchPostsProps, FetchUserProps } from '../../hooks/useProfile'

export enum ActionTypes {
	SET_PROFILE = 'SET_PROFILE',
	SET_POSTS = 'SET_POSTS',
}

export function setProfile(value: FetchUserProps) {
	return {
		type: ActionTypes.SET_PROFILE,
		payload: {
			value: value,
		},
	}
}

export function setPosts(value: FetchPostsProps) {
	return {
		type: ActionTypes.SET_POSTS,
		payload: {
			value: value,
		},
	}
}
