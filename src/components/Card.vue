<template>
  <div>
    <div
      class="transform hover:scale-105 transition-transform duration-300 relative z-10"
    >
      <div class="relative h-48 z-10 translate-y-12">
        <img
          v-if="project.imageurl"
          :src="project.imageurl"
          :alt="project.title"
          class="size-full object-cover"
        />
        <div v-else class="h-full bg-gray-200 flex items-center justify-center">
          <span class="text-gray-400">Imagem não disponível</span>
        </div>
      </div>
      <div
        class="p-6 border-solid border bordercolor rounded-3xl shadow-lg text-center texto"
      >
        <h3 class="text-2xl mt-4 mb-6">{{ project.title }}</h3>
        <div class="grid grid-cols-4 gap-6 mt-4">
          <div class="flex items-center justify-center">
            <img src="/data.svg" class="inline size-8" />
          </div>
          <div class="flex items-center col-span-3">
            <span>{{ project.data }}</span>
          </div>
          <div class="flex justify-center">
            <img src="/velocidademaxima.svg" class="inline size-8" />
          </div>
          <div class="flex items-center col-span-3">
            <span>{{ project.velocidademaxima + ' Km/h' }}</span>
          </div>
          <div class="flex items-center justify-center">
            <img src="/potencia.svg" class="inline size-8" />
          </div>
          <div class="flex items-center col-span-3">
            <span>{{ project.potencia + '/10' }}</span>
          </div>
          <div class="flex items-center justify-center">
            <img src="/conforto.svg" class="inline size-8" />
          </div>
          <div class="flex items-center col-span-3">
            <span>{{ project.conforto + '/10' }}</span>
          </div>
        </div>
        <button
          type="button"
          class="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-16 py-4 text-center me-2 mb-2"
          @click="toggleModal"
        >
          Ver carro
        </button>
      </div>
    </div>

    <CarModal
      v-if="isModalOpen"
      :project="project"
      :is-open="isModalOpen"
      @close="close"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CarModal from './Modal.vue';
import { useCarStore } from '../store/CarStore';

const isModalOpen = ref(false);
const carStore = useCarStore();
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const toggleModal = () => {
  isModalOpen.value = true; // Correção aqui
  document.body.style.overflow = 'hidden';
};

const close = () => {
  isModalOpen.value = false; // Correção aqui
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.bordercolor {
  border-color: #1d2527;
}
</style>
