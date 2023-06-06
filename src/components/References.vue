<template>
    <div class="row justify-content-between align-items-start mx-auto mx-md-0 px-4  py-4 py-md-10rem mt-5rem"
         :class="isStudio ? '' : 'px-lg-100'"
        style="max-width: 100vw;">
        <div class="col-12 col-lg-3 mb-4 mb-lg-0">
            <span class="title-text" data-aos="fade-up">Referanslar</span>
        </div>
        <div class="references-container mx-auto col-12 col-lg-9 row px-0 gap-md-4 justify-content-between">
            <div class="col-md-2 col-4 py-5 py-md-0" v-for="(reference, index) in referencesList" :key="index" style="max-width: fit-content;" data-aos="zoom-in" :data-aos-delay="index * 200">
                <img :src="reference.imgUrl" :alt="reference.name" class="w-100">
            </div>
        </div>
        <!-- <div ref="swiper" class="swiper mx-auto col-12 col-lg-9 pt-4 pt-md-0">
            <div class="swiper-wrapper bg-transparent py-4">
                <div v-for="(reference, index) in references" :key="index" class="swiper-slide">
                    <img :src="reference.imgUrl" :alt="reference.name">
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import references from '../datas/references.json'
const referencesList = references.references

defineProps({
    isStudio: {
        type: Boolean,
        default: false
    }
})

</script>

<style lang="scss" scoped>
</style>
