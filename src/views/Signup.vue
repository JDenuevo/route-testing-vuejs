<template>
    <div>
      <Signup_form/>
    </div>
  </template>
  
  <script>
  
  // @ is an alias to /src
  import Signup_form from '@/components/Signup_form.vue'
  
  export default {
    name: 'Signup',
    components: {
        Signup_form
    }
  }
  </script>
  