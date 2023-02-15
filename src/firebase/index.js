import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCaT4NPYJMjt7Yzp_049bWQKb-9KhSTfZ4",
    authDomain: "test-vue-6cd4f.firebaseapp.com",
    projectId: "test-vue-6cd4f",
    storageBucket: "test-vue-6cd4f.appspot.com",
    messagingSenderId: "343847469308",
    appId: "1:343847469308:web:7d6ea023a3ff4818cfd779"
};
const firebase = initializeApp(firebaseConfig);
const store = getFirestore(firebase);
export {store}
export default firebase;