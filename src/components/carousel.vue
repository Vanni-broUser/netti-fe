<template>
    <v-carousel style="height: 100vh;">
        <v-carousel-item
            v-for="img in imgArray"
            :src="img"
            cover
        ></v-carousel-item>
    </v-carousel>
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



    const imgArray = [immagine1, immagine2, immagine3, immagine4, immagine5, immagine6, immagine7, immagine8, immagine9];
</script>