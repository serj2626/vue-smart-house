import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const user = reactive({
    id: null,
    email: null,
    password: null,
    token: null,
  });

  async function signup(data) {
    try {
      const res = await axios.post("https://212d693d0d677138.mokky.dev/register", data);

      if (res.status === 201) {
        setUser(res);
      }

    } catch (error) {
      throw error;
    }
  }

  async function login(data) {
    try {
      const res = await axios.post("https://212d693d0d677138.mokky.dev/auth", data);

      if (res.status === 201) {
        setUser(res);
      }

    } catch (error) {
      throw error;
    }
  }

  function setUser(res) {
    user.id = res.data.id
    user.email = res.data.email
    user.password = res.data.password
    user.token = res.data.token
    localStorage.setItem("user", JSON.stringify(user));
  }

  return { user, signup };
});
