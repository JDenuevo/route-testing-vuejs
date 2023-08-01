<template>
  <div class="dark:bg-gray-950">
    <div>
      <Navbar_form/>
     
      <Table_form/>
    </div>


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
      Table_form,

  }
}

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

</script>
  