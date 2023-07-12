<template>
  <div
      class="project-desc fw-light text-dark bg-artrodite py-4 py-md-10rem px-5 px-lg-100 d-flex flex-column flex-md-row justify-content-around justify-content-md-between">
    <a class="text-dark hover-underline-animation me-4" data-aos="fade-up"
       :href="'https://' + url" style="height: fit-content" target="_blank">
      <span class="fs-4 text-nowrap">{{ url }}</span>
      <i class="fa fa-arrow-up"/>
    </a>
    <div class="details d-flex flex-column gap-3 gap-md-130px">
      <div class="mb-4" data-aos="fade-up">
        {{ description1 }}
      </div>
      <div data-aos="fade-up">
        {{ description2 }}
      </div>
    </div>
  </div>
</template>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "description",
  props: {
    url: {
      type: String,
      default: '',
    },
    description1: {
      type: String,
      default: '',
    },
    description2: {
      type: String,
      default: '',
    },
  }
})
</script>


<style scoped lang="scss">

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
