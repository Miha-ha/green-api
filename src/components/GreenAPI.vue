<script setup>
import { ref } from 'vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useApiStore } from '@/store/api'

const api = useApiStore()

api.idInstance = '1103102936'
api.apiTokenInstance = 'c33f241bde3e4fafa5af804e238dad74df86c177db31496285'
api.phone = '79883204191'
api.message = 'hi'
api.fileURL = 'https://img.freepik.com/premium-photo/cartoon-heart-with-smile-smile-that-says-heart_900101-17908.jpg'
</script>

<template>  
  <div class="row">        
    <div class="column left">
      <div class="card">
        <div><input type="text" v-model="api.idInstance" placeholder="idInstance" /></div>
        <div><input type="text" v-model="api.apiTokenInstance" placeholder="apiTokenInstance" /></div>
      </div>
      <div class="card">
        <div class="top-space"><button type="button" @click="api.getSettings()">get settings</button></div>
        <div class="top-space"><button type="button" @click="api.getStateInstance()">get state instance</button></div>
      </div>
      <div class="card">
        <div><input type="text" v-model="api.phone" placeholder="phone number"></div>
        <textarea v-model="api.message" rows="3"></textarea>
        <div class="top-space"><button type="button" @click="api.sendMessage()">send message</button></div>
      </div>
      <div class="card">
        <div><input type="text" v-model="api.phone" placeholder="phone number"></div>
        <div><input type="text" v-model="api.fileURL" placeholder="file URL"></div>
        <div class="top-space"><button type="button" @click="api.sendFileByURL()">send file by URL</button></div>
      </div>
    </div>
    <div class="column right">
      Ответ:      
      <div>
        <textarea v-model="api.response" class="fill" readonly></textarea>
      </div>
    </div>
  </div>

</template>

<style scoped>
.column {
  padding: 10px;
}

.left {
  width: 50%;
  text-align: right;
}

.right {
  width: 50%;
}

.row {
  display: flex;
  flex-direction: row;
  min-width: 800px;
}

.fill {
  width: 100%;
  height: 100%;
  /* resize: none; */
  outline: none;
  border: none;
  height: 425px;
}

.top-space {
  margin-top: 8px;
}
</style>
