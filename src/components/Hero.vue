<template>
    <div class="row mx-auto justify-content-between" style="height: 100vh; padding: 0 100px;">
        <div class="title position-relative col-3">
            <span class="hover-underline-animation sticky-top-20" style="font-weight: 700; font-size: 24px; cursor: default;">artrodite</span>
        </div>
        <div class="desc-container row col-9">
            <div class="desc col-4 d-flex flex-column justify-content-between">
                <span>Artrodite <span class="makeItBlack">özgün ve kaliteli tasarımlar</span> oluşturarak
                    alanında fark yaratmayı
                    amaçlayan,
                    <span class="makeItBlack">Denizli</span> merkezli bir
                    tasarım stüdyosudur.</span>
                <img src="../assets/hero/ss.png" alt="" style="max-width: 100%;">
            </div>
            <div class="desc col-4 d-flex flex-column justify-content-between">
                <span>
                    Çalışmalarımız sizin ihtiyaçlarınıza özel olarak tasarlanır. <span class="makeItBlack"> Önceden
                        hazırlanmış taslaklar
                        kullanılmaz.</span></span>
                <img src="../assets/hero/ss.png" alt="" style="max-width: 100%;">
            </div>
            <div class="desc col-4 d-flex flex-column justify-content-between">
                <router-link to="/studio">Detaylı Bilgi <i class="fa-solid fa-chevron-right" /> </router-link>
                <img src="../assets/hero/ss.png" alt="" style="max-width: 100%;">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.desc {
    max-height: 600px;
    padding: 0 10px !important;
}

// .container {
//     display: flex;
//     justify-content: space-between;
//     padding: 100px;
//     height: 100vh;

//     .title {
//         margin-right: 200px;
//         font-weight: 600;
//         font-size: 1.5rem;
//     }
// }

// .desc-container {
//     display: flex;
//     max-width: 1080px;

//     .desc {
//         padding: 0 20px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: center;
//         min-height: 500px;

//         img {

//             width: 100%;
//         }
//     }
// }</style>