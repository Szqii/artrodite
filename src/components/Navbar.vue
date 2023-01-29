<template>
    <div class="navbar">

        <div class="logo">
            <img src="../assets/navbar/logo.svg" alt="logo">
        </div>
        <div class="router-container">
            <router-link class="hover-underline-animation" to="/">Home</router-link>
            <router-link class="hover-underline-animation" to="/projects">Projects</router-link>
            <router-link class="hover-underline-animation" to="/studio">Studio</router-link>
            <router-link class="hover-underline-animation" to="/contact">Contact</router-link>
        </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 100px;
}

a{
    margin-right: 70px;
    font-weight: 500;
    padding: 5px 10px;
    transition: .2s all ease-in-out;
    border-left: 2px solid transparent;

    &:last-child{
        margin-right: 0;
    }
}

.router-link-active, .router-link-exact-active{
    border-color: black;
}
</style>