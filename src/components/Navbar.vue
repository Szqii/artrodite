<template>
    <div class="row w-100" style="padding: 16px 100px; margin-bottom: 100px;">
        <div class="logo col-3" style="cursor: pointer;">
            <router-link to="/">
                <img src="../assets/navbar/logo.svg" alt="logo">
            </router-link>
        </div>
        <div class="router-container col-9 text-end">
            <router-link class="hover-underline-animation ms-4" to="/"> <i class="fa fa-circle" /> Anasayfa</router-link>
            <router-link class="hover-underline-animation ms-4" to="/projects"><i class="fa fa-circle" /> Projeler</router-link>
            <router-link class="hover-underline-animation ms-4" to="/studio"><i class="fa fa-circle" /> Stüdyo</router-link>
            <router-link class="hover-underline-animation ms-4" to="/contact"><i class="fa fa-circle" /> İletişim</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 a{

     font-weight: 500;
     padding: 5px 10px;
 }

i {
    opacity: 0;
    font-size: .3rem;
    margin-right: 5px;
}

.router-link-active,
.router-link-exact-active {
    i {
        opacity: 1;
    }
}
</style>