<template>
	<v-app class="declare">
		<h1>{{ msg }}</h1>
		<v-stepper v-model="e1">
			<v-stepper-header>
				<v-stepper-step :complete="e1 > 1" step="1">Vos informations</v-stepper-step>
				<v-divider></v-divider>
				<v-stepper-step :complete="e1 > 2" step="2">Votre situation</v-stepper-step>
				<v-divider></v-divider>
				<v-stepper-step step="3">Récapitulatif</v-stepper-step>
			</v-stepper-header>
			<v-stepper-items>
				<v-stepper-content class="step1" step="1">
					<v-form style="margin:0 auto;width:50%">
						<v-text-field v-model="lastName" :rules="lastNameRules" :counter="20" label="Votre nom" required></v-text-field>
						<v-text-field v-model="firstName" :rules="firstNameRules" :counter="20" label="Votre prénom" required></v-text-field>
						<v-text-field v-model="email" :rules="emailRules" label="Votre e-mail" required></v-text-field>
					</v-form>
					<v-btn to="/" flat>Retour à l'accueil</v-btn>
					<v-btn color="primary" @click.native="e1 = 2" v-on:click="submit1" class="{ disabled: isDisabled }" :disabled="isDisabled">Continuer</v-btn>
				</v-stepper-content>
				<v-stepper-content step="2">
					<v-layout row>
						<v-flex xs12 sm6>

							<v-subheader>Vous êtes actuellement</v-subheader>
							<v-flex xs6>
								<v-select v-model="work" :items="items" label="Choisir votre situation" single-line required justified></v-select>
							</v-flex>
						</v-flex>

						<v-flex xs12 sm6>
							<v-subheader>Depuis le</v-subheader>
							<!-- <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
								<v-text-field slot="activator" v-model="date" label="Date" prepend-icon="event" readonly></v-text-field> -->
							<v-flex xs10>
								<v-date-picker full-width landscape class="mt-3" v-model="date" locale="fr-fr" color="red lighten-1" header-color="primary"></v-date-picker>
							</v-flex>
						</v-flex>
					</v-layout>
					<v-btn flat @click.native="e1 = 1">Précédent</v-btn>
					<v-btn color="primary" @click.native="e1 = 3" v-on:click="submit2" class="{ disabled: isDisabled2 }" :disabled="isDisabled2">Continuer</v-btn>
				</v-stepper-content>
				<v-stepper-content step="3">
					<v-list>
						<div>
							<h3 class="headline mb-0">Votre récapitulatif</h3>
							<v-list v-if="this.userInfo[0]">
								<v-list-tile>Votre nom : {{this.userInfo[0].lastName}}</v-list-tile>
								<v-list-tile>Votre prénom : {{this.userInfo[0].firstName}}</v-list-tile>
								<v-list-tile>Votre email : {{this.userInfo[0].email}}</v-list-tile>
								<v-list-tile>Votre situation : {{this.userInfo[0].work}}</v-list-tile>
								<v-list-tile>Depuis le : {{this.userInfo[0].date}}</v-list-tile>
							</v-list>
						</div>
					</v-list>
					<b-message id="rgpd" title="Données personnelles" has-icon>
						<b-switch type="is-success" v-model="checkbox"></b-switch>
						<span>{{rgpd}}</span>
					</b-message>
					<v-btn flat @click.native="e1 = 2">Précédent</v-btn>
					<v-btn color="success" @click.native="e1 = 1" to="/success" class="{ disabled: isDisabled3 }" :disabled="isDisabled3">Valider</v-btn>
				</v-stepper-content>
			</v-stepper-items>
		</v-stepper>
		<!-- <v-btn flat round to="/">{{ retour}}</v-btn> -->

	</v-app>
</template>

<script>
import moment from 'moment';

export default {
    name: 'Declare',
    data() {
        return {
            picker: null,
            userInfo: [],
            valid: true,
            lastName: '',
            rgpd:
                "En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la recherche d'emploi et des statistiques de Pôle Emploi.",
            lastNameRules: [
                v => !!v || 'Votre nom est requis',
                v => (v && v.length <= 20) || 'Le nom doit être inférieur à 20 caractères'
            ],
            firstName: '',
            firstNameRules: [
                v => !!v || 'Votre prénom est requis',
                v => (v && v.length <= 20) || 'Le prénom doit être inférieur à 20 caractères'
            ],
            email: '',
            emailRules: [
                v => !!v || 'Votre E-mail est requis',
                v =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "L'email doit être valide"
            ],
            work: '',
            select: '',
            date: '',
            items: ['Sans Emploi', 'Employé', 'Etudiant'],
            checkbox: false,
            e1: 0,
            msg: 'Déclarer votre situation',
            retour: "Retour à l'accueil"
        };
    },
    methods: {
        submit1() {
            this.userInfo.push({
                lastName: this.lastName,
                firstName: this.firstName,
                email: this.email
            });
        },
        submit2() {
            const date = moment(this.date).format('DD-MM-YYYY');
            this.userInfo.push({ work: this.work, date: date });
            Object.assign(this.userInfo[0], this.userInfo[1]);
        }
    },
    computed: {
        isDisabled() {
            if (this.lastName.length > 0 && this.firstName.length > 0 && this.email.length > 0) {
                return false;
            } else {
                return true;
            }
        },
        isDisabled2() {
            if (this.date != '') {
                return false;
            } else {
                return true;
            }
        },
        isDisabled3() {
            if (this.checkbox === true) {
                return false;
            } else {
                return true;
            }
        }
    }
};
</script>
<style>
#rgpd {
    width: 60%;
    margin: 0 auto;
}
</style>
