export enum ActionTypes {
	SET_POST_DATA = 'SET_POST_DATA',
}

interface UserData {
	login: string
}

interface PostDataProps {
	title: string
	userName: string
	user: UserData
	created_at: string
	comments: number
	body: string
}

export function setPostData(post: PostDataProps) {
	return {
		type: ActionTypes.SET_POST_DATA,
		payload: {
			value: post,
		},
	}
}
