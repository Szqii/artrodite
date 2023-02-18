<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" 
        enter-active-class="animate__animated animate__fadeInLeftBig animate__faster"
        leave-active-class="animate__animated animate__fadeOutRightBig animate__faster">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <div @click="scrollToTop" class="scroll-to-top-button slide-up-down" >
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
@import './css/_animation.scss';
@import '~bootstrap/dist/css/bootstrap.css';


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
  overflow-x: hidden;
  font-size: 20px;
}

.makeItBlack {
    color: black;
    font-weight: 500;
}

::selection {
  color: #f3f3f3;
  background: #070707;
}

/* ::-webkit-scrollbar {
  width: 5px;
  border-radius: 16px;
}
::-webkit-scrollbar-track {
  background: #f3f3f3;
}
::-webkit-scrollbar-thumb {
  background: #070707;
}
::-webkit-scrollbar-thumb:hover {
  background: #070707;
} */

::-webkit-scrollbar-track {
  background-color: #F3F3F3;
}

::-webkit-scrollbar {
  width: 2px;
  background-color: #F3F3F3;
}

::-webkit-scrollbar-thumb {
  background-color: #070707;
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
