<template>
  <label class="label">
    <input v-on:change="onChangeInput" required class="input" type="radio" name="answer" />
    <div class="background" />
    <div class="radio" />
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
  padding: 15px 35px;
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
  opacity: 0.15;
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
  background-color: var(--color-primary);
}
.radio {
  min-width: 20px;
  width: 20px;
  height: 20px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  margin-right: 39px;
  z-index: 1;
}
.radio::after {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  background-color: #2950c2;
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
}
.input:checked ~ .radio::after {
  transform: scale(1);
}
.input:checked ~ .radio {
  border-color: #0d0c11;
}
.input:checked ~ .background {
  background-color: var(--color-primary);
  opacity: 1;
}
.input:checked ~ .text {
  color: #0d0c11;
}
.text {
  font-family: 'PT Serif';
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  z-index: 1;
  letter-spacing: 0.05em;
}
</style>
