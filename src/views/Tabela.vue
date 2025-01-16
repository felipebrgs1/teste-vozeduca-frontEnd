<template>
  <div class="container mx-auto pt-20">
    <div class="flex flex-row pb-4 px-2">
      <div class="basis-3/4">
        <p class="text-2xl font-bold">Tabela de carros</p>
      </div>
      <div class="flex basis-1/4 justify-end">
        <button
          type="button"
          class="self-end text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-2 md:py-3 text-center"
          @click="openAddCarModal"
        >
          Adicionar Carro
        </button>
      </div>
    </div>

    <AddCarModal
      v-if="isModalVisible"
      :isEditing="isEditing"
      :carToEdit="selectedCar"
      @close="closeModal"
    />

    <ul class="grid grid-cols-1 gap-4 pb-10">
      <li
        v-for="car in carStore.cars"
        :key="car.id"
        class="md:p-4 px-1 rounded-lg"
      >
        <CardTabela
          :project="car"
          @openModal="openEditCarModal(car)"
          @closeModal="closeModal"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CardTabela from '../components/CardTabela.vue';
import AddCarModal from '../components/AddCarModal.vue';
import { useCarStore } from '../store/CarStore';

const carStore = useCarStore();
const isModalVisible = ref(false);
const isEditing = ref(false);
const selectedCar = ref(null);

const openAddCarModal = () => {
  isEditing.value = false;
  selectedCar.value = null;
  isModalVisible.value = true;
};

const openEditCarModal = (car) => {
  isEditing.value = true;
  selectedCar.value = car;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

onMounted(() => {
  carStore.getCars();
});
</script>
