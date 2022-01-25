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
        {name: "1 am", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/1-am.mp3"},
        {name: "1023", author: "idealism", url: "https://ankovan.drewdru.com/lfr/music/1023.mp3"},
        {name: "1997", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/1997.mp3"},
        {name: "2004", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/2004.mp3"},
        {name: "a better tomorrow", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/a-better-tomorrow.mp3"},
        {name: "affection", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/affection.mp3"},
        {name: "again", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/again.mp3"},
        {name: "all that's left", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/all-that's-left.mp3"},
        {name: "alternate", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/alternate.mp3"},
        {name: "and then i woke up", author: "idealism", url: "https://ankovan.drewdru.com/lfr/music/and-then-i-woke-up.mp3"},
        {name: "a thousand times", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/a-thousand-times.mp3"},
        {name: "aurora", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/aurora.mp3"},
        {name: "autumn", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/autumn.mp3"},
        {name: "back again", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/back-again.mp3"},
        {name: "betrayal", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/betrayal.mp3"},
        {name: "blank / void", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/blank-void.mp3"},
        {name: "bliss", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/bliss.mp3"},
        {name: "blossom", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/blossom..mp3"},
        {name: "blossom", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/blossom.mp3"},
        {name: "blue haze", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/blue-haze.mp3"},
        {name: "blunt", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/blunt.mp3"},
        {name: "brain food", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/brain-food.mp3"},
        {name: "breezin'", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/breezin'.mp3"},
        {name: "butterflies", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/butterflies.mp3"},
        {name: "c'est la vie", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/c'est-la-vie.mp3"},
        {name: "climbing", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/climbing.mp3"},
        {name: "clouds", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/clouds.mp3"},
        {name: "cold seas", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/cold-seas.mp3"},
        {name: "comfort zone", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/comfort-zone.mp3"},
        {name: "coming home", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/coming-home.mp3"},
        {name: "commodore", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/commodore.mp3"},
        {name: "confusion", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/confusion.mp3"},
        {name: "cruisin", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/cruisin.mp3"},
        {name: "dance-in-the-night", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/dance-in-the-night.mp3"},
        {name: "dawn", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/dawn.mp3"},
        {name: "defeated", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/defeated.mp3"},
        {name: "dime", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/dime.mp3"},
        {name: "drift..", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/drift...mp3"},
        {name: "drifting", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/drifting.mp3"},
        {name: "droplet", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/droplet.mp3"},
        {name: "dusk.", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/dusk..mp3"},
        {name: "early", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/early.mp3"},
        {name: "ease in", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/ease-in.mp3"},
        {name: "elevated.", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/elevated..mp3"},
        {name: "embrace", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/embrace.mp3"},
        {name: "entheogen", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/entheogen.mp3"},
        {name: "eulogy", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/eulogy.mp3"},
        {name: "evening.", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/evening..mp3"},
        {name: "every-day", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/every-day.mp3"},
        {name: "everything will be ok", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/everything-will-be-ok.mp3"},
        {name: "feeling of another day", author: "idealism", url: "https://ankovan.drewdru.com/lfr/music/feeling-of-another-day.mp3"},
        {name: "feelings.", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/feelings..mp3"},
        {name: "feel me", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/feel-me.mp3"},
        {name: "first luv.", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/first luv..mp3"},
        {name: "flow on", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/flow-on.mp3"},
        {name: "forgive me", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/forgive-me.mp3"},
        {name: "forward", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/forward.mp3"},
        {name: "fruits..", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/fruits...mp3"},
        {name: "genesis", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/genesis.mp3"},
        {name: "going to the beach", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/going-to-the-beach.mp3"},
        {name: "gone", author: "idealism", url: "https://ankovan.drewdru.com/lfr/music/gone.mp3"},
        {name: "grotto", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/grotto.mp3"},
        {name: "growth", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/growth.mp3"},
        {name: "happy", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/happy.mp3"},
        {name: "happy hour", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/happy-hour.mp3"},
        {name: "haven", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/haven.mp3"},
        {name: "heart", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/heart.mp3"},
        {name: "her", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/her.mp3"},
        {name: "here, now", author: "nohidea", url: "https://ankovan.drewdru.com/lfr/music/here-now.mp3"},
        {name: "herewego", author: "jinsang", url: "https://ankovan.drewdru.com/lfr/music/herewego.mp3"},
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
/* #custom-player .player-button:hover{
  background-color: var(--body-hover);
}      */
details {
  position: relative;
}
details > summary {
  list-style: none;
}
.slidecontainer {
  position: absolute;
  right: -2.2rem;
  bottom: 5.4rem;
  transform: rotate(270deg);
  width: 8rem;
  height: 0.7rem;
}
.slidecontainer > input {
  width: 8rem;
  height: 0.7rem;
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
