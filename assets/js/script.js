const {createApp} = Vue;

createApp({

  data(){
    return{
      text: 'hello word',
      img: '<img src="assets/img/01.webp" alt="">',
    }
  }

}).mount('#app')