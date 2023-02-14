<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is first application by bijon</h1>
    <form @submit="submitForm($event)">
      <div style="margin-bottom: 10px">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name">
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {
  },
  data(){
    return{
      email:'',
      name:'',
    }
  },
  methods:{
    submitForm(e)
    {
      console.log('form submitted')
      console.log(this.email)
      console.log(this.name)
    }
  }
};
</script>
