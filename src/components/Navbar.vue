<template>
    <div class="navbar">

        <div class="logo">
            <router-link to="/">
                <img src="../assets/navbar/logo.svg" alt="logo">
            </router-link>
        </div>
        <div class="router-container">
            <router-link class="hover-underline-animation" to="/"> <i class="fa fa-circle"/> Anasayfa</router-link>
            <router-link class="hover-underline-animation" to="/projects"><i class="fa fa-circle" /> Projeler</router-link>
            <router-link class="hover-underline-animation" to="/studio"><i class="fa fa-circle" /> Stüdyo</router-link>
            <router-link class="hover-underline-animation" to="/contact"><i class="fa fa-circle" /> İletişim</router-link>
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

.router-container{
    display: flex;
    
}

a{
    margin-right: 70px;
    font-weight: 500;
    padding: 5px 10px;
    transition: .2s all ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child{
        margin-right: 0;
    }
}

i{
    opacity: 0;
    font-size: .3rem;
    margin-right: 5px;
}

.router-link-active, .router-link-exact-active{
    i{
        opacity: 1;
    }
}
</style>