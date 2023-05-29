import { useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'
import { profileReducer } from '../reducers/profile/reducer'
import { api } from '../services/api'
import { setPosts, setProfile } from '../reducers/profile/actions'

export interface FetchUserProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  html_url: string
  company: string
  followers: number
}

export interface PostProps {
  id: number
  title: string
  body: string
  created_at: string
  url: string
  number: number
}

export interface FetchPostsProps {
  total_count: number
  items: PostProps[]
}

export function useProfile() {
  const [state, dispatch] = useReducer(
    profileReducer,
    {
      avatar: '',
      name: '',
      bio: '',
      login: '',
      url: '',
      company: '',
      followers: 0,
      totalCount: 0,
      posts: [],
    }
  )

  async function fetchPosts(query: string) {
    const { data } = await api.get<FetchPostsProps>(
      `/search/issues?q=${query}%20repo:risingus/github-blog-ignite`
    )

    dispatch(setPosts(data))
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await api.get<FetchUserProps>('/users/risingus')
        dispatch(setProfile(data))
      } catch (error) {
        console.dir(error)
        toast.error('😅 falha ao carregar usuário', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }

    async function fetchInitialPosts() {
      try {
        await fetchPosts('')
      } catch (error) {
        console.dir(error)
        toast.error('😅 falha ao carregar posts', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }

    fetchInitialPosts()
    fetchUser()
  }, [])

  return {
    ...state,
    fetchPosts
  }
}
