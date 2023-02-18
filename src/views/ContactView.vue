<template>
    <div class="row" style="height: calc(100vh - 100pxv); max-width: 100vw; padding: 0 100px;">
        <div class="col-3">
            <span style="font-weight: 700;">
                İletişim
            </span>

        </div>
        <div class="col-3 d-flex flex-column justify-content-between">
            <div class="text-justify">
                Basit ve hazır tasarımlar değil, <br> <span class="makeItBlack"> sanat eserleri </span> oluşturuyoruz.
            </div>
            <img src="../assets/contact/contact-1.png" alt="">

        </div>
        <div class="col-3 d-flex flex-column justify-content-between">
            <div class="d-flex flex-column gap-4">
                <a href="https://www.instagram.com/artrodite_studio/" target="_blank">Instagram <i class="fa fa-arrow-up-right-from-square"></i> </a>
                <a href="https://www.linkedin.com/company/artrodite/" target="_blank">LinkedIn <i class="fa fa-arrow-up-right-from-square"></i> </a>
            </div>
            <img src="../assets/contact/contact-2.png" alt="">

        </div>
        <div class="col-3 d-flex flex-column justify-content-between">
            <div>
                <a href="mailto:artrodite@gmail.com">Email <i class="fa fa-arrow-up-right-from-square"></i> </a>
            </div>
            <img src="../assets/contact/contact-3.png" alt="">
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    max-width: 100%;
    object-fit: contain;
}

.col-3 {
    max-height: 600px;
}

i{
    margin-left: 10px;
    font-size: 20px;
}
</style>