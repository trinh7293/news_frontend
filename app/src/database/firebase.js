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
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)
// const db = firebase.firestore()

let get24hNews = () => {
  let newList = []
  firestore.collection('24h_news')
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
  return newList
}
export { get24hNews }
