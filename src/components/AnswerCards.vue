<template>
  <div class="answers-cards">
    <AnswerCard
      v-for="(answer, index) in answers"
      :text="answer"
      :key="index + answer"
      :onChangeInput="onChangeInput"
    />
  </div>
</template>

<script>
import AnswerCard from './AnswerCard.vue';
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
  components: { AnswerCard },
};
</script>

<style scoped>
.answers-cards {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
