<template>
  <div class="row px-32px px-lg-100 px-32px px-lg-100 mx-0" style="max-width: 100vw; height: 80vh;">
    <div class="col-12 col-lg-3">
      <div class="title-text" data-aos="fade-up">
        İletişim
      </div>
    </div>
    <div class="col-lg-3 px-4 flex-column justify-content-between d-none d-lg-flex">
      <div class="text-artrodite-gray" data-aos="fade-up" style="font-weight: 500;">
        Basit ve hazır tasarımlar değil, kişiliğe ve kimliğe özel <span class="makeItBlack"> sanat eserleri </span>
        oluşturuyoruz.
      </div>
      <!--      <img data-aos="fade-up" v-lazy="'/contact/contact-1.jpg'" alt="">-->
    </div>
    <div class="col-12 col-lg-3 px-lg-4 d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-between">
        <a href="https://www.instagram.com/artrodite_studio/" data-aos="fade-up" data-aos-delay="50"
           class=" hover-underline-animation" target="_blank">Instagram <i class="fa fa-arrow-up"></i> </a>
        <a href="mailto:artrodite@gmail.com" class="hover-underline-animation" data-aos-delay="100" target="_blank"
           data-aos="fade-up">Email <i class="fa fa-arrow-up"></i> </a>

      </div>
      <!--      <img class="d-none d-lg-block" data-aos="fade-up" v-lazy="'/contact/contact-2.jpg'" alt="">-->
    </div>
    <div class="col-12 col-lg-3 px-lg-4 d-flex flex-column justify-content-between ">
      <div class="d-flex justify-content-between">
        <a href="https://www.twitter.com/artrodite/" data-aos="fade-up" data-aos-delay="150"
           class="hover-underline-animation" target="_blank">Twitter <i class="fa fa-arrow-up"></i> </a>
        <a href="https://www.linkedin.com/company/artrodite/" data-aos="fade-up" data-aos-delay="200"
           class="hover-underline-animation" target="_blank">LinkedIn <i class="fa fa-arrow-up"></i> </a>
      </div>
      <!--      <img class="d-none d-lg-block" data-aos="fade-up" v-lazy="'/contact/contact-3.jpg'" alt="">-->

    </div>
    <!--    <img src="/contact/contact-mobile.jpg" data-aos="fade-up" class="d-block d-lg-none w-100 px-0 " alt="">-->
    <!--        <div class="col-12 col-lg-6 mx-auto overflow-hidden mt-2 h-55vh h-md-70vh">-->
    <!--            <business-card-scene />-->
    <!--        </div>-->
  </div>
</template>

<script setup>
// import BusinessCardScene from '@/components/BusinessCardScene.vue';
</script>


<style lang="scss" scoped>
img {
  max-width: 100%;
  object-fit: contain;
}

// @media (min-width: 991px) {
.col-lg-3 {
  height: fit-content;
}

// }

i {
  margin-left: 10px;
  font-size: smaller;
  transform: rotate(45deg);
}
</style>
