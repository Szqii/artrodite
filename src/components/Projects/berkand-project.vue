<template>
    <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster" mode="out-in"
                name="fade">
        <loading v-if="loading"/>

        <div v-else class="w-100">
            <div class="project-hero"/>
            <div class="project-desc text-dark bg-artrodite py-4 py-md-10rem px-5 px-lg-100 d-flex flex-column flex-md-row justify-content-around justify-content-md-between">
                <a class="text-dark hover-underline-animation me-4" data-aos="fade-up"
                   href="   https://www.berkandmakina.com.tr/" target="_blank" style="height: fit-content">
                    <span class="fs-4 text-nowrap">berkandmakina.com.tr</span>
                    <i class="fa fa-arrow-up"/>
                </a>
                <div class="details d-flex flex-column gap-3 gap-md-130px">
                    <div class="mb-4" data-aos="fade-up">
                        Berkand Makina 2010 yılından bu yana kablo makinaları ve kablo sektörüne yönelik yedek parça,
                        kapsamlı makine çözümlerinde faaliyet göstermektedir.
                    </div>
                    <div data-aos="fade-up">
                        Bu çalışmada, Berkand Makina’nın logo, web sitesi, katalog, renk ve yazı tipi seçiminin yeniden
                        tasarladık ve kurumsal kimliğini oluşturduk. Yeni tasarım, şirketin değerlerini ve hedeflerini
                        yansıtmayı amaçlayan minimalist bir logo, temiz bir web sitesi, şirket değerlere uygun renkler
                        ve yazı kullanımını içeriyor.
                    </div>
                </div>
            </div>

            <div v-for="(n, index) in 18" :key="index" style="width: 100vw;">
                <img :src="'/berkand-project/' + n + '.png'" alt="" style="width: 100%; height: 100%;">
            </div>
        </div>
    </transition>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
    components: {
        Loading
    },
    data() {
        return {
            loading: true
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
  background: url("../../../public/berkand-project/bg.png") no-repeat center center;
  background-size: cover;
}

.project-desc {
  width: 100vw;
  height: 100vh;

  i {
    margin-left: 10px;
    font-size: smaller;
    transform: rotate(45deg);
  }

  .details {
    max-width: 40%;

    div {
      font-size: 1.4rem;

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
