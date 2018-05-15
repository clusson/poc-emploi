<template>
  <v-app class="hello">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title primary-title>
            <h3 class="headline mb-0">{{ msg }}</h3>
            
             
      </v-card-title>
      <h3 class="headline mb-0">{{ emotion }}</h3>
      </v-card>
      </v-flex>
    </v-layout>
<div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
        <div><button id="snap" v-on:click="capture()">Snap Photo</button></div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <ul>
            <li v-for="c in captures">
                <img v-bind:src="c" height="50" />
            </li>
        </ul>
    </div>
     
  </v-app>

</template>

<script>
import {getEmotion} from '../workers/Emotion'
export default {
  name: 'Emotion',
  data () {
    return {
      msg: 'Test Détection d\'emotion', 
      video: {},
      canvas: {},
      captures: [] ,
      emotion:""
    }
  },
  mounted() {
    this.video = this.$refs.video;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.src = window.URL.createObjectURL(stream);
            this.video.play();
        });
        }
    },
    methods: {
    capture() {
        this.canvas = this.$refs.canvas;
        
        //getEmotion(this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480));
        var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
        this.captures.push(canvas.toDataURL("image/png"));
       
       const self = this;
        getEmotion(canvas.toDataURL("image/jpeg"))
        .then(function(emotionMax){
          console.log(emotionMax);
           self.emotion=emotionMax;
        })
        setTimeout(function(){ self.capture() }, 1000);
       // console.log(context);
       // console.log(canvas.toDataURL("image/png"));
    }
    }
}
</script>
<style>
.hello {
  margin-top:80px;
}
</style>
