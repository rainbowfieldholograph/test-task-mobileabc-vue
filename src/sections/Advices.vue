<template>
  <section aria-label="Advices">
    <Container class="content">
      <p class="text">
        Также по результатам теста
        <span class="text-important-upper">вы получите</span> подробные
        <span class="text-important-upper">советы</span> по определению наиболее перспективной
        <span class="text-important-upper">для вашего типа</span> интеллекта
        <span class="text-important-upper">сферы деятельности</span>, которая принесет вам
        скорейший финансовый результат.
      </p>
      <img class="image" src="../assets/brain-colored.png" alt="brain-colored" />
      <div class="button-wrapper">
        <ButtonLink class="button" />
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../components/Container.vue';
import ButtonLink from '../components/ButtonLink.vue';
export default { components: { Container, ButtonLink } };
</script>

<style scoped>
.content {
  min-height: 560px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.text {
  font-family: 'PT Serif';
  font-weight: 400;
  font-size: 16px;
  color: #272727;
  width: 100%;
  margin-bottom: 30px;
  line-height: 24px;
  letter-spacing: 0.05em;
}
.image {
  margin-bottom: 30px;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
