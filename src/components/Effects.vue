<template>
  <div id="button-settings">
    <details @click.prevent :open = "isOpenEffects" @mouseover="isOpenEffects = true" @mouseout="isOpenEffects = false">
    <summary>add sound effects</summary>
    <div>
      <div 
          v-for="effect in effects"
          :key="effect"
          >{{effect.name}}
          <Volume defaultVolume = "0" @mute="mute(effect.name, `effect-${effect.name}`, $event)" :playerRef="`effect-${effect.name}`" :isAlwaysOpenVolume="true" class="effects"/>
        </div>
    </div>
    </details>
  </div>
  <div class="sound-players">
    <audio :ref="`effect-${effect.name}`" v-for="effect in effects"
            :key="effect" 
            @play ="startPlay(effect.name)"
             controls loop :muted ="effect.isMuted">
      <source
        :src="effect.url"
      />
    </audio>
  </div>
</template>
<script>
import Volume from "@/components/Volume"
import { effect } from '@vue/reactivity'
export default {
  components: {
    Volume,
  },
  data() {
    return {
      effects: [
        {isMuted: true, isPlayed: false, name:"rain", url:"https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/effects/rain.mp3"},
        {isMuted: true, isPlayed: false, name: "wind", url:"https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/effects/wind.mp3"},
        {isMuted: true, isPlayed: false, name:"fire", url:"https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/effects/fire.mp3"}
      ],
      isOpenEffects: false,
    }
  },
  methods: {
    startPlay(effectName) {
      this.effects.find(item=>item.name==effectName).isPlayed = true
    },
    mute(effectName, playerRef, isMuted) {
      this.effects.find(item=>item.name==effectName).isMuted = isMuted;
      if (!isMuted && !this.effects.find(item=>item.name==effectName).isPlayed) {
        this.$refs[playerRef][0].play();
      }
    }
  },
}
</script>
<style>
#button-settings {
  background-color: var(--body);
  color: var(--body-text);
  padding: 0.38rem;
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: 0.9rem;
  float: left;
} 
.sound-players {
  display: none;
}
.effects > .slidecontainer {
  transform: rotate(0deg);
  left: 1.35rem;
  bottom: 0.85rem;
}
.effects .slider {
  width: 6.8rem;
}
</style>