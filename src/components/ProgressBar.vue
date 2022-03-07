<template>
  <div class="progress-bar" :style="{ '--value': `${value}%` }" />
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.progress-bar {
  width: 100%;
  position: relative;
  background: #f2f3f3;
  opacity: 0.59;
  height: 11px;
  border-radius: 10.5px;
  overflow: hidden;
}
.progress-bar::after {
  content: '';
  position: absolute;
  width: var(--value);
  height: 100%;
  background: #3bde7c;
  top: 0;
  left: 0;
}
</style>
