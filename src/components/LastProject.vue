<template>
    <div class="last-project-container row justify-content-between align-content-start mx-auto mx-md-0 mt-4 mt-md-0 px-4 px-lg-100 h-md-screen"
        style="max-width: 100vw;">
        <div class="col-12 col-lg-3 mb-4 mb-lg-0">
            <span class="title-text">Son Projeler</span>
        </div>
        <div class="projects-container mx-auto col-12 col-lg-9 row justify-content-between gap-5 gap-md-2">
            <div class="col-lg-5 px-0" style="height: fit-content;">
                <router-link to="projects/berkand">
                    <img style="max-width: 100%;" src="../assets/projects/berkand.gif" alt="">
                </router-link>
                <div class="d-flex flex-column mt-4">
                    <router-link to="projects/berkand">
                        <span class="mb-2 hover-underline-animation">Berkand Makina</span>
                    </router-link>
                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Kablo Makinaları Üreticisi</span>
                </div>
            </div>
            <div class="col-lg-5 px-0">
                <router-link to="projects/plasmet">
                    <img style="max-width: 100%;" src="../assets/projects/plasmet.png" alt="">
                </router-link>
                <div class="d-flex flex-column mt-4">
                    <router-link to="projects/plasmet">
                        <span class="mb-2 hover-underline-animation">Plasmet</span>
                    </router-link>
                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Yapı Çözümleri</span>
                </div>
            </div>
            <div class="col-lg-5 px-0">
                <router-link to="projects/havalan">
                    <img style="max-width: 100%;" src="../assets/projects/havalan.png" alt="">
                </router-link>
                <div class="d-flex flex-column mt-4">
                    <router-link to="projects/havalan">
                        <span class="mb-2 hover-underline-animation">Havalan</span>
                    </router-link>
                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Havalandırma Çözümleri</span>
                </div>
            </div>
            <div class="col-lg-5 px-0 mt-0 mt-md-5rem">
                <router-link to="projects/yamu">
                    <img style="max-width: 100%;" src="../assets/projects/yamu.png" alt="">
                </router-link>
                <div class="d-flex flex-column mt-4">
                    <router-link to="projects/yamu">
                        <span class="mb-2 hover-underline-animation">Yamu</span>
                    </router-link>
                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Alışveriş Yaparken Kâr Edin</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>