<script setup>
import GreenAPI from './components/GreenAPI.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useApiStore } from '@/store/api'

const api = useApiStore()
</script>

<template>
  <loading v-model:active="api.isLoading" :is-full-page="true" opacity="0" color="#fff" />
  <div>
    
    <a href="https://green-api.com" target="_blank">
      <img src="https://console.green-api.com/assets_1.1.62/header-logo-736d61f6.png" class="logo" alt="Green-api logo" />
    </a>
  </div>
  <GreenAPI />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #64ff67aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
