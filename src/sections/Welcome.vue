<template>
  <section class="wrapper" aria-label="Accurate and Fast IQ Test ">
    <Container class="content">
      <p class="pretitle">Пройдите точный и быстрый</p>
      <h1 class="title">тест на определение IQ</h1>
      <img class="image" src="../assets/brain.png" alt="blue-brain" />
      <ButtonLink class="button" />
      <span class="description">
        <p class="text-important-color">
          И получите рекомендации по развитию своего интеллекта
        </p>
        <p>и улучшению финансового благосостояния и личной жизни</p>
      </span>
      <DetailLink />
    </Container>
  </section>
</template>

<script>
import ButtonLink from '../components/ButtonLink.vue';
import DetailLink from '../components/DetailLink.vue';
import Container from '../components/Container.vue';
export default {
  components: { ButtonLink, DetailLink, Container },
};
</script>

<style scoped>
.wrapper {
  background-image: url(../assets/stars-bg.png);
  background-repeat: repeat;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: var(--first-section-height);
  padding-top: 27px;
  padding-bottom: 11px;
  text-align: center;
}
.pretitle {
  font-weight: 400;
  font-family: 'PT Serif';
  margin-bottom: 18px;
  letter-spacing: 0.05em;
}
.title {
  font-size: 30px;
  color: var(--color-primary);
  text-transform: uppercase;
  font-family: 'Yeseva One';
  font-weight: 400;
  margin-bottom: 9px;
  letter-spacing: 0.03em;
}
.image {
  margin-bottom: 15px;
  max-width: 304px;
}
.button {
  margin-bottom: 22px;
}
.description {
  font-family: 'PT Serif';
  font-weight: 400;
  margin-bottom: 15px;
  letter-spacing: 0.05em;
  line-height: 19px;
}
</style>
