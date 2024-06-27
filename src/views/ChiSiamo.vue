<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" v-for="owner in owners">
        <h1>{{ owner.name }}</h1>
        <v-img :src="owner.image" style="height: 200px; width: 200px;" />
        <br>
        <v-typography style="color: black;" v-html="owner.content" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const owners = [
    {
      name: 'Lorenzo Netti',
      image: '/chiSiamo/lorenzo_netti.jpg',
      content: 'Laureato cum laude in Architettura a Firenze, é docente di Disegno e Composizione architettonica presso il Politecnico di Bari. ' +
        'Ha tenuto corsi per l’Accademia di Belle Arti di Bari. È redattore della rivista di architettura, arte, comunicazione e design \'Il Pro' +
        'getto\'.<br>Professore incaricato di Disegno dell’architettura al corso di laurea di Architettura dal 1993 al 2003, di Disegno al corso' +
        ' di laurea di Disegno Industriale dal 2003 al 2014 e di Architettura e Composizione architettonica dal 2008 al corso di laurea in Ingeg' +
        'neria Edile-Architettura dove Lorenzo Netti tiene i suoi corsi di Disegno dell’architettura.<br>Presente nella collezione di disegni di' +
        ' architettura italiana di Francesco Moschini (AAM Architettura Arte Moderna).'
    },
    {
      name: 'Gloria Valente',
      image: '/chiSiamo/gloria_valente.jpg',
      content: 'Laureata cum laude in Architettura a Firenze, ha insegnato design e architettura degli interni. Nel 1990 é stata invitata dalla ' +
        'Alessi, per la ricerca \'Contenitori di Memoria\', nel 1991 ha partecipato alla mostra \'Design delle donne\' e nel 1992 è stata selezi' +
        'onata per la mostra \'Nuovo Bel Design, 200 nuovi oggetti per la casa\'.<br>Impegnata nella ricerca di forme identitarie sul tema degli' +
        ' \'Interni Italiani\', Gloria Valente scrive di architettura per riviste e blog. Nel 2012 ha partecipato alla mostra \'Diverso Design\'' +
        ' e nel 2013 alla mostra \'Empatia\' per la rassegna \'Produzione d’autore\'. Di prossima uscita il libro che raccoglie gli esiti delle ' +
        'sue attività di architetto, designer e visionaria fotografa del quotidiano, la sua ricerca infatti si è ampliata al campo della fotogra' +
        'fia d\'autore che nel 2015 ha esposto nella mostra \'Tempografie\'.'
    }
  ];
</script>