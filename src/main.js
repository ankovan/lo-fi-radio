import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

createApp(App)
  .use(VuePlyr, {
    plyr: {
      controls: [
        'play-large', 'play', 'mute', 'volume', 'captions', 'pip', 'airplay', 'fullscreen'
      ],
      settings: ['speed', 'loop']
    }
  })
  .mount('#app')
