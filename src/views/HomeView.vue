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

  <div class="flex justify-around flex-wrap">
    <div v-for="item in instruments" :key="item.id" class="card max-w-sm px-6 pb-10 pt-2  bg-white border border-gray-200
     rounded-lg shadow
       dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-between items-center py-4">
        <div class="title">
          {{ item.name }}
        </div>
        <div v-if="item.status">
          <button class="on">Вкл</button>
        </div>
        <div v-else>
          <button class="off">Выкл</button>
        </div>
      </div>
      <hr>
      <p class="type"><span class="py-1 px-2 bg-slate-300 rounded-md">{{ item.type }} {{ item.value }}</span></p>

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

.off{
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
