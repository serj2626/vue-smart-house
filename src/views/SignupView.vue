<script setup></script>

<template>
  <main>
    <form
      class="flex flex-col gap-4 items-center mt-16 shadow-md rounded-md 
      bg-slate-100 p-8 w-2/4 mx-auto"
    >
      <h1 class="text-center font-bold text-3xl mb-12">Создание аккаунта</h1>
      <div class="flex justify-between">
        <label for="email">Почта</label>
        <input class="ms-2" type="text" id="email" name="email" />
      </div>
      <div class="my-4">
        <label for="password">Пароль</label>
        <input class="ms-2" type="text" id="password" name="password" />
      </div>
      <div>
        <label for="confirm-password">Подтвердите пароль</label>
        <input class="ms-2" type="text" id="confirm-password" name="password" />
      </div>
      <button
        class="my-6 py-2 px-4 bg-blue-500 rounded-md text-white"
        type="submit"
      >
        Зарегистрироваться
      </button>
      <p>Есть аккаунт? <RouterLink to="/login"><span class="text-blue-500">Войти</span></RouterLink></p>
    </form>
  </main>
</template>
<style scoped>
h1 {
  color: rgb(149, 4, 4);
}
button {
  background: rgb(149, 4, 4);
}
</style>
