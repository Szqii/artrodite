<template>
        <div class="w-100 d-flex align-items-start justify-content-center" style="height: 100vh;">
            <div class="d-flex flex-column align-items-center justify-content-between" style="height: 60%;">
                <img src="../assets/error/404.png" alt="">
                <div class="d-flex flex-column text-center">
                    <span style="font-size: 32px;"> 🫥 Sayfa Bulunamadı </span>
                    <span class="text-artrodite-gray" style="font-size: 12px;">  Aradığınız sayfayı bulamadık. </span>
                </div>
                <router-link to="/" class="hover-underline-animation">
                    <div class="btn btn-lg border-0">
                        Anasayfaya Dön <i class="fa fa-chevron-right ms-2 fs-6"></i>
                    </div>
                </router-link>
            </div>
        </div>
</template>


<style lang="scss" scoped>

</style>