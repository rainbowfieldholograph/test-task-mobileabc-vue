<template>
  <label class="label">
    <input v-on:change="onChangeInput" required class="input" type="radio" name="color" />
    <div :style="{ backgroundColor: color }" class="background" />
  </label>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    onChangeInput: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.label {
  aspect-ratio: 1 / 1;
  cursor: pointer;
  position: relative;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f2f3f3;
}
.input {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.input:is(:focus, :hover) ~ .background {
  opacity: 0.8;
}
.input:checked ~ .background {
  border: 5px solid var(--color-primary);
  opacity: 1;
}
</style>
