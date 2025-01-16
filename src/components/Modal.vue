<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
    @click="handleClickOutside"
  >
    <div
      class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl modal-content z-50"
    >
      <h2 class="text-2xl font-bold mb-4">{{ project.title }}</h2>
      <div class="mb-4">
        <img
          v-if="project.imageurl"
          :src="project.imageurl"
          :alt="project.title"
          class="object-cover w-full mb-4"
        />
        <div
          v-else
          class="h-48 bg-gray-200 flex items-center justify-center mb-4"
        >
          <span class="text-gray-400">Imagem não disponível</span>
        </div>
      </div>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap justify-between">
        <div class="flex items-center mb-2">
          <img src="/data.svg" class="inline size-8 mr-2" />
          <span>{{ project.data }}</span>
        </div>
        <div class="flex items-center mb-2">
          <img src="/velocidademaxima.svg" class="inline size-8 mr-2" />
          <span>{{ project.velocidademaxima }}</span>
        </div>
        <div class="flex items-center mb-2">
          <img src="/potencia.svg" class="inline size-8 mr-2" />
          <span>{{ project.potencia }}</span>
        </div>
        <div class="flex items-center mb-2">
          <img src="/conforto.svg" class="inline size-8 mr-2" />
          <span>{{ project.conforto }}</span>
        </div>
      </div>
      <button
        @click="close"
        class="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Fechar
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);
const close = () => {
  emit('close');
};

const handleClickOutside = (event) => {
  if (event.target === event.currentTarget) {
    close();
  }
};

const escapeKey = (event) => {
  if (event.key === 'Escape') {
    close();
  }
};

document.addEventListener('keydown', escapeKey);
</script>
