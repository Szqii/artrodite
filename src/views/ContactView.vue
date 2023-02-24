<template>
    <div class="row px-100" style="height: calc(100vh - 100px); max-width: 100vw;">
        <div class="col-3">
            <div class="animate__animated animate__fadeInUp" style="font-weight: 700; font-size: 24px;">
                İletişim
            </div>

        </div>
        <div class="col-3 px-4 d-flex flex-column justify-content-between">
            <div class="text-justify text-artrodite-gray animate__animated animate__fadeInUp animate__delay_100ms"
                style="font-weight: 500;">
                Basit ve hazır tasarımlar değil, kişiliğe ve kimliğe özel <span class="makeItBlack"> sanat eserleri </span>
                oluşturuyoruz.
            </div>
            <img src="../assets/contact/contact-1.png" alt="">

        </div>
        <div class="col-3 px-4 d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-between">
                <a href="https://www.instagram.com/artrodite_studio/"
                    class="animate__animated animate__fadeInUp animate__delay_100ms hover-underline-animation" target="_blank">Instagram <i
                        class="fa fa-arrow-up-right-from-square"></i> </a>
                <a href="https://www.linkedin.com/company/artrodite/"
                    class="animate__animated animate__fadeInUp animate__delay_200ms hover-underline-animation" target="_blank">LinkedIn <i
                        class="fa fa-arrow-up-right-from-square"></i> </a>
            </div>
            <img src="../assets/contact/contact-2.png" alt="">
        </div>
        <div class="col-3 px-4 d-flex flex-column justify-content-between ">
            <div class="d-flex justify-content-between">
                <a href="https://www.twitter.com/artrodite/"
                    class="animate__animated animate__fadeInUp animate__delay_200ms hover-underline-animation" target="_blank">Twitter <i
                        class="fa fa-arrow-up-right-from-square"></i> </a>
                <a href="mailto:artrodite@gmail.com" class="animate__animated animate__fadeInUp animate__delay_100ms hover-underline-animation"
                    target="_blank">Email <i class="fa fa-arrow-up-right-from-square"></i> </a>
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
    height: 600px;
    max-height: 800px;
}

i {
    margin-left: 10px;
    font-size: 20px;
}</style>