<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <h3 class="text-xl font-bold mb-4">Adicionar Novo Carro</h3>
      <form @submit.prevent="handleAddCar">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Título</label>
          <input type="text" id="title" v-model="carStore.newCar.title"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
        </div>
        <div class="mb-4">
          <label for="imageUrl" class="block text-gray-700 font-bold mb-2">URL da Imagem</label>
          <input type="text" id="imageUrl" v-model="carStore.newCar.imageurl"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
          <label for="data" class="block text-gray-700 font-bold mb-2">Ano</label>
          <input type="text" id="data" v-model="carStore.newCar.data"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="1900" max="2100" required />
        </div>
        <div class="mb-4">
          <label for="velocidademaxima" class="block text-gray-700 font-bold mb-2">Velocidade Máxima</label>
          <input type="text" id="velocidademaxima" v-model="carStore.newCar.velocidademaxima"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
        </div>
        <div class="mb-4">
          <label for="potencia" class="block text-gray-700 font-bold mb-2">Potência</label>
          <input type="text" id="potencia" v-model="carStore.newCar.potencia"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="0" max="10" required />
        </div>
        <div class="mb-4">
          <label for="conforto" class="block text-gray-700 font-bold mb-2">Conforto</label>
          <input type="text" id="conforto" v-model="carStore.newCar.conforto"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="0" max="10" required />
        </div>
        <div class="flex justify-end">
          <button type="button"
            class="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            @click="close">
            Cancelar
          </button>
          <button type="submit"
            class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useCarStore } from '../store/CarStore';

const emit = defineEmits(['close']);
const carStore = useCarStore();

const handleAddCar = async () => {
  await carStore.addCar();
  close();

};

const close = () => {
  emit('close');
};
</script>
