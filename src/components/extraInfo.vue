<template>
    <div class="w-full flex justify-center">
      <div class="bg-white p-8 w-3/4">
        <div>
          <h1 class="text-3xl font-bold">
            В Qadam School действуют <br />
            5 ключевых направлений и 23 вида кружков
          </h1>
          <p>Мы помогаем каждому ученику раскрыть свои таланты и найти увлечения по душе</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <extraItem class="h-full" :title="'Спорт'" :description="'Футбол, баскетбол, шахматы, карате, дзюдо.'">
            <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-2.jpg" alt="" />
          </extraItem>
          <extraItem class="h-full" :title="'Искусство'" :number="2"
            :description="'Изобразительное искусство, декоративно-прикладное искусство, оригами, манифолд.'">
            <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-3.jpg" alt="" />
          </extraItem>
          <extraItem class="h-full" :number="3" :title="'Музыка'" :description="'Вокал, домбыра, актерское мастерство.'">
            <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-4.jpg" alt="" />
          </extraItem>
          <extraItem class="h-full" :number="4" :title="'Искусство'"
            :description="'Изобразительное искусство, декоративно-прикладное искусство, оригами, манифолд.'">
            <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-3.jpg" alt="" />
          </extraItem>
          <extraItem class="h-full" :number="5" :title="'Музыка'" :description="'Вокал, домбыра, актерское мастерство.'">
            <img class="w-full h-120 object-cover rounded-t-xl" src="../assets/extra-4.jpg" alt="" />
          </extraItem>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import extraItem from './extraItem.vue';
  </script>
  