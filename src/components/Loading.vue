<template>
  <div class="loading">
    <Spinner class="spinner" />
    <p class="text">
      Определение стиля мышления........... ....
      ...................................................
    </p>
  </div>
</template>

<script>
import Spinner from './Spinner.vue';
export default { components: { Spinner } };
</script>

<style scoped>
.text {
  max-width: 100%;
  overflow-wrap: break-word;
  font-family: 'PT Serif';
  font-size: 14px;
  text-align: center;
  line-height: 19px;
  letter-spacing: 0.05em;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.spinner {
  margin-bottom: 28px;
}
</style>
