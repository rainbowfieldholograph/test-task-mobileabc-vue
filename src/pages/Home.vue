<template>
  <Header />
  <main class="home">
    <BlueBrain />
    <Quote />
    <Advices />
    <Result />
  </main>
</template>

<script>
import Welcome from '../sections/Welcome.vue';
import Quote from '../sections/Quote.vue';
import Advices from '../sections/Advices.vue';
import Result from '../sections/Result.vue';
import Header from '../components/Header.vue';
export default { components: { BlueBrain: Welcome, Quote, Advices, Result, Header } };
</script>
