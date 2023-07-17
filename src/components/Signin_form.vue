<template>
              <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
                <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-96 overflow-hidden">
                  <div class="text-center my-8">
                    <img class="h-8 w-auto mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    <br>
                    <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
                    <p>Welcome back!</p>
                  </div>

                  <div>
                    <div class="flex mx-3">
                      <div class="w-full px-3 mb-2">
                        <label for="" class="text-xs font-semibold px-1">Username</label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg></div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Username" v-model="username"/>
                          </div>
                      </div>
                    </div>
                    <div class="flex mx-3">
                      <div class="w-full px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Password</label>
                        <div class="flex relative">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                          </div>
                          <input :type="passwordFieldType" class="w-full -ml-10 pl-10 pr-12 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Password" v-model="password" />
                          <div class="absolute right-0 top-0 bottom-0 flex items-center justify-center pr-3 cursor-pointer" @click="togglePasswordVisibility">
                          <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
 
                          </div>
                        </div>
                      </div>
                    </div>
                    <transition name="fade">
                    <div class="flex mx-3">
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

                  <div class="flex justify-center items-center mx-9">
                    <hr class="w-full border-gray-400">
                    <p class="text-center mx-2">or</p>
                    <hr class="w-full border-gray-400">
                  </div>

                  <button class="flex items-center justify-center mx-auto w-72 hover:bg-white focus:border-indigo-500 text-gray-500 py-2 px-4 rounded-full border-2 border-gray-300 my-2">
                    <img class="w-6 mr-2" src="../assets/google.png" alt="Google">
                    <span>Google</span>
                  </button>

                  <button class="flex items-center justify-center mx-auto w-72 hover:bg-white focus:border-indigo-500 text-gray-500 py-2 px-4 rounded-full border-2 border-gray-300 my-2">
                    <img class="w-6 mr-2" src="../assets/facebook.png" alt="Facebook">
                    <span>Facebook</span>
                  </button>

                  <br>

                  <label class="flex items-center justify-center">Don't have an account? <a href="./Signup" class="underline mx-1"> Create account </a> here.</label>

                  <br>
                  
                </div>
              </div>

              <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                  <a title="Buy me a beer" href="https://www.facebook.com/jhhmmr" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                    <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
                  </a>
                </div>
              </div>
  
</template>
      
      
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordFieldType: "password",
      passwordVisible: false
    };
  },
  computed: {
    isFormComplete() {
      return this.username && this.password;
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
      this.passwordFieldType = this.passwordVisible ? "text" : "password";
    }
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
      
      