import {
  RECEIVE_POSTS
} from '../mutation-types'

const state = {
  allPosts: []
}

const mutation = {
  [RECEIVE_POSTS]: (state, allPosts) => {
    console.log('receiposts')
    state.allPosts = allPosts
  }
}

export default {
  state,
  mutation
}
