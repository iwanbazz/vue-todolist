import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyA3QnF4MWUzIya6mfnlYWqwIyVUWvdiaeE',
  authDomain: 'quasar-5d950.firebaseapp.com',
  databaseURL: 'https://quasar-5d950.firebaseio.com',
  projectId: 'quasar-5d950',
  storageBucket: 'quasar-5d950.appspot.com',
  messagingSenderId: '903489287642',
  appId: '1:903489287642:web:6b2d23e8e6fe696c20fce3',
  measurementId: 'G-XWC9KLK3GD',
}

firebase.initializeApp(config)

export const db = firebase.firestore()

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
