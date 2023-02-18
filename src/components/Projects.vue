<template>
    <div class="row" style="padding: 0 100px; max-width: 100vw;">
        <div class="col-3 position-relative">
            <div class="sticky-top" style="top: 20px; font-weight: 700; cursor: default;">Projeler</div>
        </div>
        <div class="col-9">
            <div class="row justify-content-between" style="height: 100vh;" v-for="(project, index) in projectList"
                :key="index">
                <div class="col-3 d-flex flex-column">

                    <span style="font-weight: 600;">
                        {{ project.title }}
                    </span>

                    <span>
                        {{ project.titleDesc }}
                    </span>

                    <span class="text-secondary">
                        {{ project.date }}
                    </span>
                </div>
                <div class="col-4 text-justify">
                    {{ project.description }}
                </div>
                <div class="col-3">
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