import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const url = import.meta.env.VITE_APP_URL;

export const useAuthStore = defineStore("auth", () => {
    const userActive = ref(false);

    const initAuth = () => {
        if (localStorage.getItem("user_token")) {
            userActive.value = true;
        }
    };

    const userState = computed(() => {
        return userActive.value;
    });

    async function auth(data, type) {
        const typeReq = type === "signup" ? "register" : "auth";
        try {
            const res = await axios.post(`${url}/${typeReq}`, data);
            if (res.status === 201) {
                setUser(res);
            }
        } catch (error) {
            throw error;
        }
    }

    function setUser(res) {
        localStorage.setItem("user_token", res.data.token);
    }

    return { auth, initAuth, userState };
});
