<template>
  <div id="wrapper-player">
      <div id="custom-player">
        <div class="row">
          <div ref="name" id="name">{{currentMusic.author}} - {{currentMusic.name}}</div>
        </div>
        <div class="row">
          <i @click="repeatMusic()" v-show="!isRepeated" class="material-icons player-button">repeat</i>
          <i @click="repeatMusic()" v-show="isRepeated" class="material-icons player-button">repeat_one</i>
          <i @click="prevMusic()" class="material-icons player-button" id="button-prev">skip_previous</i>
          <i v-show="!isPlayed" @click="playMusic()" class="material-icons player-button">play_arrow</i>
          <i v-show ="isPlayed" @click="pauseMusic()" class="material-icons player-button">pause</i>
          <i @click="nextMusic()" class="material-icons player-button" id ="button-next">skip_next</i>
          <Volume @mute="mute" playerRef="audio"/>
          <!-- <details :open = "isOpenVolumeChanger" @mouseover="isOpenVolumeChanger = true" @mouseout="isOpenVolumeChanger = false">
            <summary>
              <i @click ="mute()" v-show ="!isMuted" class="material-icons player-button">volume_up</i>
              <i @click ="mute()" v-show ="isMuted" class="material-icons player-button">volume_off</i>
            </summary>
            <div class="slidecontainer">
              <input @change="changeVolume()" v-model="volume" type="range" min="0" max="1" step="0.1" class="slider" id="myRange">
            </div>
          </details> -->
          <audio id ="html5-player" @ended ="ended" ref="audio" controls crossorigin playsinline :muted ="isMuted">
            <source
                :src="currentMusic.url"
                type="audio/mp3"
            />
          </audio>
        </div>
      </div>
  </div>
</template>
<script>
import Volume from "@/components/Volume"
export default {
  components: {
    Volume,
  },
  data() {
    return {
      // far apart
      playlist: [
        {name: "boo", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/boo.mp3"},
        {name: "clock tower", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/clock-tower.mp3"},
        {name: "before u go", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/before-u-go.mp3"},
        {name: "calm", author: "idealism", url: "https://ankovan.drewdru.com/lfr/music/calm.mp3"},
        {name: "trees", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/trees..mp3"},
        {name: "warm tea", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/warm-tea..mp3"},
        {name: "who am i to you?", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/who-am-i-to-you.mp3"},
      ],
      currentMusic: {
        name: "boo", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/boo.mp3"
      },
      currentMusicId: 0,
      isPlayed: false,
      // isOpenVolumeChanger: false,
      // volume: 1,
      isMuted: false,
      isRepeated: false,
      scrollLeftPosition: 0,
    }
  },
  mounted() {
    setInterval(()=>{
      var maxScrollLeft = this.$refs.name.scrollWidth - this.$refs.name.clientWidth;
      if (this.scrollLeftPosition >= maxScrollLeft-1) {
        this.scrollLeftPosition = 0;
      } else {
        this.scrollLeftPosition = this.scrollLeftPosition + 1
      }
      this.$refs.name.scroll({
        left: this.scrollLeftPosition,
      });
    }, 80)
  },
  methods: {
    nextMusic() {
      this.currentMusicId++
      if (this.currentMusicId == this.playlist.length) {
        this.currentMusicId = 0;
      }
      this.currentMusic = this.playlist[this.currentMusicId];
      this.$refs.audio.src = this.currentMusic.url;
      this.playMusic();
    },
    prevMusic() {
      this.currentMusicId--
      if (this.currentMusicId < 0) {
        this.currentMusicId = this.playlist.length-1;
      }
      this.currentMusic = this.playlist[this.currentMusicId];
      this.$refs.audio.src = this.currentMusic.url;
      this.$refs.audio.play();
    },
    ended() {
      if (this.isRepeated) {
        this.playMusic();
        return;
      }
      this.nextMusic();
    },
    playMusic() {
      this.$refs.audio.play();
      this.isPlayed = true;
    },
    pauseMusic() {
      this.$refs.audio.pause();
      this.isPlayed = false;
    },
    // changeVolume() {
    //   this.isMuted = false;
    //   this.$refs.audio.volume = this.volume;
    //   if (this.$refs.audio.volume == 0) {
    //     this.isMuted = true;
    //   }
    // },
    mute(mute) {
      this.isMuted = mute; 
    },
    repeatMusic() {
      this.isRepeated = !this.isRepeated;
    }
  },
}
</script>
<style>
#wrapper-player {
  position: fixed;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#custom-player {
  background: var(--body);
  width: auto;
  padding: 1rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#html5-player {
  display: none;
}
#custom-player .player-button {
  cursor: pointer;
  color: var(--body-text);
  margin: 0 0.8rem 0 0.8rem;
}
details {
  position: relative;
}
details > summary {
  list-style: none;
}
.slidecontainer {
  position: absolute;
  right: -2.6rem;
  bottom: 5rem;
  transform: rotate(270deg);
}
/* .slider {
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
  border-radius: 1rem;
}  */
.row {
  display: flex;
  justify-content: center;
}
#name {
  margin-bottom: 0.45rem;
  font-weight: 400;
  width: 100%;
  overflow-x:scroll;
  white-space: nowrap;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  display: flex;
  justify-content: center;
  color: var(--body-text);
}
#name::-webkit-scrollbar {
  display: none;
}
</style>
