<template>
  <div class="answers-colors">
    <AnswerColor
      v-for="(answer, index) in answers"
      :color="answer"
      :key="index + answer"
      :onChangeInput="onChangeInput"
    />
  </div>
</template>

<script>
import AnswerColor from './AnswerColor.vue';
export default {
  props: {
    answers: {
      type: Array,
      required: true,
    },
    onChangeInput: {
      type: Function,
      required: true,
    },
  },
  components: { AnswerColor },
};
</script>

<style scoped>
.answers-colors {
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
