<template>
  <div>
    <p>{{msg}}</p>
    <ul>
      <li v-for="item in newList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
// Vue.component('todo-item', {
//   template: '<li>This is a todo</li>'
// })
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAF8Yer7hMjVN1nivKGlxh4r5aWkGnBXQA',
  authDomain: 'manage-work.firebaseapp.com',
  databaseURL: 'https://manage-work.firebaseio.com',
  projectId: 'manage-work',
  storageBucket: 'manage-work.appspot.com',
  messagingSenderId: '47330639078'
}
firebase.initializeApp(config)
const firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)
// const db = firebase.firestore()
let _24hCollection = firestore.collection('24h_news')
let newList = []
let query = _24hCollection
  .get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.')
      return
    }
    // let newList = []
    snapshot.forEach(doc => {
      // console.log(doc.id, '=>', doc.data())
      newList.push(doc.data())
    })
  })
  .catch(err => {
    console.log('Error getting documents', err)
  })
console.log('newList', newList)
// console.log('all24hs', all24hs)
// console.log('typeof(newList)', newList)
console.log('typeof(newList)', query)

export default {
  name: 'HelloWorld',
  // firebase: {
  //   news: _24hCollection
  // },
  data () {
    return {
      msg: 'We to Your Vue.js App',
      lalas: [{ text: 'ahihi' }, { text: 'bhihi' }, { text: 'chihi' }],
      newList: newList
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
