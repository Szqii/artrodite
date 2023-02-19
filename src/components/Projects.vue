<template>
    <div class="row px-100" style="max-width: 100vw;">
        <div class="col-3 position-relative">
            <div class="sticky-top animate__animated animate__fadeInUp" style="top: 20px; font-weight: 700; font-size: 24px; cursor: default;">Projeler</div>
        </div>
        <div class="col-9">
            <div class="row justify-content-between" style="height: 100vh;" v-for="(project, index) in projectList"
                :key="index">
                <div class="col-3 d-flex flex-column">

                    <span style="font-weight: 700;" class="animate__animated animate__fadeInUp">
                        {{ project.title }}
                    </span>

                    <span class="animate__animated animate__fadeInUp animate__delay_100ms">
                        {{ project.titleDesc }}
                    </span>

                    <span class="text-secondary animate__animated animate__fadeInUp animate__delay_200ms">
                        {{ project.date }}
                    </span>
                </div>
                <div class="col-4 d-flex ">
                    <span class="animate__animated animate__fadeInUp text-justify" style="height: fit-content;">
                        {{ project.description }}
                    </span>
                </div>
                <div class="col-4">
                    <router-link :to="'projects/' + project.name">
                        <img :src="require('@/assets/projects/' + project.img)"  :alt="project.title + ' image' " style="max-width: 100%;">
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