<template>
  <div>
    <p>{{msg}}</p>
    <ul>
      <new-item
        v-for= 'item in newList'
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
import {get24hNews} from '../database/firebase'

Vue.component('new-item', {
  props: ['newItem'],
  template: '<li>{{ newItem.title }}</li>'
})

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newList: get24hNews()
    }
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
