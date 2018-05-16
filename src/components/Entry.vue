<template>
	<v-app class="hello">
		<h3 class="headline mb-0">{{ home }}</h3>
		<v-card>
			<v-container fluid grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12 sm6 offset-sm3>
						<b-message title="Déclaration" type="is-info">
							{{msg}} Commencez par déclarer votre situation !
						</b-message>
						<v-btn color="info" to="/declare">
							<span>{{start}}</span>
							<i class="material-icons">
								check_circle
							</i>
						</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>
	</v-app>
</template>

<script>
export default {
    name: 'Entry',
    data() {
        return {
            home: 'Portail POC Emploi',
            msg: 'Bienvenue sur le site de POC Emploi',
            start: 'Déclarer ma situation'
        };
    },
    methods: {}
};
</script>
<style>
</style>
