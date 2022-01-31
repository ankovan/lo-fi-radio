<template>
  <div id="main"
    :style="{
      '--body': theme.body,
      '--body-text': theme.bodyText,
      '--body-hover': theme.bodyHover,
      '--body-scroll': theme.bodyScroll
    }"
  >
    <Background :currentBackground="currentBackground" @loaded ="loading"/>
    <div class="menus">
      <Effects/>
      <BackgroundMenu @changeBackground ="changeBackground"/>
      <Theme @toggleTheme = "toggleTheme"/>
    </div>
    <Loading v-show="isLoading"/>
    <Player/>
  </div>
</template>
<script>
import Background from "@/components/Background"
import Player from "@/components/Player"
import Loading from "@/components/Loading"
import Theme from "@/components/Theme"
import BackgroundMenu from "@/components/BackgroundMenu"
import Effects from "@/components/Effects"
export default {
  components: {
    Background,
    Player,
    Loading,
    Theme,
    Effects,
    BackgroundMenu
  },
  data() {
    return {
      isLoading: false,
      theme: {
        body: "rgb(240, 240, 240, 0.75)",
        bodyText: "rgb(85, 85, 85)",
        bodyHover: "rgb(175, 175, 175)",
        bodyScroll: "rgb(165, 165, 165, 0.75)",
      },
      themes: {
        dark: {
          body: "rgb(85, 85, 85, 0.75)",
          bodyText: "rgb(240, 240, 240)",
          bodyHover: "rgb(100, 100, 100)",
          bodyScroll: "rgb(150, 150, 150, 0.75)",
        },
        light: {
          body: "rgb(240, 240, 240, 0.75)",
          bodyText: "rgb(85, 85, 85)",
          bodyHover: "rgb(175, 175, 175)",
          bodyScroll: "rgb(165, 165, 165, 0.75)",
        }
      },
      currentBackground: {
        name: "a retro room", url: "https://ankovan.drewdru.com/lfr/backgrounds/retro-room.mp4", type: "video",
      },
    }
  },
  methods: {
    loading(loaded) {
      this.isLoading = !loaded
    },
    toggleTheme(isDarkMode) {
      if(isDarkMode) {
        this.theme = this.themes.dark
        document.body.style.backgroundColor = this.themes.dark.body;
      } else {
        this.theme = this.themes.light
        document.body.style.backgroundColor = this.themes.light.body;
      }
    },
    changeBackground(background) {
      this.currentBackground = background;
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Sora', sans-serif;
}
#app {
  --background-color: black;
}
.menus {
  position: fixed;
  top: 0.8rem;
  right: 0.8rem;
  display: flow-root;
}
</style>
