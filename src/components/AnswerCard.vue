<template>
  <label class="label">
    <input v-on:change="onChangeInput" required class="input" type="radio" name="answer" />
    <div class="background" />
    <span class="text">
      {{ text }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    text: {
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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  width: 41px;
  height: 41px;
  min-width: 41px;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #ffffff;
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
.input:is(:focus-visible, :hover) ~ .text {
  text-decoration: underline;
  transform: scale(1.1);
}
.input:checked ~ .background {
  border: 5px solid var(--color-primary);
}
.text {
  font-family: 'PT Serif';
  font-weight: 400;
  font-size: 20px;
  color: #0d0c11;
  user-select: none;
  z-index: 1;
}
</style>
