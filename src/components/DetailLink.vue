<template>
  <router-link class="link" :to="{ path: '/quiz' }">
    <img class="image" width="16px" height="16px" src="../assets/arrow-up.svg" alt="up" />
    <p class="text">Подробнее</p>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  transition: all 200ms ease;
}
.link:is(:focus, :hover) {
  transform: scale(1.2);
}
.text {
  font-weight: 400;
  font-family: 'PT Serif';
  font-size: 8px;
  letter-spacing: 0.05em;
}
.image {
  width: 16px;
  height: 16px;
}
@media (min-width: 500px) {
  .text {
    font-size: 12px;
  }
  .image {
    width: 20px;
    height: 20px;
  }
}
</style>
