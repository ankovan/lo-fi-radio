<template>
  <div class="background-image">
    <div class="background-image" v-if ="currentBackground.type === 'image'">
      <img :src="currentBackground.url">  
    </div>
    <div class="background-image" v-if ="currentBackground.type === 'video'">
      <video @loadeddata ="loaded" ref="video" autoplay loop muted>
        <source :src="currentBackground.url" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script> 
export default {
  props: [
    "currentBackground"
  ],
  watch: {
    currentBackground(newBacground, oldBackground) {
      localStorage.setItem("background", JSON.stringify(newBacground))
      this.$emit("loaded", false);
      if (newBacground.type == "video") {
        this.$refs.video.src = newBacground.url
      } else {
        setTimeout(() => this.$emit("loaded", true), 0)
      }
    }
  },
  methods: {
    loaded() {
      this.$emit("loaded", true);
    }
  },
}
</script>

<style scoped>
.background-image {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}
img, video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100vw; /* Could also use width: 100%; */
  height: 100vh;
  object-fit: cover;
  position: fixed; /* Change position to absolute if you don't want it to take up the whole page */
  left: 0px;
  top: 0px;
}
</style>
