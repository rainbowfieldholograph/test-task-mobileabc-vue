<template>
  <ul>
    <li class="item">
      <router-link @click="onClickLink" class="link" :to="{ path: '/' }">Главная</router-link>
    </li>
    <li class="item">
      <router-link @click="onClickLink" class="link" :to="{ path: '/' }"
        >Информация о тесте</router-link
      >
    </li>
    <li class="item">
      <router-link @click="onClickLink" class="link" :to="{ path: '/quiz' }"
        >Пройти тест</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    onClickLink: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.item {
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
}
.link:is(:hover, :focus-visible) {
  color: var(--color-primary);
}
</style>
