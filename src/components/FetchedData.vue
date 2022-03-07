<template>
  <div class="box">
    <a class="data-text link" :href="data.url"> Имя: {{ data.name }} </a>
    <p>
      Дата рождения: <span class="data-text">{{ data.birth_year }}</span>
    </p>
    <p>
      Цвет глаз: <span class="data-text">{{ data.eye_color }}</span>
    </p>
    <p>
      Цвет кожи: <span class="data-text">{{ data.skin_color }}</span>
    </p>
    <p>
      Пол: <span class="data-text">{{ data.gender }}</span>
    </p>
    <p>
      Рост / вес: <span class="data-text">{{ data.height }} / {{ data.mass }}</span>
    </p>
    <p>Фильмы:</p>
    <ul v-for="(film, index) in data.films" v-bind:key="index">
      <li>
        <a :href="film" class="data-text link">- {{ film }}</a>
      </li>
    </ul>
    <p>Космические корабли:</p>
    <ul v-for="(starship, index) in data.starships" v-bind:key="index">
      <li>
        <a :href="starship" class="data-text link">- {{ starship }}</a>
      </li>
    </ul>
    <p>Транспортные средства</p>
    <ul v-for="(vehicle, index) in data.vehicles" v-bind:key="index">
      <li>
        <a :href="vehicle" class="data-text link">- {{ vehicle }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.box {
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 50px;
  border: 1px solid var(--color-primary);
  padding: 1rem;
  color: white;
}
.data-text {
  color: #3bde7c;
}
.link:is(:hover, :focus) {
  color: var(--color-primary);
}
</style>
