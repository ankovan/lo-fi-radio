<template>
  <div id="theme" @click="toggleTheme()"> 
    <i v-show="!isDarkMode"  class="material-icons" id="light-setter">light_mode</i>
    <i v-show="isDarkMode" class="material-icons" id="dark-setter">dark_mode</i>
  </div>
</template>
<style scoped>
  #theme {
    position: fixed;
    top: 0.6rem;
    right: 0.6rem;
    padding: 0.4rem 0.6rem 0.4rem 0.6rem;
    border-radius: 0.2rem;
    background-color: var(--body);
    cursor: pointer;
    user-select: none;
  }
  #light-setter {
    color: var(--body-text);
  }
  #dark-setter {
    color: var(--body-text);
  }
</style>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.$emit("toggleTheme", this.isDarkMode)
    },
  },
}
</script>
