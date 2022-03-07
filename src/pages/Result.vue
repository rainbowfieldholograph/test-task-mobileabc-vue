<template>
  <Header title="Готово!" />
  <main class="wrapper">
    <Container class="content">
      <p class="head-text">Ваш результат рассчитан:</p>
      <p class="head-description">
        <span class="text-underline">Вы относитесь к 3%</span>
        респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в
        большую или меньшую сторону!
      </p>
      <p class="main-text">Скорее получите свой результат!</p>
      <article class="article">
        <p class="article-text">
          В целях защиты персональных данных результат теста, их подробная интерпретация и
          рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного
          телефона
        </p>
      </article>
      <p class="call-text">Звоните скорее, запись доступна всего</p>
      <Timer class="call-time" :endInSeconds="600" />
      <img class="bg-lightning bg-lightning-1" src="../assets/lightning.png" alt="lightning" />
      <img class="bg-lightning bg-lightning-2" src="../assets/lightning.png" alt="lightning" />
      <button @click="fetchData" class="button">
        <img class="image" width="30px" height="30px" src="../assets/phone.svg" alt="phone" />
        <p class="button-text">Позвонить и прослушать результат</p>
      </button>
      <FetchedData v-if="fetchedData" :data="fetchedData" />
    </Container>
    <footer class="footer">
      <p class="footer-text">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI
        DECLARATI CA AVETI 18 ANI IMPLINITI,
      </p>
    </footer>
  </main>
</template>

<script>
import Container from '../components/Container.vue';
import Header from '../components/Header.vue';
import axios from 'axios';
import Timer from '../components/Timer.vue';
import FetchedData from '../components/FetchedData.vue';
export default {
  components: { Container, Header, Timer, FetchedData },
  data() {
    return {
      fetchedData: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://swapi.dev/api/people/1/');
        this.fetchedData = response.data;
        console.log(this.fetchedData);
      } catch (error) {
        alert('Ошибка');
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-image: url(../assets/stars-bg.png);
  position: relative;
}
.content {
  min-height: calc(var(--first-section-height) - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 100px;
}
.head-text {
  margin-top: 20px;
  font-family: 'PT Serif';
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 0.1em;
}
.head-description {
  font-family: 'PT Serif';
  font-size: 14px;
  margin-bottom: 22px;
}
.main-text {
  font-family: 'PT Serif';
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: #3bde7c;
  margin-bottom: 12px;
  letter-spacing: 0.1em;
}
.article {
  background: #1c2741;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 15px;
  max-width: 600px;
}
.article-text {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 8px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.call-text {
  font-family: 'PT Serif';
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.1em;
  color: #3bde7c;
  margin-bottom: 5px;
}
.call-time {
  margin-bottom: 6px;
}
.button {
  background: #eb1b00;
  border-radius: 5px;
  padding-top: 25px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  gap: 18px;
  transition: all 0.2s ease;
  z-index: 1;
}
.button:focus-visible,
.button:hover {
  opacity: 0.9;
  transform: scale(1.02);
}
.button-text {
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: left;
}
.image {
  width: 30px;
  min-width: 30px;
  height: 30px;
}
.text-underline {
  text-decoration-line: underline;
}
.footer {
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
  text-align: center;
}
.footer-text {
  margin-top: auto;
  font-family: 'Roboto';
  font-size: 7px;
  line-height: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.bg-lightning {
  position: absolute;
  max-width: 165px;
  width: 100%;
}
.bg-lightning-1 {
  top: 40%;
  left: -40px;
  transform: rotate(-30deg);
}
.bg-lightning-2 {
  top: 52%;
  right: 0;
  transform: rotate(180deg);
}
@media (min-width: 1000px) {
  .bg-lightning {
    display: none;
  }
}
</style>
