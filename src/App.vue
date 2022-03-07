<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
ul li {
  list-style: none;
}
button {
  cursor: pointer;
}
img {
  width: 100%;
  height: auto;
}
.app {
  min-height: 100vh;
  color: #fff;
  font-size: 18px;
  overflow: hidden;

  --color-primary: #ffc700;
  --header-height: 46px;
  --first-section-height: calc(100vh - var(--header-height));
}
.text-important-color {
  color: var(--color-primary);
  font-weight: bold;
}
.text-important-upper {
  font-weight: bold;
  text-transform: uppercase;
}
.text-important {
  font-weight: bold;
}
body._lock {
  overflow: hidden;
}
</style>
