<template>
  <router-link :to="{ path: linkTo }" class="button-link">{{ title }}</router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'ПРОЙТИ ТЕСТ',
    },
    linkTo: {
      type: String,
      default: '/quiz',
    },
  },
};
</script>

<style scoped>
.button-link {
  display: inline-block;
  padding: 10px 30px;
  background-color: var(--color-primary);
  border-radius: 50px;
  font-family: 'Merriweather';
  font-weight: 700;
  font-size: 14px;
  color: #0d0c11;
  transition: all 250ms ease;
}
.button-link:is(:focus, :hover) {
  opacity: 0.7;
  outline-offset: 0.25em;
  transform: scale(1.05);
}
</style>
