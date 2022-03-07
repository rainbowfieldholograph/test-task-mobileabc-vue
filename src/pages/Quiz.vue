<template>
  <Header :hasImage="true" :title="'тест на определение IQ'" />
  <main class="wrapper">
    <Container class="content">
      <div class="indent progress-bar-wrapper">
        <ProgressBar :value="range" />
      </div>
      <div class="indent">
        <p class="title">{{ questions[currentState].title }}</p>
      </div>
      <div v-if="questions[currentState].image" class="indent image-wrapper">
        <img class="image" :src="questions[currentState].image" alt="question image" />
      </div>
      <div v-if="questions[currentState].type === 'loading'" class="indent loading-wrapper">
        <Loading />
      </div>
      <form
        v-if="questions[currentState].type !== 'loading'"
        class="form"
        @submit.prevent="nextQuestion"
      >
        <AnswerTexts
          :answers="questions[currentState].answers"
          v-if="questions[currentState].type === 'text'"
          :onChangeInput="enableButton"
        />
        <div v-if="questions[currentState].type === 'colors'" class="indent">
          <AnswerColors
            :answers="questions[currentState].answers"
            :onChangeInput="enableButton"
          />
        </div>
        <AnswerCards
          :answers="questions[currentState].answers"
          v-if="questions[currentState].type === 'cards'"
          :onChangeInput="enableButton"
        />
        <div class="button-wrapper">
          <Button :disabled="isButtonDisabled" type="submit" />
        </div>
      </form>
    </Container>
  </main>
</template>

<script>
import Container from '../components/Container.vue';
import Button from '../components/Button.vue';
import ProgressBar from '../components/ProgressBar.vue';
import AnswerColors from '../components/AnswerColors.vue';
import xdImage from '../assets/xd.png';
import rentvImage from '../assets/rentv.png';
import starImage from '../assets/star.png';
import AnswerCards from '../components/AnswerCards.vue';
import AnswerTexts from '../components/AnswerTexts.vue';
import Loading from '../components/Loading.vue';
import Header from '../components/Header.vue';
import router from '../router/router';
export default {
  data() {
    return {
      isButtonDisabled: true,
      currentState: 0,
      range: 0,
      questions: [
        {
          title: 'Ваш пол:',
          type: 'text',
          answers: ['Мужчина', 'Женщина'],
        },
        {
          title: 'Укажите ваш возраст:',
          type: 'text',
          answers: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'],
        },
        {
          title: 'Выберите лишнее:',
          type: 'text',
          answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
        },
        {
          title: 'Продолжите числовой ряд: 18 20 24 34',
          type: 'text',
          answers: ['62', '48', '74', '57', '60', '77'],
        },
        {
          title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
          type: 'colors',
          answers: [
            '#A8A8A8',
            '#0000A9',
            '#00A701',
            '#F60100',
            '#FDFF19',
            '#A95403',
            '#000000',
            '#850068',
            '#46B3AC',
          ],
        },
        {
          title:
            'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
          type: 'colors',
          answers: [
            '#A8A8A8',
            '#46B2AC',
            '#A95403',
            '#00A701',
            '#000000',
            '#F60100',
            '#850068',
            '#FDFF19',
            '#0000A9',
          ],
        },
        {
          title: 'Какой из городов лишний?',
          type: 'text',
          answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
        },
        {
          title: 'Выберите правильную фигуру из четырёх пронумерованных.',
          type: 'cards',
          image: xdImage,
          answers: ['1', '2', '3', '4'],
        },
        {
          title: 'Вам привычнее и важнее:',
          type: 'text',
          answers: [
            'Наслаждаться каждой минутой проведенного времени',
            'Быть устремленными мыслями в будущее',
            'Учитывать в ежедневной практике прошлый опыт',
          ],
        },
        {
          title:
            'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
          type: 'text',
          image: rentvImage,
          answers: [
            'Оно остроконечное',
            'Оно устойчиво',
            'Оно-находится в состоянии равновесия',
          ],
        },
        {
          title: 'Вставьте подходящее число',
          type: 'cards',
          image: starImage,
          answers: ['34', '36', '53', '44', '66', '42'],
        },
        {
          title: 'Обработка результатов',
          type: 'loading',
        },
      ],
    };
  },
  methods: {
    nextQuestion() {
      const questionsCount = this.questions.filter((item) => item.type !== 'loading').length;
      if (this.currentState < questionsCount - 1) {
        this.currentState += 1;
        this.isButtonDisabled = true;
        this.range = this.range + 100 / questionsCount;
      } else if (this.questions[this.currentState + 1].type === 'loading') {
        this.range = 100;
        this.currentState += 1;
        setTimeout(() => {
          router.push('/result');
        }, 1500);
      }
    },
    enableButton() {
      this.isButtonDisabled = false;
    },
  },
  components: {
    Container,
    Button,
    ProgressBar,
    AnswerColors,
    AnswerCards,
    AnswerTexts,
    Loading,
    Header,
  },
};
</script>

<style scoped>
.wrapper {
  background-image: url(../assets/stars-bg.png);
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: var(--first-section-height);
  padding: 0 !important;
}
.progress-bar-wrapper {
  margin-top: 17px;
  margin-bottom: auto;
}
.title {
  text-align: center;
  margin-top: 17px;
  margin-bottom: 30px;
  font-family: 'PT Serif';
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
}
.form {
  margin-bottom: auto;
}
.button-wrapper {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.indent {
  margin-left: 30px;
  margin-right: 30px;
}
.image-wrapper {
  margin-bottom: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: clamp(180px, 50%, 300px);
}
.loading-wrapper {
  margin-bottom: auto;
}
</style>
