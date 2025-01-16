<template>
  <div class="pt-28 content-center  bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
    <h2 class="font-bold text-3xl mb-6 text-gray-800">Sobre Nós</h2>
    <div class="relative h-full w-full overflow-hidden flex items-center justify-center mb-6">
    </div>
    <div class="text-center">
      <p class="text-gray-600 mb-4">
        Bem-vindo à <span class="font-bold">AutoLuxe</span>, sua parceira confiável no mundo dos carros. Fundada em
        2010, nossa missão é proporcionar aos nossos clientes a melhor experiência de compra e posse de veículos de
        luxo.
      </p>
      <p class="text-gray-600 mb-4">
        Nossa equipe é composta por profissionais altamente qualificados e apaixonados por automóveis. Estamos
        comprometidos em oferecer um serviço excepcional, desde a seleção do veículo até a entrega e pós-venda.
      </p>
      <p class="text-gray-600 mb-4">
        Oferecemos uma ampla seleção de carros de luxo, desde marcas renomadas como Mercedes-Benz, BMW, Audi até modelos
        mais exclusivos. Cada veículo passa por um rigoroso processo de inspeção e manutenção para garantir que você
        receba um carro em perfeitas condições.
      </p>
      <p class="text-gray-600 mb-4">
        Além disso, contamos com um programa de financiamento flexível e uma equipe especializada para ajudar você a
        encontrar a solução mais adequada para suas necessidades.
      </p>
      <p class="text-gray-600 mb-4">
        Visite-nos em nossa loja ou entre em contato conosco para agendar uma visita. Estamos ansiosos para atendê-lo!
      </p>
    </div>
    <div class="mt-6 flex justify-center pb-4">
      <button class="bg-blue-500 text-white px-6 py-3 rounded mr-2"><a href="/faleconosco">
          Contato
        </a></button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['openContactModal', 'openTestDriveModal']);

const openContactModal = () => {
  emit('openContactModal');
};

const openTestDriveModal = () => {
  emit('openTestDriveModal');
};
</script>
