<template>
  <div id="theme" @click="toggleTheme()"> 
    <i v-show="!isDarkMode"  class="material-icons" id="light-setter">light_mode</i>
    <i v-show="isDarkMode" class="material-icons" id="dark-setter">dark_mode</i>
  </div>
</template>
<style scoped>
  i {
    font-size: 1.3rem;
  }
  #theme {
    padding: 0.2rem 0.4rem 0.1rem 0.4rem;
    border-radius: 0.2rem;
    background-color: var(--body);
    cursor: pointer;
    user-select: none;
    margin-left: 0.5rem;
    float: left;
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
  mounted() {
    this.isDarkMode = localStorage.getItem("theme") =="true"?true:false
    this.$emit("toggleTheme", this.isDarkMode)
  },
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.$emit("toggleTheme", this.isDarkMode)
      localStorage.setItem("theme", this.isDarkMode)
    },
  },
}
</script>
