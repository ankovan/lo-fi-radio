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
        {name: "retro room", url: "https://drive.google.com/uc?export=view&id=1xIwtuFhLUFtpTy7R2jEExtNSKhqZtpbD", type: "video"},
        {name: "cat girl", url: "https://drive.google.com/uc?export=view&id=1vqjMav1d5IfX2i69p_L8nNjxM0nhVdww", type: "video"},
        {name: "space station", url: "https://drive.google.com/uc?export=view&id=1pNH5Saj_YHdzv5X2aTy7V9pOv3DJZeKB", type: "video"},
        {name: "street telephone", url: "https://drive.google.com/uc?export=view&id=1TxMIoOjBDsHArsfvE1Mue54L7-GnoOA1", type: "video"},
        {name: "two umbrellas", url: "https://drive.google.com/uc?export=view&id=1CyFW7FctHO8GBv0QrxiGkDG0ZzXb7SnM", type: "video"},
        {name: "office", url: "https://drive.google.com/uc?export=view&id=17Rg5_kWtbUxaHV8X-bPY10z3pMap6RaP", type: "video"},
        {name: "koi pond", url: "https://drive.google.com/uc?export=view&id=1ncVzgZOHDIRMVz_2zPOCqPJFFuIW2Nwi", type: "video"},
        {name: "street art", url: "https://drive.google.com/uc?export=view&id=1vrbjV8KzpHCvjONC9hgUvkRZUXdWksFy", type: "video"},
        {name: "howl and sophie", url: "https://drive.google.com/uc?export=view&id=1SEaAeY5kCoJn_KoFzk4RfQ-0B8dmsCRA", type: "video"},
        {name: "cow", url: "https://drive.google.com/uc?export=view&id=12ZBahC9zZNsD_aX-gj6b-3ygY7QTnDIc", type: "video"},
        {name: "night pines", url: "https://drive.google.com/uc?export=view&id=1fBVRLdbBk6X36RZQBmLKOkoE5NoXuMAf", type: "video"},
        {name: "grass", url: "https://drive.google.com/uc?export=view&id=1GdR1yH_sHarrgleFkPj3kDF-sgN6Zx-I", type: "video"},
        {name: "puddle", url: "https://drive.google.com/uc?export=view&id=1kEcYfhhG5Nhx2_Yx4TVmE8RTmOnPyqkt", type: "video"},
        {name: "car drive", url: "https://drive.google.com/uc?export=view&id=1t1QcRc6yr12fusv8PJzLdVfNm7fTbPL5", type: "video"},
        {name: "keyhole day", url: "https://drive.google.com/uc?export=view&id=1k0EppvRoMyZGX4hhSGio4omrVSXnXwXX", type: "video"},
        {name: "keyhole night", url: "https://drive.google.com/uc?export=view&id=1ri67RKe1v2JZyvZJQ46DNEuLLqkStxFW", type: "video"},
        {name: "temple", url: "https://drive.google.com/uc?export=view&id=1aPGNn3lgK_FsSOrIm25tlihOzdqFgvke", type: "video"},
        {name: "vending machines", url: "https://drive.google.com/uc?export=view&id=119Ep7VCD-_6pFD9rrg3oS0V8XwdFY75U", type: "video"},
        {name: "sleeping cat", url: "https://drive.google.com/uc?export=view&id=1ugFgRAZRAU6eCt2_rggTAKFrt2umUgkm", type: "image"},
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
