<template>
  <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster" mode="out-in"
              name="fade">
    <loading v-if="loading"/>

    <div v-else class="w-100">
      <div class="project-hero"/>
      <description :url="url" :description1="description1" :description2="description2"/>

      <div v-for="(n, index) in 11" :key="index" style="width: 100vw;">
        <img :src="'/Projects/halo-project/' + n + '.png'" alt="" style="width: 100%; height: 100%;">
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
      url: 'haloedebiyat.wordpress.com',
      description1: 'Halo ile Artrodite olarak gerçekleştirdiğimiz iş birliğiyle heyecan dorukta! Halo, Pamukkale Üniversitesi İngiliz Dili ve Edebiyatı öğrencileri tarafından yazılan ve sanatla edebiyatı harmanlayan bir dergi. İçinde barındırdığı zengin içeriklerle dikkat çeken bu platformla iş birliği yapmaktan büyük mutluluk duyuyoruz.',
      description2: 'Artrodite olarak, Halo dergisine yaptığımız dokunuşlarla tasarımını sadeleştirdik ve minimalizmi ön plana çıkardık. İkonografi kullanımıyla da hızlı anlaşılabilirlik ve rahat bir okuma deneyimi sağlamayı hedefledik.'
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
  background: url("../../../public/projects/halo-project/bg.png") no-repeat center center;
  background-size: cover;
}

.project-desc {
  width: 100vw;
  min-height: 100vh;

  i {
    margin-left: 10px;
    font-size: smaller;
    transform: rotate(45deg);
  }

  .details {
    max-width: 65%;

    div {
      font-size: 1.8rem;

    }

    @media (max-width: 768px) {
      div {
        font-size: 1rem;
      }
      max-width: 100%;
    }
  }
}

</style>
