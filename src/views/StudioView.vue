<template>
    <div class="row px-32px px-lg-100 mx-0">
        <div class="col-12 row mx-auto mx-lg-0 h-lg-screen">
            <div class="col-12 col-lg-3 position-relative px-0 mb-4 mb-lg-0">
                <div class="sticky-top title-text" data-aos="fade-up">Biz</div>
            </div>
            <div
                class="col-12 col-lg-3 d-flex flex-column gap-4 gap-lg-130px px-0 px-lg-4 text-artrodite-gray mb-4 mb-lg-0">
                <span data-aos="fade-up"> Günümüzde, markaların kişilikleri, algımızda çok büyük
                    bir önem taşır. <span class="makeItBlack"> Kişilikli bir marka, </span> sizi rakiplerinizden ayırır ve
                    öne çıkmanızı sağlar.</span>
                <span data-aos="fade-up"> Projeler daima sizin ihtiyaçlarınıza
                    özel olarak tasarlanır. <span class="makeItBlack"> Hazır taslaklar kullanılmaz. </span> </span>
            </div>
            <div class="col-12 col-lg-3 px-0 px-lg-4 text-artrodite-gray ">
                <div data-aos="fade-up">
                    <span class="makeItBlack">Artrodite’nin</span> ilk amacı markanız için
                    <span class="makeItBlack">göz alıcı bir kişilik</span> oluşturarak, potansiyel müşterilerinizi
                    arttırmayı ve işletmenizi hak ettiği başarıya ulaştırmaktır.
                </div>
            </div>
            <div class="col-12 col-lg-3 px-0 mt-4 mt-lg-0">
                <img v-lazy="'/studio/studio-1.jpg'" alt="" class="w-100" data-aos="fade-left">
            </div>
        </div>

        <div class="col-12 row h-lg-screen mt-5 mx-auto mx-lg-0 text-center text-lg-start">
            <div class="col-12 col-lg-3 position-relative my-5 my-lg-0 px-0">
                <div class="sticky-top title-text" data-aos="fade-up">Metadoloji</div>
            </div>

            <div class="col-12">
                <div ref="swiper" class="swiper w-100" data-aos="fade-up" style="overflow: unset">
                    <div class="swiper-wrapper bg-transparent py-4">
                        <div class="swiper-slide">
                            Dinle
                        </div>
                        <div class="swiper-slide">
                            <i class="fa fa-chevron-right" />
                        </div>
                        <div class="swiper-slide">
                            Araştır
                        </div>
                        <div class="swiper-slide">
                            <i class="fa fa-chevron-right" />
                        </div>
                        <div class="swiper-slide">
                            Tasarla
                        </div>
                        <div class="swiper-slide">
                            <i class="fa fa-chevron-right" />
                        </div>
                        <div class="swiper-slide">
                            Test et
                        </div>
                        <div class="swiper-slide">
                            <i class="fa fa-chevron-right" />
                        </div>
                        <div class="swiper-slide">
                            Tekrarla
                        </div>
                        <div class="swiper-slide">
                            <i class="fa fa-chevron-right" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="col-12 col-lg-3 px-0 mt-4 mt-lg-0">
                <img v-lazy="'/studio/studio-2.jpg'" alt="" class="w-100" data-aos="fade-left">
            </div> -->
        </div>

        <div class="col-12 row h-lg-screen mt-5 mx-auto mx-lg-0">
            <div class="col-12 col-lg-3 position-relative my-5 my-lg-0 px-0">
                <div class="sticky-top title-text" data-aos="fade-up">Çalışma Alanlarımız</div>
            </div>
            <div class="col-12 col-lg-3 px-0">
                <ul class="list-unstyled d-flex flex-column gap-4">
                    <li data-aos="fade-up"> Kurumsal Kimlik Tasarımı </li>
                    <li data-aos="fade-up"> Website Tasarımı </li>
                    <li data-aos="fade-up"> Logo Tasarımı </li>
                    <li data-aos="fade-up"> Katalog Tasarımı </li>
                    <li data-aos="fade-up"> Ambalaj Tasarmı </li>
                    <li data-aos="fade-up"> Fotoğrafçılık ve Videografi</li>
                    <li data-aos="fade-up"> Sosyal Medya Yönetimi </li>
                </ul>
            </div>
            <div class="col-12 col-lg-3" />
            <div class="col-12 col-lg-3 px-0 mt-4 mt-lg-0">
                <img v-lazy="'/studio/studio-3.jpg'" alt="" class="w-100" data-aos="fade-left">
            </div>
        </div>
        <references :is-studio="true"/>
    </div>
</template>

<script>

import references from '../datas/references.json'
import 'swiper/css';
import References from "@/components/References.vue";

export default {
    components: {References},
    data() {
        return {
            references: references.references,
        }
    },
    methods: {
        async createSwiper() {
            this.swiper = require('swiper')
            const swiperEl = this.$refs.swiper
            this.swiper = new this.swiper.Swiper(swiperEl, {
                loop: true,
                speed: 2000,
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 5,
                    }
                },
                modules: [
                    this.swiper.Autoplay,
                ],
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }
            })
        },
    },
    mounted() {
        this.createSwiper()
    },

};



</script>

<style lang="scss" scoped>
@import "swiper/swiper-bundle.css";

.swiper-wrapper {
    transition-timing-function: linear;
    padding: 0 !important;
}
.swiper-slide{
    text-align: center;
    color: black;
    font-size: 4rem;
     i{
        font-size: 2rem;
     }
}

@media (max-width: 768px) {
    .swiper-slide{
        font-size: 2rem;
        i{
            font-size: 1rem;
        }
    }
}

.sticky-top {
    top: 20px;
}
</style>
