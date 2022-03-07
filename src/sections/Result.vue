<template>
  <section aria-label="Result" class="wrapper">
    <Container class="content">
      <p class="head-text">
        Прохождение теста займет у вас не более
        <span class="text-important-color">12 минут</span>, а его
        <span class="text-important">результаты</span> вы сможете
        <span class="text-important-color">использовать всю жизнь.</span>
      </p>
      <img class="bg-lightning bg-lightning-1" src="../assets/lightning.png" alt="lightning" />
      <article class="article">
        <p class="article-text">
          Профессиональная интерпретация и детально проработанные рекомендации позволят вам
          качественно изменить все аспекты своей жизни: от финансового до любовного.
        </p>
      </article>
      <img class="bg-lightning bg-lightning-2" src="../assets/lightning.png" alt="lightning" />
      <ButtonLink class="button" />
      <footer class="ps">
        <p>© 2019</p>
      </footer>
    </Container>
  </section>
</template>

<script>
import Container from '../components/Container.vue';
import ButtonLink from '../components/ButtonLink.vue';
export default {
  components: {
    Container,
    ButtonLink,
  },
};
</script>

<style scoped>
.wrapper {
  background-image: url(../assets/stars-bg.png);
  position: relative;
}
.content {
  min-height: 100vh;
  font-family: 'Merriweather';
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
}
.head-text {
  margin-bottom: 14px;
  margin-top: auto;
  line-height: 20px;
  letter-spacing: 0.05em;
}
.article {
  background-color: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  padding: 30px 15px;
  margin-bottom: 33px;
}
.article-text {
  color: #181818;
  line-height: 23px;
  letter-spacing: 0.05em;
}
.button {
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50px;
  color: #ffffff;
}
.ps {
  padding-top: 50px;
  margin-top: auto;
  padding-bottom: 13px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
}
.bg-lightning {
  position: absolute;
  max-width: 165px;
  width: 100%;
}
.bg-lightning-1 {
  top: 40%;
  left: -10px;
  transform: rotate(-10deg);
}
.bg-lightning-2 {
  top: 10%;
  right: 0;
  transform: scaleX(-1);
}
@media (min-width: 1000px) {
  .bg-lightning {
    display: none;
  }
}
</style>
