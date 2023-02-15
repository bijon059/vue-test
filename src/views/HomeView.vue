<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is first application by bijon</h1>
    <form @submit.prevent="submitForm($event)">
      <div style="margin-bottom: 10px">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="user.name">
      </div>
      <div style="margin-bottom: 10px">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="user.email">
      </div>
      <div style="margin-bottom: 10px">
        <label for="phone">Phone</label>
        <input id="phone" type="text" v-model="user.phone">
      </div>
      <div style="color: red" v-if="showError">{{this.errMsg}}</div>
      <button type="submit">Save</button>
    </form>
    <div>
      <h1>List of users</h1>
      <div>
        <ul>
          <li style="margin-bottom: 15px;text-align: center" v-for="user in users">
            <div>Name  : {{user.name}}</div>
            <div>Email : {{user.email}}</div>
            <div>Phone : {{user.phone}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from "@/firebase/index";
import { getDocs ,addDoc, collection } from "firebase/firestore";

export default {
  name: "HomeView",
  components: {
  },
  data(){
    return{
      errMsg:'',
      showError:true,
      user:{
        email:'',
        name:'',
        phone:'',
      },
      users:[],
    }
  },
  async mounted() {
    this.getUsers();
  },
  methods:{
    async getUsers(){
      let querySnapshot = await getDocs(collection(store, 'user'));
      let array = [];
      querySnapshot.forEach(doc => {
        let user = {
          id:'',
          name:'',
          email:'',
          phone:'',
        }
        user.id =doc.id;
        user.name =doc.data().name;
        user.email =doc.data().email;
        user.phone =doc.data().phone;
        array.push(user);
      });
      this.users=array;
    },
  async submitForm(e)
    {
      if (this.user.name!='' && this.user.email!='')
      {
        try {
          const docRef = await addDoc(collection(store, "user"), this.user);
          if (docRef.id)
          {
            this.getUsers();
          }
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }else {
        this.errMsg='Name and Email should be added';
        this.showError=true;
        let thisObj=this;
        setTimeout(()=>{
          thisObj.errMsg='';
          thisObj.showError=false;
        },2000);
      }

    }
  }
};
</script>
