<template>
              <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
                <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-9/12 overflow-hidden">
                  <div class="text-center my-8">
                    <img class="h-8 w-auto mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    <br>
                    <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                  </div>

                  <form @submit.prevent="handleSubmit">
                  <!-- Responsive Layout Example -->
                    <div class="px-5">
                      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                        <div class="px-3 mb-2">
                          <label class="text-xs font-semibold px-1">Firstname</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Firstname" v-model="firstname" @input="saveInputValue"/>
                          </div>
                        </div>

                        <div class="px-3 mb-2">
                          <label class="text-xs font-semibold px-1">Middlename</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Middlename" v-model="middlename" @input="saveInputValue"/>
                          </div>
                        </div>

                        <div class="px-3 mb-2">
                          <label class="text-xs font-semibold px-1">Lastname</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Lastname" v-model="lastname" @input="saveInputValue"/>
                          </div>
                        </div>

                        <div class="px-3 mb-2 md:col-span-2">
                          <label class="text-xs font-semibold px-1">Email</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email" v-model="email" @input="saveInputValue"/>
                          </div>
                        </div>

                        <div class="px-3 mb-2">
                          <label class="text-xs font-semibold px-1">Contact</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Contact" v-model="contact" @input="saveInputValue"/>
                          </div>
                        </div>

                        <div class="px-3 mb-2">
                          <label class="text-xs font-semibold px-1">Username</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Username" v-model="username" @input="saveInputValue"/>
                          </div>
                        </div>

                        <div class="px-3 mb-2">
                          <label class="text-xs font-semibold px-1">Password</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Password" v-model="password" @input="saveInputValue"/>
                          </div>
                        </div>

                        <div class="px-3 mb-2">
                          <label class="text-xs font-semibold px-1">Confirm Password</label>
                          <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                            </div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Confirm Password" v-model="conpassword" @input="saveInputValue"/>
                          </div>
                        </div>

                      </div>

                      <transition name="fade">
                      <div class="flex mx-3 pt-4">
                        <div class="w-full px-3 mb-5">
                          <button
                            :disabled="!isFormComplete"
                            :class="['block w-full max-w-xs mx-auto', !isFormComplete ? 'bg-gray-200 cursor-default' : 'bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700', 'text-white rounded-lg px-3 py-3 font-semibold']">
                            Next
                          </button>
                        </div>
                      </div>
                      </transition>

                    </div>
                  </form>
                  <label class="flex items-center justify-center">Already have an account? <a href="./" class="underline mx-1"> Sign-in </a> here.</label>

                  <br>
                  
                </div>
              </div>

</template>
    
    
<script>
export default {
  name: 'Signup',

  data() {
    return {
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      contact: '',
      username: '',
      password: '',
      conpassword: ''
    };
  },
  computed: {
    isFormComplete() {
      return (
        this.firstname &&
        this.middlename &&
        this.lastname &&
        this.email &&
        this.contact &&
        this.username &&
        this.password &&
        this.conpassword
      );
    }
  },
  mounted() {
    this.retrieveInputValue();
  },
  methods: {
    saveInputValue() {
      const formData = {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        email: this.email,
        contact: this.contact,
        username: this.username,
        password: this.password,
        conpassword: this.conpassword
      };
      localStorage.setItem("formData", JSON.stringify(formData));
    },
    retrieveInputValue() {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        this.firstname = formData.firstname;
        this.middlename = formData.middlename;
        this.lastname = formData.lastname;
        this.email = formData.email;
        this.contact = formData.contact;
        this.username = formData.username;
        this.password = formData.password;
        this.conpassword = formData.conpassword;
      }
    },
    handleSubmit(){
      const data = {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        email: this.email,
        contact: this.contact,
        username: this.username,
        password: this.password,
        conpassword: this.conpassword

      };
      console.log(data);
    },
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
    
    