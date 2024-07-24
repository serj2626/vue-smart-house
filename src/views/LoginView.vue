<script setup>
import { reactive } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";


const toast = useToast();
const router = useRouter();
const store = useAuthStore();

const validateUser = () => {
  if (!user.email || !user.password) {
    toast.error("Заполните все поля");
    return false;
  }
  return true;
}

const user = reactive({
  email: '',
  password: '',
})


const loginForm = () => {
  if (validateUser()) {
    try {
      store.auth(user);
      
      user.email = "";
      user.password = "";
      toast.success("Вы вошли в аккаунт");
      router.push("/");
    } catch (error) {
      toast.error("При авторизации произошла ошибка");
    }
  }
};
</script>

<template>
  <main>
    <form @submit.prevent="loginForm"
      class="flex flex-col gap-4 items-center mt-16  rounded-md 
      bg-slate-200 dark:bg-slate-400 p-8 w-2/4 mx-auto"
    >
      <h1 class="text-center font-bold text-3xl mb-12">Войти в аккаунт</h1>
      <div class="flex justify-between items-center">
        <div>
          <img src="../assets/images/auth-icons/mail.png" width="40" height="40" alt="">
        </div>
        <div>
          <input
            v-model="user.email"
            class="ms-2"
            type="text"
            id="email"
            name="email"
            placeholder="Почта"
          />
        </div>
      </div>
      <div class="my-4 flex justify-between items-center">
        <img src="../assets/images/auth-icons/psw1.png" width="40" height="40" alt="">
        <input
          v-model="user.password"
          class="ms-2"
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
        />
      </div>
      <button
        class="my-6 py-2 px-4 bg-red-700 hover:bg-red-800 rounded-md text-white"
      >
        Войти
      </button>
      <p>Нет аккаунта? <RouterLink to="/signup"><span class="text-blue-500 dark:text-blue-800">Создать</span></RouterLink></p>
    </form>
  </main>
</template>
<style scoped>
input{
  width: 250px;
  height: 33px;
  border-radius: 5px;
  padding-left: 10px;
}

h1 {
  color: rgb(149, 4, 4);
}

form{
  box-shadow: 0 0 20px rgb(132, 127, 127);
}

</style>
