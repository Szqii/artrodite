<template>
    <div class="row px-32px px-lg-100 px-32px px-lg-100 mx-0 h-screen" style="max-width: 100vw;">
        <div class="col-12 col-lg-3">
            <div class="animate__animated animate__fadeInUp title-text">
                İletişim
            </div>

        </div>
        <div class="col-lg-3 px-4 flex-column justify-content-between d-none d-lg-flex">
            <div class="text-justify text-artrodite-gray animate__animated animate__fadeInUp animate__delay_100ms"
                style="font-weight: 500;">
                Basit ve hazır tasarımlar değil, kişiliğe ve kimliğe özel <span class="makeItBlack"> sanat eserleri </span>
                oluşturuyoruz.
            </div>
            <img src="../assets/contact/contact-1.png" alt="">

        </div>
        <div class="col-12 col-lg-3 px-lg-4 d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-between">
                <a href="https://www.instagram.com/artrodite_studio/"
                    class="animate__animated animate__fadeInUp animate__delay_100ms hover-underline-animation"
                    target="_blank">Instagram <i class="fa fa-arrow-up"></i> </a>
                <a href="mailto:artrodite@gmail.com"
                    class="animate__animated animate__fadeInUp animate__delay_100ms hover-underline-animation"
                    target="_blank">Email <i class="fa fa-arrow-up"></i> </a>

            </div>
            <img class="d-none d-lg-block" src="../assets/contact/contact-2.png" alt="">
        </div>
        <div class="col-12 col-lg-3 px-lg-4 d-flex flex-column justify-content-between ">
            <div class="d-flex justify-content-between">
                <a href="https://www.twitter.com/artrodite/"
                    class="animate__animated animate__fadeInUp animate__delay_200ms hover-underline-animation"
                    target="_blank">Twitter <i class="fa fa-arrow-up"></i> </a>
                <a href="https://www.linkedin.com/company/artrodite/"
                    class="animate__animated animate__fadeInUp animate__delay_200ms hover-underline-animation"
                    target="_blank">LinkedIn <i class="fa fa-arrow-up"></i> </a>
            </div>
            <img class="d-none d-lg-block" src="../assets/contact/contact-3.png" alt="">
        </div>
        <img src="../assets/contact/contact-mobile.png" class="d-block d-lg-none w-100 px-0" alt="">
    </div>
</template>


<style lang="scss" scoped>
img {
    max-width: 100%;
    object-fit: contain;
}

@media (min-width: 991px) {
    .col-lg-3 {
        height: 600px;
        max-height: 800px;
    }
}

i {
    margin-left: 10px;
    font-size: smaller;
    transform: rotate(45deg);

}
</style>