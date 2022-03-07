<template>
  <button class="button">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Далее',
    },
  },
};
</script>

<style scoped>
.button {
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
.button:not(:disabled):is(:focus-visible, :hover) {
  opacity: 0.7;
  outline-offset: 0.25em;
  transform: scale(1.05);
}
.button:disabled {
  background-color: #dadada;
  color: #8e8e8e;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: unset;
}
</style>
