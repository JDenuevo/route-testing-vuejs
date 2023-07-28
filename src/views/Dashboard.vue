<template>
  <div>
    <Navbar_form/>
    <br>
    <Table_form/>
    
  </div>
</template>
  
<script>

// @ is an alias to /src
import Navbar_form from '@/components/Navbar_form.vue'
import Table_form from '@/components/Table_form.vue'


export default {
  name: 'Dashboard',
  components: {
      Navbar_form,
      Table_form
  }
}
</script>
  