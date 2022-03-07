<template>
  <div class="answers-text">
    <AnswerText
      v-for="(answer, index) in answers"
      :text="answer"
      :key="index + answer"
      :onChangeInput="onChangeInput"
    />
  </div>
</template>

<script>
import AnswerText from './AnswerText.vue';
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
  components: { AnswerText },
};
</script>

<style scoped>
.answers-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
