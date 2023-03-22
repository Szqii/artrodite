<template>
    <div class="row px-32px px-lg-100 m-0" style="max-width: 100vw;">
        <div class="col-3 position-relative d-none d-lg-flex">
            <div data-aos="fade-up" class="sticky-top title-text" style="top: 150px; cursor: default; height: fit-content;">Projeler</div>
        </div>
        <div class="col-12 col-lg-9 mx-auto mx-lg-0">
            <div class="row justify-content-start justify-content-lg-between h-lg-screen mb-5 mb-lg-0" v-for="(project, index) in projectList"
                :key="index">
                <div class="col-12 col-lg-3 d-flex flex-column order-1 order-lg-0">
                    <router-link :to="'projects/' + project.name">
                        <span class="hover-underline-animation" data-aos="fade-up">
                            {{ project.title }}
                        </span>
                    </router-link>

                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;" data-aos="fade-up" data-aos-delay="50">
                        {{ project.titleDesc }}
                    </span>

                    <span class="text-secondary fw-lighter" style="font-size: 12px;" data-aos="fade-up" data-aos-delay="100">
                        {{ project.date }}
                    </span>
                </div>
                <div class="col-4 d-none d-lg-flex flex-column">
                    <div data-aos="fade-up" class="mb-4" style="height: fit-content;" v-for="(description, index) in project.descriptionList" :key="index">
                        {{ description }}
                    </div>
                </div>
                <div class="col-12 col-lg-4" style="height: fit-content;">
                    <router-link :to="'projects/' + project.name">
                        <img data-aos="fade-left" :src="require('@/assets/projects/' + project.img)"  :alt="project.title + ' image' " style="max-width: 100%; aspect-ratio: 1; object-fit: cover;">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from '../datas/projects.json'
const projectList = projects
</script>

<style lang="scss" scoped>
</style>