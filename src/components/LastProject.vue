<template>
    <div class="last-project-container row justify-content-between align-content-start mx-auto mx-md-0 mt-4 mt-md-0 px-4 px-lg-100 h-md-screen h-100vh"
        style="max-width: 100vw;">
        <div class="col-12 col-lg-3 mb-4 mb-lg-0">
            <span class="title-text">Son Projeler</span>
        </div>
        <div class="projects-container col-12 col-lg-9 row justify-content-between gap-4">
            <div class="col-lg-5" style="height: fit-content;">
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
            <div class="col-lg-5">
                <img style="max-width: 100%;" src="../assets/projects/plasmet.png" alt="">
                <div class="d-flex flex-column mt-4">
                    <span class="mb-2">Plasmet</span>
                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Yapı Çözümleri</span>
                </div>
            </div>
            <div class="col-lg-5">
                <img style="max-width: 100%;" src="../assets/projects/havalan.png" alt="">
                <div class="d-flex flex-column mt-4">
                    <span class="mb-2">Havalan</span>
                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Havalandırma Çözümleri</span>
                </div>
            </div>
            <div class="col-lg-5" style="margin-top: 5rem;">
                <img style="max-width: 100%;" src="../assets/projects/yamu.png" alt="">
                <div class="d-flex flex-column mt-4">
                    <span class="mb-2">Yamu</span>
                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Alışveriş Yaparken Kâr Edin</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// .container {
//     padding: 100px;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     height: 100vh;
// }

// .title {
//     font-size: 24px;
//     font-weight: 200;
//     white-space: nowrap;
// }

// .img-container {
//     text-align: right;

//     img {
//         width: 1080px;
//     }

//     .img-desc{
//         text-align: left;
//         display: flex;
//         flex-direction: column;

//         small{
//             color: #6F6F6F;
//         }
//     }
// }
</style>