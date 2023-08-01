<template>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-24">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 flex justify-between">

                  <button class="mx-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button" @click="showModal1 = true">View</button>
                  
                  <button class="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-0 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="showModal2 = true">Edit</button>
                  
                  <button class="mx-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-0 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button" @click="showModal3 = true">Delete</button>
                  
                </td>
            </tr>
            
        </tbody>
    </table>

</div>

 <!-- Teleport the first modal content to the body -->
    <teleport to="body" v-if="showModal1">
      <Modal_form :title="modalTitle1" :content="modalContent1" @close="closeModal1" />
    </teleport>

    <!-- Teleport the second modal content to the body -->
    <teleport to="body" v-if="showModal2">
      <Modal_form :title="modalTitle2" :content="modalContent2" @close="closeModal2" />
    </teleport>

     <!-- Teleport the third modal content to the body -->
     <teleport to="body" v-if="showModal3">
      <Modal_form :title="modalTitle3" :content="modalContent3" @close="closeModal3" />
    </teleport>
    
</template>


<script>
import Modal_form from "./Modal_form.vue";

export default {
  components: {
    Modal_form,
  },
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      modalTitle1: "View your Details",
      modalContent1: "This is the content of Modal 1.",
      modalTitle2: "Edit your Details",
      modalContent2: "This is the content of Modal 2.",
      modalTitle3: "Delete your Details",
      modalContent3: "This is the content of Modal 3.",
    };
  },
  methods: {
    closeModal1() {
      this.showModal1 = false;
    },
    closeModal2() {
      this.showModal2 = false;
    },
    closeModal3() {
      this.showModal3 = false;
    },
  },
};
</script>
