import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_APP_URL

export const useAuthStore = defineStore("auth", () => {
  const user = reactive({
    id: null,
    email: null,
    password: null,
    token: null,
  });

  async function signup(data) {
    try {
      const res = await axios.post(`${url}/register`, data);
      console.log(res);
      if (res.status === 201) {
        setUser(res);
      }

    } catch (error) {
      throw error;
    }
  }

  async function login(data) {
    try {
      const res = await axios.post(`${url}/auth`, data);
      if (res.status === 201) {
        setUser(res);
      }

    } catch (error) {
      throw error;
    }
  }

  function setUser(res) {
    // user.id = res.data.id
    // user.email = res.data.email
    // user.password = res.data.password
    // user.token = res.token
    localStorage.setItem("user", JSON.stringify({token: res.token}));
  }

  return { user, signup, login };
});
