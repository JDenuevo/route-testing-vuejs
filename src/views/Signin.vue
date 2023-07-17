<template>
  <div>
    <Signin_form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signin_form from '@/components/Signin_form.vue'

export default {
  name: 'Signin',
  components: {
    Signin_form
  }
}
</script>
