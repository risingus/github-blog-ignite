import { useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { postReducer } from '../reducers/post/reducer'
import { setPostData } from '../reducers/post/actions'


export function usePost() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    postReducer,
    {
      title: '',
      login: '',
      createdAt: '',
      comments: 0,
      body: ''
    }
  )

  useEffect(() => {
    async function fetchPost() {
      try {
        if (!id) {
          navigate('/')
          return
        }
        const { data } = await api.get(`/repos/risingus/github-blog-ignite/issues/${id}`)
        dispatch(setPostData(data))
      } catch (error) {
        toast.error('😅 falha ao carregar post', {
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

    fetchPost()
  }, [id, navigate])

  return {
    ...state,
  }
}
