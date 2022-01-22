<template>
  <!-- <div class="button-settings-wrapper"> -->
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
  <!-- </div> -->
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
        {isMuted: true, isPlayed: false, name:"rain", url:"https://ankovan.drewdru.com/lfr/effects/rain.mp3"},
        {isMuted: true, isPlayed: false, name: "wind", url:"https://ankovan.drewdru.com/lfr/effects/wind.mp3"},
        {isMuted: true, isPlayed: false, name:"fire", url:"https://ankovan.drewdru.com/lfr/effects/fire.mp3"}
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
/* .button-settings-wrapper {
  display: flex;
  justify-content: end;
}  */
#button-settings {
  position: fixed;
  top: 0.8rem;
  right: 14.6rem; 
  background-color: var(--body);
  color: var(--body-text);
  padding: 0.38rem;
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: 0.9rem;
  z-index: 999;
} 
.sound-players {
  display: none;
}
.effects > .slidecontainer {
  transform: rotate(0deg);
  left: 1.35rem;
  bottom: 0.4rem;
}
.effects .slider {
  width: 6.8rem;
}
</style>