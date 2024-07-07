<script setup>
import { reactive } from 'vue';

const user = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <main>
    <form
      class="flex flex-col gap-4 items-center mt-16  shadow-2xl rounded-md 
      bg-slate-100 p-8 w-2/4 mx-auto"
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
        class="my-6 py-2 px-4 bg-blue-500 rounded-md text-white"
        type="submit"
      >
        Войти
      </button>
      <p>Нет аккаунта? <RouterLink to="/signup"><span class="text-blue-500">Создать</span></RouterLink></p>
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
button {
  background: rgb(149, 4, 4);
}
</style>
