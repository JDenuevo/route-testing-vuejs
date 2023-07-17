<template>
  <div class="app">
    <router-link to="/"></router-link>
    <router-link to="/signup"></router-link>
    <router-link to="/dashboard"></router-link>
  </div>

  <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />

  <router-view/>
</template>

<script>
  import Modal from './components/Modal_form.vue';

  export default {
    name: 'App',
    components: {
      Modal,
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };
</script>



