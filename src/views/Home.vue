<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex-1">
      <div
        id="home"
        class="h-screen w-full bg-cover bg-center flex items-center justify-center fixed-bg"
        style="background-image: url('car1.svg')"
      ></div>
    </div>

    <section class="min-h-screen bg-gray-100 p-4 md:p-8 content-center">
      <div class="max-w-6xl mx-auto">
        <div v-if="loading" class="text-center">Carregando...</div>
        <div v-else-if="err" class="text-center text-red-500">
          Erro ao carregar os dados: {{ err }}
        </div>
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20"
        >
          <Card
            v-for="(item, index) in limitedCars"
            :key="index"
            :project="item"
          />
        </div>
      </div>
    </section>

    <div
      class="h-screen w-full bg-cover bg-center fixed-bg relative"
      style="background-image: url('CarroF.png')"
    >
      <div class="flex flex-col md:flex-row h-full w-full">
        <div class="hidden md:block md:w-1/2"></div>

        <div
          class="w-full md:w-1/2 h-full flex flex-col items-center justify-center relative"
        >
          <div class="absolute inset-0 blur-background"></div>

          <div class="relative z-10 max-w-xl space-y-6 p-4 w-10/12">
            <h1 id="titulo">Mustang</h1>
            <p class="texto">
              O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
              Company. O carro foi apresentado ao público em 17 de abril de 1964
              durante a New York World's Fair. O Mustang, apesar de ter sofrido
              grandes alterações ao longo dos anos é a mais antiga linha de
              automóveis da Ford.
            </p>
            <div class="flex justify-center md:justify-end">
              <a href="/Tabela">
                <button
                  type="button"
                  class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm md:text-base px-6 py-3 text-center transition-all duration-300"
                >
                  Ver Carros
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCarStore } from '../store/CarStore';
import Card from '../components/Card.vue';

const loading = ref(true);
const err = ref(null);
const carStore = useCarStore();

onMounted(async () => {
  try {
    await carStore.getCars();
  } catch (error) {
    err.value = error.message;
  } finally {
    loading.value = false;
  }
});

const limitedCars = computed(() => {
  return carStore.cars.slice(0, 3);
});

function scrollToHome() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.fixed-bg {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.blur-background {
  background: linear-gradient(
    270deg,
    rgba(29, 37, 39, 0.6) 0%,
    rgba(29, 37, 39, 0.6) 24.79%,
    rgba(29, 37, 39, 0.534) 54.48%,
    rgba(29, 37, 39, 0.006) 78.67%,
    rgba(29, 37, 39, 0) 100%
  );

  backdrop-filter: blur(2px);
}

.texto {
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

/* Responsive text adjustments */
@media (max-width: 768px) {
  .texto {
    text-align: center;
    font-size: 16px;
    line-height: 1.6;
  }

  .blur-background {
    background: rgba(0, 0, 0, 0.1) 50%;
    backdrop-filter: blur(2px);
  }
}

@media (min-width: 769px) {
  .texto {
    text-align: right;
  }
}

html {
  scroll-behavior: smooth;
}

#titulo {
  color: #ffffff;
  font-family: Montserrat;
  font-size: 56px;
  font-weight: 400;
  line-height: 84px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
</style>
