<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/static/poc.png" alt="PoleEmploi" class="mb-5" />
      </div>
      <v-card>
        <v-card-text>
          <p>Bienvenue sur le site de POC'Emploi.</p>
          <p>Commencer dès maintenant votre expérience utilisateur.</p>
          <div class="text-xs-right">
            <em><small>&mdash; L'équipe Pôle Emploi</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat router to="/inspire">Commencer</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
