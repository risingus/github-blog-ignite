import {
	formatDateToNow,
	formatNumber,
	formatString,
} from '../../utils/functions'
import { ActionTypes } from './actions'


export interface PostProps {
	title: string
	body: string
	formatedCreatedAt: string
	number: number
	id: number
}

export interface ProfileInitialProps {
	avatar: string
	name: string
	bio: string
	login: string
	url: string
	company: string
	followers: number
	totalCount: number
	posts: PostProps[]
}

interface PostsProps {
	id: number
	title: string
	body: string
	created_at: string
	url: string
	number: number
}

export const profileReducer = (state: ProfileInitialProps, action: any) => {
	switch (action.type) {
		case ActionTypes.SET_PROFILE: {
			return {
				...state,
				avatar: formatString(action?.payload?.value?.['avatar_url']),
				name: formatString(action?.payload?.value?.name),
				bio: formatString(action?.payload?.value?.bio),
				login: formatString(action?.payload?.value?.login),
				url: formatString(action?.payload?.value?.html_url),
				company: formatString(action?.payload?.value?.company),
				followers: formatNumber(action?.payload?.value?.followers),
			}
		}

		case ActionTypes.SET_POSTS: {
			return {
				...state,
				totalCount: formatNumber(action?.payload?.value?.['total_count']),
				posts:
					Array.isArray(action?.payload?.value?.items) &&
						action.payload.value.items.length > 0
						? action.payload.value.items.map((issue: PostsProps) => ({
							...issue,
							id: formatNumber(issue?.id),
							title: formatString(issue?.title),
							body: formatString(issue?.body),
							createdAt: formatString(issue?.['created_at']),
							formatedCreatedAt: formatDateToNow(issue?.['created_at']),
							url: formatString(issue?.url),
							number: formatNumber(issue?.number)
						}))
						: [],
			}
		}

		default: {
			return state
		}
	}

}
