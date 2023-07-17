<template>
  <div>
    <Dashboard_form/>
    <Table_form/>
    
  </div>
</template>
  
<script>

// @ is an alias to /src
import Dashboard_form from '@/components/Dashboard_form.vue'
import Table_form from '@/components/Table_form.vue'


export default {
  name: 'Dashboard',
  components: {
      Dashboard_form,
      Table_form
  }
}
</script>
  