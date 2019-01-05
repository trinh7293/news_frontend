<template>
  <div>
    <ul>
      <new-item
        v-for= 'item in allPosts'
        v-bind:newItem = 'item'
        v-bind:key = 'item.id'
      ></new-item>
    </ul>
  </div>
</template>

<script>
// Vue.component('todo-item', {
//   template: '<li>This is a todo</li>'
// })
import Vue from 'vue'
import { getAllPosts } from '../vuex/actions'

Vue.component('new-item', {
  props: ['newItem'],
  template: '<li>{{ newItem.title }}</li>'
})

export default {
  vuex: {
    getters: {
      allPosts: ({news}) => news.allPosts
    },
    actions: {
      getAllPosts
    }
  },
  created () {
    // this.getAllPosts()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
