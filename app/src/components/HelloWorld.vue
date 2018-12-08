<template>
<div>
  <p>{{msg}}</p>
  <ol>
    <li v-for= "item in lalas">
      {{item.text}}
    </li>
  </ol>

</div>
</template>

<script>
// Vue.component('todo-item', {
//   template: '<li>This is a todo</li>'
// })
import db from '../../database/firestore' 
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lalas: [
        {text: 'ahihi'},
        {text: 'bhihi'},
        {text: 'chihi'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
