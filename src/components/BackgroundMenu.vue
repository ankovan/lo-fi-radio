<template>
  <div class="button-settings" id="bg-changer">
    <details :open = "isOpenBackgroundChanger" @mouseover="isOpenBackgroundChanger = true" @mouseout="isOpenBackgroundChanger = false">
      <summary>change background</summary>
      <div id="background-themes">
        <div 
          v-for="background in backgrounds"
          :key="background" 
          class="theme"
          @click="changeBackground(background)"
        >{{background.name}}</div>
      </div>
    </details>
  </div>
</template>
<script>
export default {
mounted() {
  const defaultBackground = '{"name": "retro room", "url": "https://ankovan.drewdru.com/lfr/backgrounds/retro-room.mp4", "type": "video"}';
  this.changeBackground(JSON.parse(localStorage.getItem("background") || defaultBackground))
},
data() {
    return {
      backgrounds: [ 
        {name: "retro room", url: "https://ankovan.drewdru.com/lfr/backgrounds/retro-room.mp4", type: "video"},
        {name: "cat girl", url: "https://ankovan.drewdru.com/lfr/backgrounds/cat-girl.mp4", type: "video"},
        {name: "space station", url: "https://ankovan.drewdru.com/lfr/backgrounds/cosmo-girl.mp4", type: "video"},
        {name: "street telephone", url: "https://ankovan.drewdru.com/lfr/backgrounds/street-telephone.mp4", type: "video"},
        {name: "two umbrellas", url: "https://ankovan.drewdru.com/lfr/backgrounds/two-umbrellas.mp4", type: "video"},
        {name: "office", url: "https://ankovan.drewdru.com/lfr/backgrounds/office-girls.mp4", type: "video"},
        {name: "koi pond", url: "https://ankovan.drewdru.com/lfr/backgrounds/koi-pond.mp4", type: "video"},
        {name: "street art", url: "https://ankovan.drewdru.com/lfr/backgrounds/street-art.mp4", type: "video"},
        {name: "howl and sophie", url: "https://ankovan.drewdru.com/lfr/backgrounds/howl-and-sophie.mp4", type: "video"},
        {name: "cow", url: "https://ankovan.drewdru.com/lfr/backgrounds/cow.mp4", type: "video"},
        {name: "night pines", url: "https://ankovan.drewdru.com/lfr/backgrounds/night-pines.mp4", type: "video"},
        {name: "grass", url: "https://ankovan.drewdru.com/lfr/backgrounds/grass.mp4", type: "video"},
        {name: "puddle", url: "https://ankovan.drewdru.com/lfr/backgrounds/puddle.mp4", type: "video"},
        {name: "car drive", url: "https://ankovan.drewdru.com/lfr/backgrounds/car-drive.mp4", type: "video"},
        {name: "keyhole day", url: "https://ankovan.drewdru.com/lfr/backgrounds/keyhole-day.mp4", type: "video"},
        {name: "keyhole night", url: "https://ankovan.drewdru.com/lfr/backgrounds/keyhole-night.mp4", type: "video"},
        {name: "temple", url: "https://ankovan.drewdru.com/lfr/backgrounds/temple.mp4", type: "video"},
        {name: "vending machines", url: "https://ankovan.drewdru.com/lfr/backgrounds/vending-machines.mp4", type: "video"},
        {name: "sleeping cat", url: "https://ankovan.drewdru.com/lfr/backgrounds/sleeping-cat.gif", type: "image"},
      ],
      isOpenBackgroundChanger: false,
    }
  },
  methods: {
    changeBackground(background) {
      this.$emit("changeBackground", background)
    },
  }
}
</script>
<style>
 .button-settings {
  background-color: var(--body);
  padding: 0.38rem;
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  float:left;
} 
details > summary {
  list-style: none;
  font-weight: 500;
  color: var(--body-text);
}
#background-themes {
  overflow-y: scroll;
  height: 9rem;
  scrollbar-width: thin;
  color: var(--body-text);
}
#background-themes::-webkit-scrollbar {
    width: 0.4rem;
}
#background-themes::-webkit-scrollbar-track {
  background-color: var(--body); /* var(--color-name, #22222222) */
  border-radius: 0.2rem;
}
#background-themes::-webkit-scrollbar-thumb {
  background: var(--body-text); 
  border-radius: 0.2rem;
}
#background-themes .theme {
  padding-left: 0.25rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-size: 0.85rem;
}
#background-themes .theme:hover {
  background-color: var(--body-hover);
} 
</style>
