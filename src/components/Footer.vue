<template>
    <div class="px-0 w-100 mt-100 px-md-100">
        <div class="border-top border-bottom border-dark w-100 row m-0" style="height: 200px;">
            <div class="col-3 p-0 d-flex">
                <router-link to="/" class="align-self-center">
                    <img src="../assets/navbar/logo.svg" alt="artrodite-logo">
                </router-link>
            </div>
            <div class="col-9 row m-0 p-0 justify-content-between" style="font-size: 16px;">
                <div class="col-5 d-flex align-items-center justify-content-between">
                    <router-link class="hover-underline-animation" to="/"> Anasayfa</router-link>
                    <router-link class="hover-underline-animation" to="/projects">Projeler</router-link>
                    <router-link class="hover-underline-animation" to="/studio"> Stüdyo</router-link>
                    <router-link class="hover-underline-animation" to="/team"> Takım</router-link>
                    <router-link class="hover-underline-animation" to="/contact"> İletişim</router-link>
                </div>
                <div class="col-5 d-flex align-items-center justify-content-between">
                    <a href="https://www.instagram.com/artrodite_studio/" class="hover-underline-animation" target="_blank"> Instagram <i class="fa fa-arrow-up"></i></a>
                    <a href="https://www.linkedin.com/company/artrodite/" class="hover-underline-animation" target="_blank">LinkedIn <i class="fa fa-arrow-up"></i></a>
                    <a href="https://www.twitter.com/artrodite//" class="hover-underline-animation" target="_blank">Twitter <i class="fa fa-arrow-up"></i></a>
                    <a href="mailto:artrodite@gmail.com" class="hover-underline-animation" target="_blank">Email <i class="fa fa-arrow-up"></i></a>
                </div>
            </div>
        </div>
        <div style="height: 50px;">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a {

    font-weight: 500;
    padding: 5px 0;
}

i{
    font-size: smaller;
    transform: rotate(45deg);
}
</style>