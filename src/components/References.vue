<template>
    <div class="row justify-content-between align-items-start mx-auto mx-md-0 px-4 px-lg-100 py-4 py-md-10rem mt-5rem"
        style="max-width: 100vw;">
        <div class="col-12 col-lg-3 mb-4 mb-lg-0">
            <span class="title-text" data-aos="fade-up">Referanslar</span>
        </div>
        <!-- <div class="references-container mx-auto col-12 col-lg-9 row px-0 justify-content-between gap-5">
            <div class="col-md-2 col-4" v-for="(reference, index) in referencesList" :key="index">
                <img :src="reference.imgUrl" :alt="reference.name">
            </div>
        </div> -->
        <div ref="swiper" class="swiper mx-auto col-12 col-lg-9 pt-4 pt-md-0">
            <div class="swiper-wrapper bg-transparent py-4">
                <div v-for="(reference, index) in references" :key="index" class="swiper-slide">
                    <img :src="reference.imgUrl" :alt="reference.name">
                </div>
            </div>
            <!-- End Row -->
        </div>
    </div>
</template>

<script>
import references from '../datas/references.json'
import 'swiper/css';

export default {
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
                speed: 3000,
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
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
</style>