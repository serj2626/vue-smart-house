<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

import { useToast } from "vue-toastification";

const toast = useToast();
const instruments = ref([]);

const getInstruments = async () => {
  try {
    const res = await axios.get(
      "https://212d693d0d677138.mokky.dev/instruments"
    );
    instruments.value = res.data;
    console.log(instruments.value);
  } catch (error) {
    toast.error("При получении данных произошла ошибка");
  }
};

onMounted(getInstruments);
</script>

<template>
  <h1>Управление техникой</h1>

  <div v-if="!instruments.length" role="status" class="flex justify-center">
    <svg
      aria-hidden="true"
      class="inline w-20 h-20 text-gray-200 animate-spin 
      dark:text-gray-600 fill-red-700"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>

  <div v-else class="flex justify-around flex-wrap">
    <div
      v-for="item in instruments"
      :key="item.id"
      class="card max-w-sm px-6 pb-10 pt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-between items-center py-4">
        <div class="title">
          {{ item.name }}
        </div>
        <label class="inline-flex items-center me-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" checked />
          <div
            class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
          ></div>
          <span
            class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{{ item.status ? "Вкл" : "Выкл" }}</span
          >
        </label>
        <!-- <div v-if="item.status">
          <button class="on">Вкл</button>
        </div>
        <div v-else>
          <button class="off">Выкл</button>
        </div> -->
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
    </div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
  margin-block: 46px;
  font-size: 26px;
  font-weight: bold;
  color: rgb(67, 53, 53);
}

.type {
  padding-block: 10px;
  text-align: end;
  font-size: 20px;
  font-weight: bold;
  color: rgb(67, 53, 53);
}

.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: rgb(149, 4, 4);
}

.image {
  transition: 0.7s;
}

.image:hover {
  transform: translateX(-15px);
}

.on {
  background-color: green;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.off {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
