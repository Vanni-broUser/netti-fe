<template>
  <v-container>
    <v-container>
      <v-form fast-fail @submit.prevent="sendMail">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="name" :rules="validation.requiredRules" variant="outlined" label="Nominativo" />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="email" :rules="validation.emailRules" variant="outlined" label="Email" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field v-model="subject" :rules="validation.requiredRules" variant="outlined" label="Oggetto" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea label="Testo" rows="4" v-model="body" :rules="validation.requiredRules" variant="outlined" />
          </v-col>
        </v-row><br>
        <v-btn block text="Invia" type="submit" color="red" />
      </v-form>
    </v-container>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';
  import http from '@/utils/http';
  import validation from '@/utils/validation';

  const name = ref('');
  const body = ref('');
  const email = ref('');
  const subject = ref('');

  const mail = import.meta.env.VITE_FORM_MAIL;

  const sendMail = () => {
    if (
      !validation.validateInput(email.value, validation.emailRules) &&
      !validation.validateInput(name.value, validation.requiredRules) &&
      !validation.validateInput(body.value, validation.requiredRules) &&
      !validation.validateInput(subject.value, validation.requiredRules)
    ) {
      http.postRequest('send-mail', {
        email: mail,
        subject: 'Qualcuno ho usato il form del sito',
        body: 'Buongiorno,\nSono il tuo mailer, hai ricevuto il seguente messaggio:\n\n' +
          `Nominativo: ${name.value}\n` +
          `Mail: ${email.value}\n` +
          `Oggetto: ${subject.value}\n\n` +
          `Testo:\n${body.value}`
      }, function () {
        alert("Mail inviata\nTi ringraziamo per il contatto");
      }, 'POST');
    }
  };
</script>
