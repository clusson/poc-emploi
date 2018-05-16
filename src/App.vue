<template>
	<div id="app" v-heatmap>
		<v-toolbar color="grey lighten-4" flat>
			<v-toolbar-title>
				<router-link to="/"><img src="./assets/logo.svg" value="center" width="70" height="60"></router-link>
			</v-toolbar-title>
			<v-toolbar-items class="hidden-sm">
				<v-btn flat style="margin-left:50px" to="/">
					<i class="material-icons">home</i>Accueil</v-btn>
				<v-btn style="margin-left:60px" flat value="center" v-on:click="reload">
					<i class="material-icons">refresh</i>
					<span style="margin:10px;font-size:10px">Rafraîchir la page</span>
				</v-btn>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-toolbar-items>
      
       <v-btn color="info" v-on:click="cameraOn = !cameraOn;capture();">{{message}}</v-btn>
       
       
				<v-btn color="error">Fermer</v-btn>
        <div style="display:none"><video  hidden activated="false" ref="video" id="video" width="640" height="480" autoplay></video>
       <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
       </div>
			</v-toolbar-items>
		</v-toolbar>
   
		<router-view/>
	</div>
</template>

<script>
import { getEmotion, isAngry } from './workers/Emotion'
export default {
    name: 'App',
    data() {
        return {
            help: "Demander de l'aide",
            message: 'Activer la reco faciale',
            cameraOn: false,
            video: {},
            canvas: {}
        }
    },
    mounted() {
        this.video = this.$refs.video
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.src = window.URL.createObjectURL(stream)
                this.video.play()
            })
        }
    },
    methods: {
        reload: function() {
            location.reload()
        },
        capture() {
            this.canvas = this.$refs.canvas

            const context = this.canvas.getContext('2d').drawImage(this.video, 0, 0, 640, 480)

            const self = this
            getEmotion(canvas.toDataURL('image/jpeg'))

            if (isAngry()) {
                self.snackbar()
            }

            if (this.cameraOn) {
                this.message = 'Arrêter la reco faciale'
                setTimeout(function() {
                    self.capture()
                }, 3000)
            } else {
                this.message = 'Activer la reco faciale'
            }
        },
        snackbar() {
            this.$snackbar.open({
                duration: 60000,
                message: "Demander de l'aide:",
                type: 'is-success',
                position: 'is-bottom-right',
                actionText: 'Appeller un agent en cliquant ici',
                queue: true,
                onAction: () => {
                    this.$toast.open({
                        message: 'Merci de patienter, un agent va se rendre disponible',
                        duration: 10000,
                        queue: true
                    })
                }
            })
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.notices .snackbar .text {
    padding: 0.5em 1em;
    margin-bottom: 0;
}
</style>
