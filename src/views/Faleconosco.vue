<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-6">
    <h1 class="text-2xl font-bold">Fale Conosco</h1>
    <p class="text-center max-w-lg">
      Precisa de ajuda ou tem alguma dúvida? Entre em contato conosco!
    </p>
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4 w-full max-w-md">
      <input v-model="name" type="text" placeholder="Seu nome" required
        class="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600" />
      <input v-model="email" type="email" placeholder="Seu email" required
        class="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600" />
      <textarea v-model="message" rows="5" placeholder="Sua mensagem"
        class="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
      <button type="submit" class="text-white rounded bg-blue-600 py-2 px-4 hover:bg-blue-500">
        Enviar
      </button>
    </form>
    <a href="/" class="text-blue-600 underline hover:text-blue-800">Voltar para Home</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCarStore } from '../store/CarStore';

const carStore = useCarStore();
carStore.getCars();

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
    message: message.value,
  });
};
</script>
