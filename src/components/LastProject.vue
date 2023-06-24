<template>
  <div
      class="last-project-container row justify-content-between align-content-start mx-auto mx-md-0 my-4 my-md-100 px-4 px-lg-100"
      style="max-width: 100vw;">
    <div class="col-12 col-lg-3 mb-4 mb-lg-0">
      <span class="title-text" data-aos="fade-up" data-aos-once="false">Son Projeler</span>
    </div>
    <div class="projects-container mx-auto col-12 col-lg-9 row justify-content-between gap-5 gap-md-2">
      <div class="col-lg-5 px-0">
        <router-link to="projects/hidrobarsan">
          <img data-aos="fade-up" src="../assets/projects/hidrobarsan.png" style="max-width: 100%;"
               alt="">
        </router-link>
        <div class="d-flex flex-column mt-4" data-aos="fade-up" data-aos-delay="300">
          <router-link to="projects/hidrobarsan">
            <span class="mb-2 hover-underline-animation">Hidrobarsan</span>
          </router-link>
          <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Mermer Makinaları Üreticisi</span>
        </div>
      </div>
      <div class="col-lg-5 px-0">
        <router-link to="projects/halo">
          <img data-aos="fade-up" style="max-width: 100%;" src="../assets/projects/halo.png" alt="">
        </router-link>
        <div class="d-flex flex-column mt-4" data-aos="fade-up" data-aos-delay="200">
          <router-link to="projects/halo">
            <span class="mb-2 hover-underline-animation">Halo</span>
          </router-link>
          <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Edebiyat Dergisi</span>
        </div>
      </div>

      <div class="col-lg-5 px-0 pt-5">
        <router-link to="projects/berkand">
          <img data-aos="fade-up" style="max-width: 100%;" src="../assets/projects/berkand.png" alt="">
        </router-link>
        <div class="d-flex flex-column mt-4" data-aos="fade-up" data-aos-delay="200">
          <router-link to="projects/berkand">
            <span class="mb-2 hover-underline-animation">Berkand Makina</span>
          </router-link>
          <span class="text-artrodite-gray fw-light" style="font-size: 16px;">Kablo Makinaları Üreticisi</span>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>
