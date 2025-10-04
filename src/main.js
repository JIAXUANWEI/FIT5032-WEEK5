// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'




const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuaHQyQ6E4IvBQxd3VjCAkoVJRtV1FqZU",
  authDomain: "week7-jiaxuanwei.firebaseapp.com",
  projectId: "week7-jiaxuanwei",
  storageBucket: "week7-jiaxuanwei.firebasestorage.app",
  messagingSenderId: "19831207995",
  appId: "1:19831207995:web:a01bb2f66940139b63c41e"
};

// Initialize Firebase
 initializeApp(firebaseConfig);