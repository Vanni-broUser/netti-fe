<template>
	<ImageGrid :content = "images" :numCols = "3"/>
</template>

<script setup>
import { randomHeight } from '@/utils/gridUtils';
const images = [
  { src: '/home/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg', backgroundColor: 'red', description: 'D', year: '2021', height: randomHeight() },
  { src: '/home/IMG_9243-homepage.jpg', backgroundColor: 'purple', description: 'D', year: '2020', height: randomHeight() },
  { src: '/home/M_03-homepage.jpg', backgroundColor: 'grey', description: 'DA', year: '2019', height: randomHeight() },
  { src: '/home/Netti-10-bis.jpg', backgroundColor: 'red', description: 'ACA', year: '2022', height: randomHeight() },
	{ src: '/home/Prova.jpg', backgroundColor: 'blue', description: 'DA', year: '2021', height: randomHeight() },
  { src: '/home/slide_1.jpg', backgroundColor: 'grey', description: 'ACA', year: '2020', height: randomHeight() },
  { src: '/home/slide_2.jpg', backgroundColor: 'purple', description: 'TDL', year: '2019', height: randomHeight() },
];
import ImageGrid from '@/components/ImageGrid.vue'
</script>