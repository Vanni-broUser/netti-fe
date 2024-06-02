<template>
    <v-navigation-drawer :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)"
        @click-outside="$emit('update:modelValue', false); $emit('close')" temporary color="#ff0000" app
        class="drawer-content" width="380" max-width="380" style="padding-top: 6px;">
        <v-list-item class="list-item">
            <div class="title-container">
                <p class="white-title v-elevation-3"><b>netti</b>architetti</p>
                <v-btn color="#ff0000" icon="mdi-reorder-horizontal" class="white-btn" @click="closeDrawer" small style="margin-top: -9px;"/>
            </div>
        </v-list-item>
        <v-divider />
        <v-list density="compact" nav>
            <v-list-item>
                <b>Architetture</b>
            </v-list-item>
            <v-list-item>
                <b>Progetti</b>
            </v-list-item>
            <v-list-item>
                <b>Ricerche</b>
            </v-list-item>
            <v-list-item>
                Chi siamo
            </v-list-item>
            <v-list-item>
                Agenda
            </v-list-item>
            <v-list-item>
                Contatti
            </v-list-item>
        </v-list>
        <v-divider />
        <div class="bottom-section">
            <p class="white_text">
                Progettare architetture per il mondo reale e al contempo ricercare <b>nuove forme espressive</b>,
                attenti ai temi della storia, dell’ambiente, del paesaggio urbano ed extraurbano,
                è l'impegno che ci rende consapevoli della responsabilità dell'<b>essere architetti</b>.<br><br>
                <b>Lorenzo Netti</b><br>
            <b>Gloria Valente</b>
            </p>
            <v-container>
                <v-row>
                    <v-col>
                        <v-icon icon="mdi-facebook" />
                    </v-col>
                    <v-col>
                        <v-icon icon="mdi-instagram" />
                    </v-col>
                </v-row>
            </v-container>
            <p class="white_text">
                © 2024 <b>netti</b>architetti.
            </p>
        </div>
    </v-navigation-drawer>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue', 'close']);

const closeDrawer = () => {
    emit('update:modelValue', false);
    emit('close');
};
</script>

<style scoped>
.drawer-content {
    background-color: #ff0000;
    /* Imposta il colore di sfondo del drawer */
}

.list-item {
    margin-top: 16px;
    padding: 0 16px;
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.white-title {
  margin-right: 10px;
  color: white;
  /* Colore arancio-rosso */
  font-size: 40px; /* Modifica l'altezza del font a 40px */
  padding: 10px;
  padding-top: 13px;
  /* Aggiungi padding per consistenza visiva */
  border-radius: 4px;
}

.white-btn {
    width: 30px;
    height: 30px;
    border-radius: 0px;
    /* Assicurati che il border-radius sia coerente */
    min-width: 40px;
    min-height: 40px;
    margin: 0 10px;
    /* Distanza tra gli elementi */
}

.white_text {
    font-size: small;
    color: white;
    margin-left: 8px;
    margin-right: 8px;
}

.bottom-section {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}
</style>
