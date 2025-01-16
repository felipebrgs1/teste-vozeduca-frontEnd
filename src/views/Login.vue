<template>
  <div
    class="min-h-screen -mt-16 flex items-center justify-center bg-gray-100 overflow-hidden"
  >
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Bem-vindo</h1>
        <p class="text-gray-600 mt-2">Faça login para continuar</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember"
              v-model="remember"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember" class="ml-2 block text-sm text-gray-900">
              Lembrar-me
            </label>
          </div>

          <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">
            Esqueceu a senha?
          </a>
        </div>

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Entrar
          </button>
        </div>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Não tem uma conta?
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Cadastre-se
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const remember = ref(false);

const handleSubmit = () => {
  console.log({
    email: email.value,
    password: password.value,
    remember: remember.value,
  });
};
</script>
