<template>
  <section class="wrapper" aria-label="Quote">
    <div class="overlay">
      <blockquote class="blockquote">
        <p class="text">
          Профессиональный IQ-тест позволяет не только определить коэффициент вашего
          интеллекта, но и выработать список рекомендаций для повышения этого показателя.
        </p>
      </blockquote>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  background-image: url(../assets/shine-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  --blockquote-size: 100px;
}
.overlay {
  min-height: 70vh;
  width: 100%;
  background: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 18px;
  font-family: 'Yeseva One';
  font-weight: 400;
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 0 36px;
  line-height: 23px;
  letter-spacing: 0.05em;
}
.blockquote::before {
  content: '\201c';
  font-size: var(--blockquote-size);
}
.blockquote::after {
  content: '\201d';
  display: inline-block;
  width: 100%;
  text-align: right;
  font-size: var(--blockquote-size);
}
</style>
