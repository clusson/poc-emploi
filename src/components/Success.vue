<template>
	<v-app class="ok">
		{{msg}}
		<b-notification type="is-success" has-icon>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
		</b-notification>
	</v-app>
</template>

<script>
export default {
    name: 'Declare',
    data() {
        return {
            msg: 'Bravo ! '
        };
    }
};
</script>
<style>
.ok {
    margin-top: 100px;
}
.bravo {
    margin: 0 auto;
}
</style>
