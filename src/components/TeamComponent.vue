<template>
    <div class="row px-32px px-lg-100 m-0" style="max-width: 100vw;">
        <div class="col-3 position-relative d-none d-lg-flex">
            <div class="sticky-top title-text" style="top: 150px; cursor: default; height: fit-content;" data-aos="fade-up">
                Takım</div>
        </div>
        <div class="col-12 col-lg-9 mx-auto mx-lg-0">
            <div class="row justify-content-start justify-content-lg-between h-lg-screen mb-5 mb-lg-0"
                v-for="(person, index) in teamList" :key="index">
                <div class="col-12 col-lg-3 mb-4 mb-lg-0">
                    <div class="d-flex flex-column">
                        <span data-aos="fade-up">
                            {{ person.name }}
                        </span>

                        <span class="text-artrodite-gray fs-6" data-aos="fade-up" data-aos-delay="50">
                            {{ person.title }}
                        </span>

                        <span class="text-secondary fw-lighter" style="font-size: 12px;" data-aos="fade-up"
                            data-aos-delay="100">
                            {{ person.birthdate }}
                        </span>
                    </div>
                    <!-- <div class="row">
                        <div class="col-4" v-for="(imgUrl, index) in person.skills" :key="index">
                            <img :src="imgUrl" alt="">
                        </div>
                    </div> -->
                </div>
                <div class="col-4 d-none d-lg-flex flex-column">
                    <span class="mb-4" v-for="(description, index) in person.descriptions" :key="index"
                        style="height: fit-content;" data-aos="fade-up" :data-aos-delay="index * 50">
                        {{ description }}
                    </span>
                </div>
                <div class="col-12 col-lg-4" style="height: fit-content;">
                    <img data-aos="fade-left" class="rounded-4" :src="person.imgUrl" :alt="person.name + ' image'"
                        style="max-width: 100%; aspect-ratio: 1; object-fit: cover;">
                    <div class="d-flex align-items-center justify-content-between mt-4">
                        <a class="fs-6 fw-lighter hover-underline-animation" data-aos="fade-up" :data-aos-delay="index * 50"
                            :href="social.url" target="_blank" v-for="(social, index) in person.socials" :key="index">{{
                                social.name }} <img src="../assets/arrow-up-right.png" /> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import team from '../datas/team.json'
const teamList = team
</script>

<style lang="scss" scoped></style>