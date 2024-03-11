const {createApp} = Vue;

createApp({

  data(){
    return{
      text: 'hello word',
      img: '<img src="assets/img/01.webp" alt="">',
      time: '00:00:00',
    };
  },

  methods:{
    clock(){
      const date = new Date();
      const h = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
      const m = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
      const s = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
      this.time = `${h}:${m}:${s}`;
    },
    repetClock(){
      setInterval(() => this.clock(), 1000);
    },
  },

  mounted(){
    this.clock();
    this.repetClock();
  }
}).mount('#app')