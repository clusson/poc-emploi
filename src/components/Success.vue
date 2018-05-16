<template>
	<v-app>
		<div style="width:50%;margin-top:120px; margin: 0 auto;">
			<b-notification id="ok">
				{{msg}}
			</b-notification>
			<v-btn to="/" large color="info">{{ home }}</v-btn>
		</div>
	</v-app>
</template>

<script>
export default {
    name: 'Declare',
    data() {
        return {
            msg:
                "Bravo ! Vous pouvez désormais revenir sur le portail pour effectuer d'autres démarches ! ",
            home: 'Accueil'
        };
    },
    mounted: function() {
        this.$toast.open({
            duration: 5000,
            message: `Félicitations, votre déclaration a bien été prise en compte`,
            position: 'is-bottom',
            type: 'is-success'
        });
    }
};
</script>
<style>
#ok {
    margin-top: 20%;
}
</style>
