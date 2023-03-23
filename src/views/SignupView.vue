<template>
    <div>
        <!-- Sign up page -->
        <UserForm formType="signup" @submit="signup" />
    </div>
</template>

<script setup>
import UserForm from '../components/UserForm.vue';
function signup (){
alert("You clicked me")
client.post('/signup', {
    user: user
  })
    .then(res => {
      console.log("res data", res)
    })
    .catch(errors =>{
        console.log("error", errors)
    })
}
</script>

