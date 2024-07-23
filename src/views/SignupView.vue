<script setup>
import { useToast } from "vue-toastification";
import { reactive } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useAuthStore();
const toast = useToast();
const user = reactive({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const validateUser = () => {
  if (!user.email || !user.password || !user.confirmPassword) {
    toast.error("Заполните все поля");
    return false;
  }
  if (user.password !== user.confirmPassword) {
    toast.error("Пароли не совпадают");
    return false;
  }
  return true;
};

const signupForm = () => {
  if (validateUser()) {
    try {
      store.signup(user);
      toast.success("Аккаунт создан");
      user.fullName = "";
      user.email = "";
      user.password = "";
      user.confirmPassword = "";
      router.push("/login");
    } catch (error) {
      toast.error("При регистрации произошла ошибка");
    }
  }
};
</script>

<template>
  <main>
    <form
      method="post"
      @submit.prevent="signupForm"
      class="flex flex-col gap-4 items-center mt-16  rounded-md 
      bg-slate-100 p-8 w-2/4 mx-auto"
    >
      <h1 class="text-center font-bold text-3xl mb-12">Создание аккаунта</h1>
      <div class="flex justify-between items-center">
        <div>
          <img src="../assets/images/auth-icons/user.png" width="40" height="40" alt="">
        </div>
        <div>
          <input
            v-model="user.fullName"
            class="ms-2"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Имя"
          />
        </div>
      </div>

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
      <div class="flex justify-between items-center">
        <img src="../assets/images/auth-icons/psw.png" width="40" height="40" alt="">
        <input
          v-model="user.confirmPassword"
          class="ms-2"
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Повторите пароль"
        />
      </div>
      <button class="my-6 py-2 px-4  bg-red-700 hover:bg-red-800 rounded-md text-white">
        Зарегистрироваться
      </button>
      <p>
        Есть аккаунт?
        <RouterLink to="/login">
          <span class="text-blue-500">Войти</span>
        </RouterLink>
      </p>
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
