<template>
  <p class="time">{{ displayMinutes }}:{{ diplaySeconds }} МИНУТ</p>
</template>

<script>
import router from '../router/router';

export default {
  props: {
    endInSeconds: {
      type: Number,
      required: true,
    },
  },
  data: () => ({ displayMinutes: 0, diplaySeconds: 0, time: null }),
  mounted() {
    this.showRemaining();
    this.time = this.endInSeconds;
    this.setTime(this.time);
  },
  methods: {
    setTime(time) {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60);
      this.displayMinutes = min < 10 ? `0${min}` : `${min}`;
      this.diplaySeconds = sec < 10 ? `0${sec}` : `${sec}`;
    },
    showRemaining() {
      const timer = setInterval(() => {
        this.time -= 1;
        this.setTime(this.time);
        if (this.time <= 0) {
          clearInterval(timer);
          router.push('/');
          return;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.time {
  font-family: 'PT Serif';
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #3bde7c;
}
</style>
