import * as types from './mutation-types'
import { getNews } from '../database/firebase'

export const getAllPosts = ({ dispatch }) => {
  getNews(posts => {
    dispatch(types.RECEIVE_POSTS, posts)
  })
}
