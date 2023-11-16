<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';

const router = useRouter();
const password = ref('');
const email = ref('');

const handleLogin = async () => {
  // This is a placeholder for the authentication logic
  console.log('Attempting to log in', password.value, email.value);

  // If login is successful, redirect to the home page
  router.push('/');
};
</script>

<template>
  <div class="login">
    <NavBar></NavBar>
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="w-full max-w-xs p-6 bg-white rounded shadow-xl">
        <h1 class="mb-4 text-3xl font-extrabold text-center">Login</h1>
        <p class="mb-4 text-grey-700 text-sm text-center">Enter your email and password</p>

        <div class="flex items-center mb-3">
          <hr class="h-0 border-b border-solid border-grey-500 grow">
          <hr class="h-0 border-b border-solid border-grey-500 grow">
        </div>

        <form @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-gray-800 font-bold">Email*</label>
            <input type="email" v-model="email" id="email" placeholder="@email"
              class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600" />
          </div>

          <div class="mb-6">
            <label for="password" class="block text-gray-800 font-bold">Password*</label>
            <input type="password" v-model="password" id="password" placeholder="password"
            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600" />
            <a href="#" class="mr-4 text-sm font-medium text-purple-blue-500 text-center">Forgot Password?</a>
          </div>

          <button type="submit"
            class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
        </form>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
