<template>
  <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster" mode="out-in"
              name="fade">
    <loading v-if="loading"/>

    <div v-else class="w-100">
      <div class="project-hero"/>
      <description :url="url" :description1="description1" :description2="description2"/>

      <div v-for="(n, index) in 25" :key="index" style="width: 100vw;">
        <video v-if="videoQueues.includes(n)" class="w-100"
               :src="`https://ik.imagekit.io/artrodite/hidrobarsan/${n}.mp4`"
               data-aos="fade-up" data-aos-delay="100"
               autoplay muted loop></video>
        <img v-else :src="'/projects/hidrobarsan-project/' + n + '.png'" alt="" style="width: 100%; height: 100%;">
      </div>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Description from "@/components/Projects/ProjectsPartials/description.vue";

export default {
  components: {
    Description,
    Loading
  },
  data() {
    return {
      loading: true,
      url: 'hidrobarsan.com',
      description1: 'Hidrobarsan, 2000 yılından bugüne, ülkemizde lider mermer makinesi üreticilerinden biri haline gelmiş ve dünya çapında da zirveyi hedefleyerek çalışmalarını sürdürmektedir.',
      description2: 'Artrodite stüdyo olarak, Hidrobarsan markasıyla sıfırdan yepyeni bir web sitesini tasarladık. Bu proje kapsamında, web sitesinin içerisine 3 boyutlu görseller yerleştirerek müşterilerin makinaları 360 derece görüntüleyebilmesini sağladık. Böylece, web sitesi müşterilere daha iyi bir görsel deneyim sunar hale geldi.',
      videoQueues: [11],
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }
}

</script>

<style lang="scss" scoped>
.project-hero {
  width: 100vw;
  height: 100vh;
  background-image: url("../../../public/projects/hidrobarsan-project/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #FBB901;
}

</style>
