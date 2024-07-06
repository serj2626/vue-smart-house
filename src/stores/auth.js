import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = reactive({
    email: null,
    password: null,
    token: null
  })

  return { user }
})
