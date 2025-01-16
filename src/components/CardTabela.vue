<template>
  <div
    class="md:h-52 w-full h-96 bg-white border-1 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 cursor-pointer transition-transform duration-300 flex flex-col md:flex-row"
  >
    <div
      class="relative h-full w-96 overflow-hidden flex items-center justify-center"
      @click="openModal"
    >
      <img
        v-if="project.imageurl"
        :src="project.imageurl"
        :alt="project.title"
        class="object-contain max-h-full self-center"
      />
      <div v-else class="h-full bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Imagem não disponível</span>
      </div>
    </div>

    <div
      class="md:px-6 px-1 md:w-3/4 flex flex-col justify-center"
      @click="openModal"
    >
      <div>
        <h3 class="font-bold text-xl mb-2 text-gray-800">
          {{ project.title }}
        </h3>
        <div class="flex flex-nowrap justify-between items-center">
          <div class="flex items-center mb-2">
            <img src="/data.svg" class="inline w-6 h-6 mr-2" />
            <span
              class="flex-grow overflow-hidden text-ellipsis whitespace-nowrap"
              >{{ project.data }}</span
            >
          </div>
          <div class="flex items-center mb-2">
            <img src="/velocidademaxima.svg" class="inline w-6 h-6 mr-2" />
            <span
              class="flex-grow overflow-hidden text-ellipsis whitespace-nowrap"
              >{{ project.velocidademaxima + ' Km/h' }}</span
            >
          </div>
          <div class="flex items-center mb-2">
            <img src="/potencia.svg" class="inline w-6 h-6 mr-2" />
            <span
              class="flex-grow overflow-hidden text-ellipsis whitespace-nowrap"
              >{{ project.potencia + '/10' }}</span
            >
          </div>
          <div class="flex items-center mb-2">
            <img src="/conforto.svg" class="inline w-6 h-6 mr-2" />
            <span
              class="flex-grow overflow-hidden text-ellipsis whitespace-nowrap"
              >{{ project.conforto + '/10' }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex md:justify-center justify-center self-center px-4 py-4">
      <button
        @click="confirmDelete(project.id)"
        class="rounded-full bg-transparent flex items-center justify-center size-full"
      >
        <svg
          class="w-6 h-6 text-red-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useCarStore } from '../store/CarStore';

const CarStore = useCarStore();

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      imageUrl: '',
      title: '',
      data: '',
      velocidademaxima: '',
      potencia: '',
      conforto: '',
    }),
  },
});

const emit = defineEmits(['closeModal', 'openModal']);

const openModal = () => {
  emit('openModal', props.project);
};

const closeAdd = () => {
  emit('closeModal');
};

const confirmDelete = (id) => {
  if (confirm('Tem certeza que deseja excluir o carro?')) {
    deleteCar(id);
  }
  closeAdd();
};

const deleteCar = async (id) => {
  try {
    await CarStore.deleteCar(id);
  } catch (error) {
    console.error(error);
  } finally {
    closeAdd();
  }
};
</script>
