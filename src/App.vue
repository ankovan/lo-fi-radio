<template>
  <div id="main"
    :style="{
      '--body': theme.body,
      '--body-text': theme.bodyText,
    }"
  >
    <div><Background @loaded ="loading"/></div>
    <div><Effects/></div>
    <div><Theme @toggleTheme = "toggleTheme"/></div>
    <div><Loading v-show="isLoading"/></div>
    <div><Player/></div>
  </div>
</template>
<script>
import Background from "@/components/Background"
import Player from "@/components/Player"
import Loading from "@/components/Loading"
import Theme from "@/components/Theme"
import Effects from "@/components/Effects"
export default {
  components: {
    Background,
    Player,
    Loading,
    Theme,
    Effects,
  },
  data() {
    return {
      isLoading: false,
      theme: {
        body: "rgb(240, 240, 240, 0.75)",
        bodyText: "rgb(85, 85, 85)"
      },
      themes: {
        dark: {
          body: "rgb(85, 85, 85, 0.75)",
          bodyText: "rgb(240, 240, 240)"

        },
        light: {
          body: "rgb(240, 240, 240, 0.75)",
          bodyText: "rgb(85, 85, 85)"

        }
      }
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
</style>
