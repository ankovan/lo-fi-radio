(function(e){function t(t){for(var r,c,u=t[0],s=t[1],a=t[2],l=0,m=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&m.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/lo-fi-radio/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0132":function(e,t,n){"use strict";n("feae")},1260:function(e,t,n){},"41d5":function(e,t,n){"use strict";n("5ce3")},4864:function(e,t,n){},5452:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,i,c){var u=Object(r["m"])("Background"),s=Object(r["m"])("Effects"),a=Object(r["m"])("Theme"),d=Object(r["m"])("Loading"),l=Object(r["m"])("Player");return Object(r["i"])(),Object(r["d"])("div",{id:"main",style:Object(r["h"])({"--body":i.theme.body,"--body-text":i.theme.bodyText})},[Object(r["e"])("div",null,[Object(r["g"])(u,{onLoaded:c.loading},null,8,["onLoaded"])]),Object(r["e"])("div",null,[Object(r["g"])(s)]),Object(r["e"])("div",null,[Object(r["g"])(a,{onToggleTheme:c.toggleTheme},null,8,["onToggleTheme"])]),Object(r["e"])("div",null,[Object(r["q"])(Object(r["g"])(d,null,null,512),[[r["p"],i.isLoading]])]),Object(r["e"])("div",null,[Object(r["g"])(l)])],4)}n("b0c0");var i=function(e){return Object(r["k"])("data-v-0e8e62dc"),e=e(),Object(r["j"])(),e},c={class:"background-image"},u={class:"button-settings",id:"bg-changer"},s=["open"],a=i((function(){return Object(r["e"])("summary",null,"change background",-1)})),d={id:"background-themes"},l=["onClick"],m={key:0,class:"background-image"},p=["src"],f={key:1,class:"background-image"},b=["src"];function h(e,t,n,o,i,h){return Object(r["i"])(),Object(r["d"])("div",c,[Object(r["e"])("div",u,[Object(r["e"])("details",{open:i.isOpenBackgroundChanger,onMouseover:t[0]||(t[0]=function(e){return i.isOpenBackgroundChanger=!0}),onMouseout:t[1]||(t[1]=function(e){return i.isOpenBackgroundChanger=!1})},[a,Object(r["e"])("div",d,[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(i.backgrounds,(function(e){return Object(r["i"])(),Object(r["d"])("div",{key:e,class:"theme",onClick:function(t){return h.changeBackground(e)}},Object(r["n"])(e.name),9,l)})),128))])],40,s)]),"image"===i.currentBackground.type?(Object(r["i"])(),Object(r["d"])("div",m,[Object(r["e"])("img",{src:i.currentBackground.url},null,8,p)])):Object(r["c"])("",!0),"video"===i.currentBackground.type?(Object(r["i"])(),Object(r["d"])("div",f,[Object(r["e"])("video",{onLoadeddata:t[2]||(t[2]=function(){return h.loaded&&h.loaded.apply(h,arguments)}),ref:"video",autoplay:"",loop:"",muted:""},[Object(r["e"])("source",{src:i.currentBackground.url,type:"video/mp4"},null,8,b)],544)])):Object(r["c"])("",!0)])}var v={data:function(){return{backgrounds:[{name:"retro room",url:"https://ankovan.drewdru.com/lfr/backgrounds/retro-room.mp4",type:"video"},{name:"cat girl",url:"https://ankovan.drewdru.com/lfr/backgrounds/cat-girl.mp4",type:"video"},{name:"space station",url:"https://ankovan.drewdru.com/lfr/backgrounds/cosmo-girl.mp4",type:"video"},{name:"street telephone",url:"https://ankovan.drewdru.com/lfr/backgrounds/street-telephone.mp4",type:"video"},{name:"two umbrellas",url:"https://ankovan.drewdru.com/lfr/backgrounds/two-umbrellas.mp4",type:"video"},{name:"office",url:"https://ankovan.drewdru.com/lfr/backgrounds/office-girls.mp4",type:"video"},{name:"koi pond",url:"https://ankovan.drewdru.com/lfr/backgrounds/koi-pond.mp4",type:"video"},{name:"street art",url:"https://ankovan.drewdru.com/lfr/backgrounds/street-art.mp4",type:"video"},{name:"howl and sophie",url:"https://ankovan.drewdru.com/lfr/backgrounds/howl-and-sophie.mp4",type:"video"},{name:"cow",url:"https://ankovan.drewdru.com/lfr/backgrounds/cow.mp4",type:"video"},{name:"night pines",url:"https://ankovan.drewdru.com/lfr/backgrounds/night-pines.mp4",type:"video"},{name:"grass",url:"https://ankovan.drewdru.com/lfr/backgrounds/grass.mp4",type:"video"},{name:"puddle",url:"https://ankovan.drewdru.com/lfr/backgrounds/puddle.mp4",type:"video"},{name:"car drive",url:"https://ankovan.drewdru.com/lfr/backgrounds/car-drive.mp4",type:"video"},{name:"keyhole day",url:"https://ankovan.drewdru.com/lfr/backgrounds/keyhole-day.mp4",type:"video"},{name:"keyhole night",url:"https://ankovan.drewdru.com/lfr/backgrounds/keyhole-night.mp4",type:"video"},{name:"temple",url:"https://ankovan.drewdru.com/lfr/backgrounds/temple.mp4",type:"video"},{name:"vending machines",url:"https://ankovan.drewdru.com/lfr/backgrounds/vending-machines.mp4",type:"video"},{name:"sleeping cat",url:"https://ankovan.drewdru.com/lfr/backgrounds/sleeping-cat.gif",type:"image"}],currentBackground:{name:"a retro room",url:"https://ankovan.drewdru.com/lfr/backgrounds/retro-room.mp4",type:"video"},isOpenBackgroundChanger:!1}},methods:{changeBackground:function(e){var t=this;this.currentBackground=e,this.$emit("loaded",!1),"video"==e.type?this.$refs.video.src=e.url:setTimeout((function(){return t.$emit("loaded",!0)}),0)},loaded:function(){this.$emit("loaded",!0)}}},g=(n("a9c2"),n("6b0d")),O=n.n(g);const y=O()(v,[["render",h],["__scopeId","data-v-0e8e62dc"]]);var j=y,k={id:"wrapper-player"},M={id:"custom-player"},w={class:"row"},P={class:"row"},V=["muted"],C=["src"];function $(e,t,n,o,i,c){var u=Object(r["m"])("Volume");return Object(r["i"])(),Object(r["d"])("div",k,[Object(r["e"])("div",M,[Object(r["e"])("div",w,[Object(r["e"])("div",{ref:"name",id:"name"},Object(r["n"])(i.currentMusic.author)+" - "+Object(r["n"])(i.currentMusic.name),513)]),Object(r["e"])("div",P,[Object(r["q"])(Object(r["e"])("i",{onClick:t[0]||(t[0]=function(e){return c.repeatMusic()}),class:"material-icons player-button"},"repeat",512),[[r["p"],!i.isRepeated]]),Object(r["q"])(Object(r["e"])("i",{onClick:t[1]||(t[1]=function(e){return c.repeatMusic()}),class:"material-icons player-button"},"repeat_one",512),[[r["p"],i.isRepeated]]),Object(r["e"])("i",{onClick:t[2]||(t[2]=function(e){return c.prevMusic()}),class:"material-icons player-button",id:"button-prev"},"skip_previous"),Object(r["q"])(Object(r["e"])("i",{onClick:t[3]||(t[3]=function(e){return c.playMusic()}),class:"material-icons player-button"},"play_arrow",512),[[r["p"],!i.isPlayed]]),Object(r["q"])(Object(r["e"])("i",{onClick:t[4]||(t[4]=function(e){return c.pauseMusic()}),class:"material-icons player-button"},"pause",512),[[r["p"],i.isPlayed]]),Object(r["e"])("i",{onClick:t[5]||(t[5]=function(e){return c.nextMusic()}),class:"material-icons player-button",id:"button-next"},"skip_next"),Object(r["g"])(u,{onMute:c.mute,playerRef:"audio"},null,8,["onMute"]),Object(r["e"])("audio",{id:"html5-player",onEnded:t[6]||(t[6]=function(){return c.ended&&c.ended.apply(c,arguments)}),ref:"audio",controls:"",crossorigin:"",playsinline:"",muted:i.isMuted},[Object(r["e"])("source",{src:i.currentMusic.url,type:"audio/mp3"},null,8,C)],40,V)])])])}var _=["open"],T={class:"slidecontainer"};function x(e,t,n,o,i,c){return Object(r["i"])(),Object(r["d"])("details",{open:i.isOpenVolumeChanger,onMouseover:t[4]||(t[4]=function(e){return i.isOpenVolumeChanger=!0}),onMouseout:t[5]||(t[5]=function(e){return i.isOpenVolumeChanger=n.isAlwaysOpenVolume})},[Object(r["e"])("summary",null,[Object(r["q"])(Object(r["e"])("i",{onClick:t[0]||(t[0]=Object(r["r"])((function(e){return c.mute()}),["prevent"])),class:"material-icons player-button"},"volume_up",512),[[r["p"],!i.isMuted]]),Object(r["q"])(Object(r["e"])("i",{onClick:t[1]||(t[1]=Object(r["r"])((function(e){return c.mute()}),["prevent"])),class:"material-icons player-button"},"volume_off",512),[[r["p"],i.isMuted]])]),Object(r["e"])("div",T,[Object(r["q"])(Object(r["e"])("input",{onInput:t[2]||(t[2]=function(e){return c.changeVolume()}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.volume=e}),type:"range",min:"0",max:"1",step:"0.1",class:"slider",id:"myRange"},null,544),[[r["o"],i.volume]])])],40,_)}n("d3b7");var B={props:["playerRef","isAlwaysOpenVolume","defaultVolume"],data:function(){return{isOpenVolumeChanger:!1,volume:1,isMuted:!1,lastVolume:1}},mounted:function(){this.isOpenVolumeChanger=this.isAlwaysOpenVolume,void 0!=this.defaultVolume&&(this.volume=this.defaultVolume,this.lastVolume=this.volume,this.isMuted=0==this.defaultVolume)},methods:{changeVolume:function(){this.isMuted=!1,"[object Array]"===Object.prototype.toString.call(this.$parent.$refs[this.playerRef])?this.$parent.$refs[this.playerRef][0].volume=this.volume:this.$parent.$refs[this.playerRef].volume=this.volume,0==this.volume&&(this.isMuted=!0),this.$emit("mute",this.isMuted)},mute:function(){this.isMuted=!this.isMuted,this.$emit("mute",this.isMuted),this.isOpenVolumeChanger=this.isAlwaysOpenVolume,this.isMuted?(this.lastVolume=this.volume,this.volume=0):(this.volume=this.lastVolume,this.changeVolume())}}};n("0132");const I=O()(B,[["render",x]]);var L=I,R={components:{Volume:L},data:function(){return{playlist:[{name:"boo",author:"jinsang",url:"https://ankovan.drewdru.com/lfr/music/boo.mp3"},{name:"clock tower",author:"nohidea",url:"https://ankovan.drewdru.com/lfr/music/clock-tower.mp3"},{name:"before u go",author:"nohidea",url:"https://ankovan.drewdru.com/lfr/music/before-u-go.mp3"},{name:"calm",author:"idealism",url:"https://ankovan.drewdru.com/lfr/music/calm.mp3"},{name:"trees",author:"jinsang",url:"https://ankovan.drewdru.com/lfr/music/trees..mp3"},{name:"warm tea",author:"jinsang",url:"https://ankovan.drewdru.com/lfr/music/warm-tea..mp3"},{name:"who am i to you?",author:"nohidea",url:"https://ankovan.drewdru.com/lfr/music/who-am-i-to-you.mp3"}],currentMusic:{name:"boo",author:"jinsang",url:"https://ankovan.drewdru.com/lfr/music/boo.mp3"},currentMusicId:0,isPlayed:!1,isMuted:!1,isRepeated:!1,scrollLeftPosition:0}},mounted:function(){var e=this;setInterval((function(){var t=e.$refs.name.scrollWidth-e.$refs.name.clientWidth;e.scrollLeftPosition>=t-1?e.scrollLeftPosition=0:e.scrollLeftPosition=e.scrollLeftPosition+1,e.$refs.name.scroll({left:e.scrollLeftPosition})}),80)},methods:{nextMusic:function(){this.currentMusicId++,this.currentMusicId==this.playlist.length&&(this.currentMusicId=0),this.currentMusic=this.playlist[this.currentMusicId],this.$refs.audio.src=this.currentMusic.url,this.playMusic()},prevMusic:function(){this.currentMusicId--,this.currentMusicId<0&&(this.currentMusicId=this.playlist.length-1),this.currentMusic=this.playlist[this.currentMusicId],this.$refs.audio.src=this.currentMusic.url,this.$refs.audio.play()},ended:function(){this.isRepeated?this.playMusic():this.nextMusic()},playMusic:function(){this.$refs.audio.play(),this.isPlayed=!0},pauseMusic:function(){this.$refs.audio.pause(),this.isPlayed=!1},mute:function(e){this.isMuted=e},repeatMusic:function(){this.isRepeated=!this.isRepeated}}};n("85bc");const q=O()(R,[["render",$]]);var E=q,A=function(e){return Object(r["k"])("data-v-611f65af"),e=e(),Object(r["j"])(),e},D={id:"loading-overlay"},S=A((function(){return Object(r["e"])("div",{class:"lds-ring"},[Object(r["e"])("div"),Object(r["e"])("div"),Object(r["e"])("div"),Object(r["e"])("div")],-1)})),J=[S];function W(e,t){return Object(r["i"])(),Object(r["d"])("div",D,J)}n("b1b7");const U={},z=O()(U,[["render",W],["__scopeId","data-v-611f65af"]]);var F=z,G={class:"material-icons",id:"light-setter"},H={class:"material-icons",id:"dark-setter"};function K(e,t,n,o,i,c){return Object(r["i"])(),Object(r["d"])("div",{id:"theme",onClick:t[0]||(t[0]=function(e){return c.toggleTheme()})},[Object(r["q"])(Object(r["e"])("i",G,"light_mode",512),[[r["p"],!i.isDarkMode]]),Object(r["q"])(Object(r["e"])("i",H,"dark_mode",512),[[r["p"],i.isDarkMode]])])}var N={data:function(){return{isDarkMode:!1}},methods:{toggleTheme:function(){this.isDarkMode=!this.isDarkMode,this.$emit("toggleTheme",this.isDarkMode)}}};n("db61");const Q=O()(N,[["render",K],["__scopeId","data-v-1d6cb11e"]]);var X=Q,Y={id:"button-settings"},Z=["open"],ee=Object(r["e"])("summary",null,"add sound effects",-1),te={class:"sound-players"},ne=["onPlay","muted"],re=["src"];function oe(e,t,n,o,i,c){var u=Object(r["m"])("Volume");return Object(r["i"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",Y,[Object(r["e"])("details",{onClick:t[0]||(t[0]=Object(r["r"])((function(){}),["prevent"])),open:i.isOpenEffects,onMouseover:t[1]||(t[1]=function(e){return i.isOpenEffects=!0}),onMouseout:t[2]||(t[2]=function(e){return i.isOpenEffects=!1})},[ee,Object(r["e"])("div",null,[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(i.effects,(function(e){return Object(r["i"])(),Object(r["d"])("div",{key:e},[Object(r["f"])(Object(r["n"])(e.name)+" ",1),Object(r["g"])(u,{defaultVolume:"0",onMute:function(t){return c.mute(e.name,"effect-".concat(e.name),t)},playerRef:"effect-".concat(e.name),isAlwaysOpenVolume:!0,class:"effects"},null,8,["onMute","playerRef"])])})),128))])],40,Z)]),Object(r["e"])("div",te,[(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(i.effects,(function(e){return Object(r["i"])(),Object(r["d"])("audio",{ref_for:!0,ref:"effect-".concat(e.name),key:e,onPlay:function(t){return c.startPlay(e.name)},controls:"",loop:"",muted:e.isMuted},[Object(r["e"])("source",{src:e.url},null,8,re)],40,ne)})),128))])],64)}n("7db0");var ie={components:{Volume:L},data:function(){return{effects:[{isMuted:!0,isPlayed:!1,name:"rain",url:"https://ankovan.drewdru.com/lfr/effects/rain.mp3"},{isMuted:!0,isPlayed:!1,name:"wind",url:"https://ankovan.drewdru.com/lfr/effects/wind.mp3"},{isMuted:!0,isPlayed:!1,name:"fire",url:"https://ankovan.drewdru.com/lfr/effects/fire.mp3"}],isOpenEffects:!1}},methods:{startPlay:function(e){this.effects.find((function(t){return t.name==e})).isPlayed=!0},mute:function(e,t,n){this.effects.find((function(t){return t.name==e})).isMuted=n,n||this.effects.find((function(t){return t.name==e})).isPlayed||this.$refs[t][0].play()}}};n("41d5");const ce=O()(ie,[["render",oe]]);var ue=ce,se={components:{Background:j,Player:E,Loading:F,Theme:X,Effects:ue},data:function(){return{isLoading:!1,theme:{body:"rgb(240, 240, 240, 0.75)",bodyText:"rgb(85, 85, 85)"},themes:{dark:{body:"rgb(85, 85, 85, 0.75)",bodyText:"rgb(240, 240, 240)"},light:{body:"rgb(240, 240, 240, 0.75)",bodyText:"rgb(85, 85, 85)"}}}},methods:{loading:function(e){this.isLoading=!e},toggleTheme:function(e){e?(this.theme=this.themes.dark,document.body.style.backgroundColor=this.themes.dark.body):(this.theme=this.themes.light,document.body.style.backgroundColor=this.themes.light.body)}}};n("9119");const ae=O()(se,[["render",o]]);var de=ae,le=n("666c");n("373e");Object(r["b"])(de).use(le["a"],{plyr:{controls:["play-large","play","mute","volume","captions","pip","airplay","fullscreen"],settings:["speed","loop"]}}).mount("#app")},"5ce3":function(e,t,n){},"85bc":function(e,t,n){"use strict";n("1260")},9119:function(e,t,n){"use strict";n("4864")},a9c2:function(e,t,n){"use strict";n("c348")},b1b7:function(e,t,n){"use strict";n("c369")},c348:function(e,t,n){},c369:function(e,t,n){},db61:function(e,t,n){"use strict";n("5452")},feae:function(e,t,n){}});
//# sourceMappingURL=app.ba6dbb30.js.map