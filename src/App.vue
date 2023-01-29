<template>
  <div>
    <Navbar />
    <router-view />
    <div @click="scrollToTop" class="scroll-to-top-button">
      <i class="fa-solid fa-chevron-up"></i>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss">
@import url('./css/_animation.scss');

@font-face {
  font-family: "Satoshi-Variable";
  src: local("Satoshi-Variable"),
    url(./fonts/Satoshi-Variable.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Satoshi-Variable";
  background: #F3F3F3;
  font-weight: 300;
}

a {
  color: #000;
  text-decoration: none;
}

.scroll-to-top-button {
  position: fixed;
  bottom: 50px;
  right: 50px;
  color: #000;
  cursor: pointer;
  font-size: 24px;
}
</style>
