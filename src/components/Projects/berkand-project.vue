<template>
  <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster" mode="out-in"
              name="fade">
    <loading v-if="loading"/>

    <div v-else class="w-100">
      <div class="project-hero"/>
      <description :url="url" :description1="description1" :description2="description2"/>

      <div v-for="(n, index) in 18" :key="index" style="width: 100vw;">
        <img :src="'/Projects/berkand-project/' + n + '.png'" alt="" style="width: 100%; height: 100%;">
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
      url: 'berkandmakina.framer.website',
      description1: 'Berkand Makina 2010 yılından bu yana kablo makinaları ve kablo sektörüne yönelik yedek parça, kapsamlı makine çözümlerinde faaliyet göstermektedir.',
      description2: 'Bu çalışmada, Berkand Makina’nın logo, web sitesi, katalog, renk ve yazı tipi seçiminin yeniden tasarladık ve kurumsal kimliğini oluşturduk. Yeni tasarım, şirketin değerlerini ve hedeflerini yansıtmayı amaçlayan minimalist bir logo, temiz bir web sitesi, şirket değerlere uygun renkler ve yazı kullanımını içeriyor.'
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
  background: url("../../../public/projects/berkand-project/bg.png") no-repeat center center;
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
