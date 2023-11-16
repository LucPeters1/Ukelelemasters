<script setup>

import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue';

</script>

<template>
  <NavBar></NavBar>
  <div class="relative bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 p-4 text-white">
    <main class="container mx-auto text-center py-10">
      <h1 class="text-4xl font-bold "> Learning Ukelele</h1>
      <h1 class="text-4xl font-bold"> made simple and fun.</h1>
      <br>
      <h3> From beginners to advanced players, all the courses you </h3>
      <h3> need to play beautiful music, the easy way.</h3>
      <div class="flex flex-col mb-4 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg ">
          Learn more
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
      <div class="my-4 px-15-percent py-6">
        <img src="src\assets\pictures\ukekele.jpg" alt="Ukelele in grass" class="rounded-lg mx-auto"
          style="width: calc(100% - 30%);" />
      </div>
    </main>
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
  </div>
  <section class="relative bg-white dark:bg-gray-900">
    <div class="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Master the Ukulele with Us
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Embark on a musical journey with Ukulele Masters. Our platform is designed to make learning the ukulele fun, easy, and accessible for everyone.</p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Beginner Friendly</h3>
            <p class="text-gray-500 dark:text-gray-400">Start your musical journey with ease. Our beginner-friendly modules make learning the basics fun and engaging, ensuring a solid foundation.</p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Interactive Lessons</h3>
            <p class="text-gray-500 dark:text-gray-400">Engage with interactive, step-by-step lessons that provide hands-on ukulele training, enhancing your learning experience.</p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Video Tutorials</h3>
            <p class="text-gray-500 dark:text-gray-400">Learn from expert instructors through high-quality video tutorials, covering a wide range of songs and techniques.</p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Personalized Learning</h3>
            <p class="text-gray-500 dark:text-gray-400">Tailor your learning experience with personalized lesson plans that cater to your individual pace and preferences.</p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Community Support</h3>
            <p class="text-gray-500 dark:text-gray-400">Join a vibrant community of ukulele enthusiasts. Share your progress, get feedback, and engage in collaborative learning.</p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Live Workshops</h3>
            <p class="text-gray-500 dark:text-gray-400">Participate in live workshops and masterclasses to enhance your skills, learn new techniques, and interact with experts in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

<FooterComponent class="mt-auto border-t border-gray-700"></FooterComponent></template>

<style></style>

