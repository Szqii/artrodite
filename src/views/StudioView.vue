<template>
    <div class="studio-view">
        <div class="studio-item">
            <div class="title">
                <span>Biz</span>
            </div>
            <div class="desc-1">
                Markaların kişiliklerinin algımızdaki rolü büyüktür ve kişilikli bir marka, rakiplerinizden ayırarak
                sizi öne çıkarır.
                <br>
                Tasarımlarımız sizin ihtiyaçlarınıza ve markanızın sektörüne özel olarak hazırlanır ve önceden
                hazırlanmış taslaklar
                kullanılmaz.
            </div>
            <div class="desc-2">
                Bizim amacımız, markanız için göz alıcı bir kişilik oluşturarak, müşteri potansiyelini arttırmaktır.
            </div>
            <div class="img-container">
                <img src="../assets/studio/studio-1.png" alt="">
            </div>
        </div>
        <div class="studio-item">
            <div class="title">
                <span>Metadoloji</span>
            </div>
            <div class="desc-1">
            </div>
            <div class="desc-2">
                <ul class="metodology-list">
                    <li>Dinle</li>
                    <li><i class="fa fa-chevron-down"></i></li>
                    <li>Araştır</li>
                    <li><i class="fa fa-chevron-down"></i></li>
                    <li>Tasarla</li>
                    <li><i class="fa fa-chevron-down"></i></li>
                    <li>Test et</li>
                    <li><i class="fa fa-chevron-down"></i></li>
                    <li>Tekrarla</li>
                </ul>
            </div>
            <div class="img-container">
                <img src="../assets/studio/studio-2.png" alt="">
            </div>
        </div>
        <div class="studio-item">
            <div class="title">
                <span>Çalışma Alanlarımız</span>
            </div>
            <div class="desc-1">
                <ul>
                    <li> Kurumsal Kimlik Tasarımı </li>
                    <li> UI - UX Tasarımı </li>
                    <li> Logo Tasarımı </li>
                    <li> Website tasarımı </li>
                    <li> Mobil uygulama </li>
                    <li> Reklamcılık </li>
                    <li> Katalog tasarımı </li>
                    <li> Ambalaj Tasarmı </li>
                    <li> Kart visit, defter, takvim vb. </li>
                </ul>
            </div>
            <div class="desc-2">
            </div>
            <div class="img-container">
                <img src="../assets/studio/studio-3.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.studio-view {
    width: 100%;
    padding: 100px;
    padding-bottom: 0;

    .studio-item {
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: space-between;

        div {
            width: 20%;
        }

        .img-container img {
            width: 100%;
        }
    }
}

ul {
    list-style: none;

    li {
        margin: 10px 0;
    }
}

</style>