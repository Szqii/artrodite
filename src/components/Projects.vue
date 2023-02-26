<template>
    <div class="row px-32px px-lg-100" style="max-width: 100vw;">
        <div class="col-3 position-relative d-none d-lg-flex">
            <div class="sticky-top animate__animated animate__fadeInUp title-text" style="top: 150px; cursor: default;">Projeler</div>
        </div>
        <div class="col-12 col-lg-9 mx-auto mx-lg-0">
            <div class="row justify-content-start justify-content-lg-between h-lg-screen mb-5 mb-lg-0" v-for="(project, index) in projectList"
                :key="index">
                <div class="col-12 col-lg-3 d-flex flex-column order-1 order-lg-0">
                    <router-link :to="'projects/' + project.name">
                        <span class="animate__animated animate__fadeInUp hover-underline-animation">
                            {{ project.title }}
                        </span>
                    </router-link>

                    <span class="animate__animated animate__fadeInUp animate__delay_100ms text-artrodite-gray fw-light" style="font-size: 16px;">
                        {{ project.titleDesc }}
                    </span>

                    <span class="text-secondary animate__animated animate__fadeInUp animate__delay_200ms fw-lighter" style="font-size: 12px;">
                        {{ project.date }}
                    </span>
                </div>
                <div class="col-4 d-none d-lg-flex">
                    <span class="animate__animated animate__fadeInUp text-justify" style="height: fit-content;">
                        {{ project.description }}
                    </span>
                </div>
                <div class="col-12 col-lg-4" style="height: fit-content;">
                    <router-link :to="'projects/' + project.name">
                        <img :src="require('@/assets/projects/' + project.img)"  :alt="project.title + ' image' " style="max-width: 100%; aspect-ratio: 1; object-fit: cover;">
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