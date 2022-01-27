<template>
  <details :open="isOpenVolumeChanger" @mouseover="isOpenVolumeChanger = true" @mouseout="isOpenVolumeChanger = false || isAlwaysOpenVolume">
    <summary>
      <i @click.prevent="mute()" v-show="!isMuted" class="material-icons player-button">volume_up</i>
      <i @click.prevent="mute()" v-show="isMuted" class="material-icons player-button">volume_off</i>
    </summary>
    <div class="slidecontainer">
      <input @input="changeVolume()" v-model="volume" type="range" min="0" max="1" step="0.1" class="slider" id="myRange">
    </div>
  </details>
</template>
<script>
export default {
  props: ['playerRef', 'isAlwaysOpenVolume', 'defaultVolume'],
  data() {
    return {
      isOpenVolumeChanger: false,
      volume: 0.5,
      isMuted: false,
      lastVolume: 1,
    }
  },
  mounted() {
    this.isOpenVolumeChanger = this.isAlwaysOpenVolume;
    if (this.defaultVolume !=undefined) {
      this.volume = this.defaultVolume
      this.lastVolume = this.volume
      this.isMuted = this.defaultVolume == 0 ? true: false
    }
    // this.volume = localStorage.getItem("volume")
  },
  methods: {
     changeVolume() {
      this.isMuted = false;
      if(Object.prototype.toString.call(this.$parent.$refs[this.playerRef]) === '[object Array]') {
        this.$parent.$refs[this.playerRef][0].volume = this.volume;
      } else {
        this.$parent.$refs[this.playerRef].volume = this.volume;
      }
      
      if (this.volume == 0) {
        this.isMuted = true;
      }
      this.$emit("mute", this.isMuted)
      // localStorage.setItem("volume", this.volume)
    },
    mute() {

      this.isMuted = !this.isMuted;
      this.$emit("mute", this.isMuted)
      this.isOpenVolumeChanger = false || this.isAlwaysOpenVolume;
       if (this.isMuted) {
         this.lastVolume = this.volume
         this.volume = 0
       }
       else {
         this.volume = this.lastVolume
         this.changeVolume()
       }
    },
  },
}
</script>
<style>
.slider {
-webkit-appearance: none;
background: var(--body);
border-radius: 0.8rem;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0.75rem;
  height: 0.75rem;
  background: var(--body-text);
  cursor: pointer;
  border-radius: 100%;
} 
</style>
