<template>
  <header class="header">
    <nav class="nav">
      <NavItems v-show="!mobile" class="menu-open-items" />
      <button @click="toggleMobileNav" v-show="mobile" class="open-button">
        <img class="open-icon" src="../assets/menu-open.svg" alt="open menu" />
      </button>
      <div class="menu" v-show="mobileNav">
        <button class="close-button" @click="toggleMobileNav">
          <img src="../assets/menu-close.svg" alt="close menu" />
        </button>
        <NavItems class="menu-items" :onClickLink="toggleMobileNav" />
      </div>
    </nav>
    <div
      v-if="hasImage || title"
      class="side-content"
      :class="{ 'side-content-mobile': mobile }"
    >
      <img v-if="hasImage" class="image" src="../assets/brain.png" alt="brain" />
      <p v-if="title" class="title">{{ title }}</p>
    </div>
  </header>
</template>

<script>
import NavItems from './NavItems.vue';
export default {
  props: {
    hasImage: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      document.body.classList.toggle('_lock');
    },
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
  components: { NavItems },
};
</script>

<style scoped>
.header {
  background-color: #181818;
  height: var(--header-height);
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  display: flex;
}
.nav {
  height: 100%;
  display: flex;
  align-items: center;
}
.menu-open-items {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;
}
.menu {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #181818;
  left: 0;
  top: 0;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 18px;
  z-index: 10;
  overflow: auto;
}
.menu-items {
  display: flex;
  flex-direction: column;
  gap: 27px;
}
.open-button {
  background-color: transparent;
}
.close-button {
  background-color: transparent;
  margin-left: auto;
  display: block;
  margin-bottom: 64px;
}
.side-content {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: auto;
}
.side-content-mobile {
  margin-left: 9px;
}
.image {
  width: 48px;
}
.title {
  color: var(--color-primary);
  font-family: 'Yeseva One';
  font-size: 12px;
  text-transform: uppercase;
}
</style>
