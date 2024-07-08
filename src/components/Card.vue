<script setup>
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
defineProps({
  item: Object,
});

const updateStatus = async (id) => {
  try {
    let item = await axios.patch(
      "https://212d693d0d677138.mokky.dev/instruments/" + id,
      {
        // status: !item.status,
        status: !item.status,
      }
    );

    toast.success("Данные обновлены");
  } catch (error) {
    toast.error("При обновлении данных произошла ошибка");
  }
};
</script>

<template>
  <div
    class="card max-w-sm px-6 pb-10 pt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex justify-between items-center py-4">
      <div class="title">
        {{ item.name }}
      </div>
      <label class="inline-flex items-center me-5 cursor-pointer">
        <input
          @change="updateStatus(item.id)"
          type="checkbox"
          value=""
          class="sr-only peer"
          checked
        />
        <div
          class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
        ></div>
        <span
          class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ item.status ? "Вкл" : "Выкл" }}</span
        >
      </label>
    </div>
    <hr />
    <p class="type">
      <span class="py-1 px-2 bg-slate-300 rounded-md"
        >{{ item.type }} {{ item.value }}</span
      >
    </p>

    <a href="#">
      <img class="image rounded-t-lg w-full h-80" :src="item.image" alt="" />
    </a>

    <form class="max-w-xs mx-auto mt-4">
      <label
        for="quantity-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Изменить {{ item.type }}:</label
      >
      <div class="flex items-center max-w-[8rem]">
        <button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            class="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          data-input-counter
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          :placeholder="item.value"
          required
        />
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            class="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      <p
        id="helper-text-explanation"
        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        Пожалуйста, выберите 5-значный номер от 0 до 9.
      </p>
    </form>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: rgb(149, 4, 4);
}

.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image {
  transition: 0.7s;
}

.image:hover {
  transform: translateX(-10px);
}
</style>
