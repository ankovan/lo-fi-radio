<template>
  <div id="wrapper-player">
      <div id="custom-player">
        <div class="row">
          <div ref="name" id="name">{{currentMusic.author}} - {{currentMusic.name}}</div>
        </div>
        <div class="row">
          <i @click="repeatMusic()" v-show="!isRepeated" class="material-icons player-button">repeat</i>
          <i @click="repeatMusic()" v-show="isRepeated" class="material-icons player-button">repeat_one</i>
          <i v-show="!isShuffleOn" @click="shuffleMusic()" class="material-icons player-button">shuffle</i>
          <i v-show="isShuffleOn" @click="shuffleMusic()" class="material-icons player-button">shuffle_on</i>
          <i @click="prevMusic()" class="material-icons player-button" id="button-prev">skip_previous</i>
          <i v-show="!isPlayed" @click="playMusic()" class="material-icons player-button">play_arrow</i>
          <i v-show ="isPlayed" @click="pauseMusic()" class="material-icons player-button">pause</i>
          <i @click="nextMusic()" class="material-icons player-button" id ="button-next">skip_next</i>
          <Volume @mute="mute" playerRef="audio"/>
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
        {name: "1 am", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/1-am.mp3"},
        {name: "1023", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/1023.mp3"},
        {name: "1997", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/1997.mp3"},
        {name: "2004", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/2004.mp3"},
        {name: "a better tomorrow", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/a-better-tomorrow.mp3"},
        {name: "affection", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/affection.mp3"},
        {name: "again", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/again.mp3"},
        {name: "all that's left", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/all-that's-left.mp3"},
        {name: "alternate", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/alternate.mp3"},
        {name: "and then i woke up", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/and-then-i-woke-up.mp3"},
        {name: "a thousand times", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/a-thousand-times.mp3"},
        {name: "aurora", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/aurora.mp3"},
        {name: "autumn", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/autumn.mp3"},
        {name: "back again", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/back-again.mp3"},
        {name: "before u go", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/before-u-go.mp3"},
        {name: "betrayal", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/betrayal.mp3"},
        {name: "blank / void", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/blank-void.mp3"},
        {name: "bliss", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/bliss.mp3"},
        {name: "blossom", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/blossom..mp3"},
        {name: "blossom", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/blossom.mp3"},
        {name: "blue haze", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/blue-haze.mp3"},
        {name: "blunt", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/blunt.mp3"},
        {name: "boo", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/boo.mp3"},
        {name: "brain food", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/brain-food.mp3"},
        {name: "breezin'", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/breezin'.mp3"},
        {name: "butterflies", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/butterflies.mp3"},
        {name: "c'est la vie", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/c'est-la-vie.mp3"},
        {name: "calm", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/calm.mp3"},
        {name: "climbing", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/climbing.mp3"},
        {name: "clock tower", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/clock-tower.mp3"},
        {name: "clouds", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/clouds.mp3"},
        {name: "comfort zone", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/comfort-zone.mp3"},
        {name: "commodore", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/commodore.mp3"},
        {name: "confusion", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/confusion.mp3"},
        {name: "cruisin", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/cruisin.mp3"},
        {name: "dance in the night", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/dance-in-the-night.mp3"},
        {name: "dawn", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/dawn.mp3"},
        {name: "defeated", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/defeated.mp3"},
        {name: "dime", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/dime.mp3"},
        {name: "drift..", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/drift...mp3"},
        {name: "drifting", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/drifting.mp3"},
        {name: "droplet", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/droplet.mp3"},
        {name: "dusk.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/dusk..mp3"},
        {name: "early", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/early.mp3"},
        {name: "ease in", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/ease-in.mp3"},
        {name: "elevated.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/elevated..mp3"},
        {name: "embrace", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/embrace.mp3"},
        {name: "entheogen", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/entheogen.mp3"},
        {name: "eulogy", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/eulogy.mp3"},
        {name: "evening.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/evening..mp3"},
        {name: "every-day", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/every-day.mp3"},
        {name: "everything will be ok", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/everything-will-be-ok.mp3"},
        {name: "feeling of another day", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/feeling-of-another-day.mp3"},
        {name: "feelings.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/feelings..mp3"},
        {name: "feel me", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/feel-me.mp3"},
        {name: "first luv.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/first-luv..mp3"},
        {name: "forgive me", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/forgive-me.mp3"},
        {name: "forward", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/forward.mp3"},
        {name: "fruits..", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/fruits...mp3"},
        {name: "genesis", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/genesis.mp3"},
        {name: "going to the beach", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/going-to-the-beach.mp3"},
        {name: "gone", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/gone.mp3"},
        {name: "grotto", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/grotto.mp3"},
        {name: "growth", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/growth.mp3"},
        {name: "happy", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/happy.mp3"},
        {name: "happy hour", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/happy-hour.mp3"},
        {name: "haven", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/haven.mp3"},
        {name: "heart", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/heart.mp3"},
        {name: "her", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/her.mp3"},
        {name: "here, now", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/here-now.mp3"},
        {name: "here we go", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/herewego.mp3"},
        {name: "hishitsu", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/hishitsu.mp3"},
        {name: "homecoming // memories", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/homecoming-memories.mp3"},
        {name: "i dont wanna go outside today", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/i-don't-wanna-go-outside-today.mp3"},
        {name: "i'm over it", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/i'm-over-it.mp3"},
        {name: "indigo", author: "nohiea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/indigo.mp3"},
        {name: "in the clouds", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/in-the-clouds.mp3"},
        {name: "into the deep", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/into-the-deep.mp3"},
        {name: "introspect", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/introspect.mp3"},
        {name: "ipa", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/ipa.mp3"},
        {name: "island", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/island.mp3"},
        {name: "jewel", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/jewel.mp3"},
        {name: "journey", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/journey.mp3"},
        {name: "kept beneath", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/kept-beneath.mp3"},
        {name: "kimchi (instrmntl)", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/kimchi-(instrmntl).mp3"},
        {name: "kona park", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/kona-park.mp3"},
        {name: "last autumn", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/last-autumn.mp3"},
        {name: "learning", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/learning.mp3"},
        {name: "leaving", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/leaving.mp3"},
        {name: "light", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/light.mp3"},
        {name: "love (left)", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/love-(left).mp3"},
        {name: "lucid_", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/lucid.mp3"},
        {name: "lunar", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/lunar.mp3"},
        {name: "maple tree", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/maple-tree.mp3"},
        {name: "maybe", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/maybe.mp3"},
        {name: "meditate_", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/meditate_.mp3"},
        {name: "midnight dreamin'", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/midnight-dreamin'.mp3"},
        {name: "midnight, somewhere", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/midnight-somewhere.mp3"},
        {name: "misery", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/misery.mp3"},
        {name: "missing..", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/missing.mp3"},
        {name: "misunderstood", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/misunderstood.mp3"},
        {name: "moonlight", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/moonlight.mp3"},
        {name: "morning.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/morning..mp3"},
        {name: "mourn", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/mourn.mp3"},
        {name: "nero", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/nero.mp3"},
        {name: "never know", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/never-know.mp3"},
        {name: "night breeze", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/night-breeze.mp3"},
        {name: "nothing to me", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/nothing-to-me.mp3"},
        {name: "obsidian", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/obsidian.mp3"},
        {name: "oolong", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/oolong.mp3"},
        {name: "pastel", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/pastel.mp3"},
        {name: "patience", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/patience.mp3"},
        {name: "pause", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/pause.mp3"},
        {name: "perfect blue", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/perfect-blue.mp3"},
        {name: "petrichor", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/petrichor.mp3"},
        {name: "pond(or)", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/pond(or).mp3"},
        {name: "promissory-note", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/promissory-note.mp3"},
        {name: "providah", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/providah.mp3"},
        {name: "pure.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/pure..mp3"},
        {name: "purity", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/purity.mp3"},
        {name: "quiet", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/quiet.mp3"},
        {name: "radiant", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/radiant.mp3"},
        {name: "reflection", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/reflection.mp3"},
        {name: "reflection of loss", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/reflection-of-loss.mp3"},
        {name: "regret", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/regret.mp3"},
        {name: "reminisce.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/reminisce..mp3"},
        {name: "restless", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/restless.mp3"},
        {name: "revelation", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/revelation.mp3"},
        {name: "riding bikes", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/riding-bikes.mp3"},
        {name: "roll thru", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/roll-thru.mp3"},
        {name: "rose garden", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/rose-garden.mp3"},
        {name: "sacrifice", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/sacrifice..mp3"},
        {name: "sacrifices", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/sacrifices.mp3"},
        {name: "separate", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/separate.mp3"},
        {name: "september rain", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/september-rain.mp3"},
        {name: "she's got soul", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/she's-got-soul.mp3"},
        {name: "shine", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/shine.mp3"},
        {name: "showers", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/showers.mp3"},
        {name: "silhouette", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/silhouette.mp3"},
        {name: "solace", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/solace.mp3"},
        {name: "solitude", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/solitude.mp3"},
        {name: "somehow", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/somehow.mp3"},
        {name: "some other time", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/some-other-time.mp3"},
        {name: "stay here, with me", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/stay-here-with-me.mp3"},
        {name: "struggles", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/struggles.mp3"},
        {name: "sunlight.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/sunlight..mp3"},
        {name: "sunsets.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/sunsets.mp3"},
        {name: "sway", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/sway.mp3"},
        {name: "tell me the truth", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/tell-me-the-truth.mp3"},
        {name: "the.falling.leaves", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/the.falling.leaves.mp3"},
        {name: "the endless", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/the-endless.mp3"},
        {name: "the way home", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/the-way-home.mp3"},
        {name: "thirteen", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/thirteen.mp3"},
        {name: "this city", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/this-city.mp3"},
        {name: "thoughts.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/thoughts..mp3"},
        {name: "tick tock", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/tick-tock.mp3"},
        {name: "tides", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/tides.mp3"},
        {name: "times movin' fast", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/times-movin'-fast.mp3"},
        {name: "told u...", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/told-u.mp3"},
        {name: "tombs/pineal", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/tombs-pineal.mp3"},
        {name: "trees.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/trees..mp3"},
        {name: "tsuki", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/tsuki.mp3"},
        {name: "umbrella", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/umbrella.mp3"},
        {name: "undersea.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/undersea..mp3"},
        {name: "untold", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/untold.mp3"},
        {name: "uplift", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/uplift.mp3"},
        {name: "ursmile", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/ursmile.mp3"},
        {name: "vanish", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/never-know.mp3"},
        {name: "vapour", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/vapour.mp3"},
        {name: "violet", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/violet.mp3"},
        {name: "voyage", author: "idealism", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/voyage.mp3"},
        {name: "waiting.", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/waiting..mp3"},
        {name: "warm tea", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/warm-tea..mp3"},
        {name: "who am i, to you?", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/who-am-i-to-you.mp3"},
        {name: "who knows?", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/who-knows.mp3"},
        {name: "why", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/why.mp3"},
        {name: "with.u", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/with.u.mp3"},
        {name: "without u", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/without-u.mp3"},
        {name: "wonder", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/wonder.mp3"},
        {name: "would", author: "nohidea", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/never-know.mp3"},
        {name: "yearn", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/yearn.mp3"},
        {name: "you", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/you.mp3"},
        {name: "youth", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/youth.mp3"},
],
      currentMusic: {
        name: "1 am", author: "jinsang", url: "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/1-am.mp3"
      },
      currentMusicId: 0,
      isPlayed: false,
      isMuted: false,
      isRepeated: false,
      scrollLeftPosition: 0,
      isShuffleOn: false,
    }
  },
  mounted() {
    // setInterval(()=>{
    //   var maxScrollLeft = this.$refs.name.scrollWidth - this.$refs.name.clientWidth;
    //   if (this.scrollLeftPosition >= maxScrollLeft-1) {
    //     this.scrollLeftPosition = 0;
    //   } else {
    //     this.scrollLeftPosition = this.scrollLeftPosition + 1
    //   }
    //   this.$refs.name.scroll({
    //     left: this.scrollLeftPosition,
    //   });
    // }, 80)
    const defaultMusic = '{"name": "1 am", "author": "jinsang", "url": "https://npwlpbbsfrhprurdmorf.supabase.co/storage/v1/object/public/lo-fi-radio/assets/music/1-am.mp3"}';

    this.currentMusic = JSON.parse(localStorage.getItem("music") || defaultMusic)
    this.currentMusicId = this.playlist.findIndex(item=>(item.name==this.currentMusic.name && item.author==this.currentMusic.author))
    // this.volume = localStorage.getItem("volume")
  },
  watch: {
    currentMusic(newMusic) {
      localStorage.setItem("music", JSON.stringify(newMusic));
      // localStorage.setItem("volume", this.volume);
    }
  },
  methods: {
    shuffleMusic(randomMusic) {
      this.isShuffleOn=!this.isShuffleOn


    },
    nextMusic() {

      if (this.isShuffleOn) {
        const randomMusicId =  Math.floor(Math.random()*this.playlist.length)
        if (randomMusicId == this.currentMusicId) {
          this.currentMusicId++
        } else {
          this.currentMusicId = randomMusicId
        }
      } else {
        this.currentMusicId++
      }


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
