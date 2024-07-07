<template>
	<ImageGrid :content = "images" :numCols = "2"/>
</template>

<script setup>
import immagine1 from '@/assets/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg';
import immagine2 from '@/assets/IMG_9243-homepage.jpg';
import immagine3 from '@/assets/M_03-homepage.jpg';
import immagine4 from '@/assets/Netti-10-bis.jpg';
import immagine5 from '@/assets/PLANOVOLUMETRICO-SALV02.jpg';
import immagine6 from '@/assets/Prova.jpg';
import immagine7 from '@/assets/slide_1.jpg';
import immagine8 from '@/assets/slide_2.jpg';
import immagine9 from '@/assets/slide_6.jpg';

import { randomHeight } from '@/utils/gridUtils';

const images = [
  { src: immagine2, height: randomHeight(), title: "Poliba Student Center: Politecnico di Bari", description: "Poliba Student Center", longDescription: "Il nuovo Student Center è inserito nel complesso edilizio del Politecnico di Bari, all’interno del Campus Universitario della città. E’ il primo intervento di un programma di riqualificazione degli spazi aperti e dei servizi agli studenti denominato Poliba Elements.Ospita funzioni essenziali per gli utenti del Campus come l’ambulatorio di primo soccorso al piano terra, un ampio spazio per lo studio collettivo al primo piano e due aule più piccole al secondo piano. L’edificio è caratterizzato da una lunga facciata con doghe orizzontali di legno che chiude i ballatoi già esistenti. Due nuove scale alle estremità dello Student Center rendono indipendenti gli accessi posti in prossimità degli ingressi, pedonale e carrabile, del Politecnico.Localizzazione Via Orabona, 4 | Bari    Campus Universitario E. Quagliariello"},
  { src: immagine9, height: randomHeight(), title: "Poliba Student Center: Politecnico di Bari", description: "Poliba Student Center", longDescription: "Il nuovo Student Center è inserito nel complesso edilizio del Politecnico di Bari, all’interno del Campus Universitario della città. E’ il primo intervento di un programma di riqualificazione degli spazi aperti e dei servizi agli studenti denominato Poliba Elements.Ospita funzioni essenziali per gli utenti del Campus come l’ambulatorio di primo soccorso al piano terra, un ampio spazio per lo studio collettivo al primo piano e due aule più piccole al secondo piano. L’edificio è caratterizzato da una lunga facciata con doghe orizzontali di legno che chiude i ballatoi già esistenti. Due nuove scale alle estremità dello Student Center rendono indipendenti gli accessi posti in prossimità degli ingressi, pedonale e carrabile, del Politecnico.Localizzazione Via Orabona, 4 | Bari    Campus Universitario E. Quagliariello"},
  { src: immagine7, height: randomHeight() },
  { src: immagine4, height: randomHeight() },
  { src: immagine8, height: randomHeight() },
];

import ImageGrid from '@/components/ImageGrid.vue'
</script>