import { defineStore, getActivePinia } from 'pinia'
import whatsAppClient from "@green-api/whatsapp-api-client";


export const useApiStore = defineStore('api', {
  state: () => ({
    isLoading: false,
    idInstance: '',
    apiTokenInstance: '',
    phone: '',
    message: '',
    fileURL: '',
    response: ''
  }),
  getters: {
    api: (state) => whatsAppClient.restAPI(({idInstance: state.idInstance, apiTokenInstance: state.apiTokenInstance})),
    chatID: (state) => state.phone + '@c.us',
    filename: (state) => state.fileURL.substring(state.fileURL.lastIndexOf('/')+1)
  },
  actions: {
    async getSettings() {
      this.isLoading = true
      try {
        let res = await this.api.settings.getSettings()
        this.response = JSON.stringify(res, null, 2);
      } catch (error) {
        console.error(error)
        this.response = JSON.stringify(error, null, 2);
      } 

      this.isLoading = false      
    },

    async getStateInstance() {
      this.isLoading = true
      try {
        let res = await this.api.instance.getStateInstance()
        this.response = JSON.stringify(res, null, 2);
      } catch (error) {
        console.error(error)
        this.response = JSON.stringify(error, null, 2);
      } 

      this.isLoading = false      
    },

    async sendMessage() {
      this.isLoading = true
      try {
        let res = await this.api.message.sendMessage(this.chatID, null, this.message)
        this.response = JSON.stringify(res, null, 2);
      } catch (error) {
        console.error(error)
        this.response = JSON.stringify(error, null, 2);
      } 

      this.isLoading = false      
    },

    async sendFileByURL() {
      this.isLoading = true
      try {
        let res = await this.api.file.sendFileByUrl(this.chatID, null, this.fileURL, this.filename)
        this.response = JSON.stringify(res, null, 2);
      } catch (error) {
        console.error(error)
        this.response = JSON.stringify(error, null, 2);
      } 

      this.isLoading = false      
    }
  }
})
