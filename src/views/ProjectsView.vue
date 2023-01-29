<template>
    <div class="projects-view">
        <div class="title">
            <span>Projeler</span>
        </div>
        <div class="project-list">
            <div class="project" v-for="(project, index) in projectList" :key="index">
                <div class="project-title">
                    {{ project.title }}
                    <br>
                    {{ project.titleDesc }}
                    <br>
                    <span class="project-date">
                        {{ project.date }}
                    </span>
                </div>
                <div class="project-desc">
                    {{ project.description }}
                </div>
                <div class="project-img-container">
                    <img :src="require('@/assets/projects/' + project.img)" class="project-img" alt="">
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
.projects-view {
    padding: 100px 100px 0 100px;
    width: 100%;
    display: flex;

    .project-list {
        display: flex;
        flex-direction: column;
    }

    .title {
        height: 100%;
        margin-right: 250px;
    }
}

.project {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 100px;


    .project-title, .project-desc, .project-img-container {
        width: 20%;
    }

    .project-date{
        color: rgba(111, 111, 111, 1);
    }
}

.project-img-container {
    width: 400px;

    img {
        max-width: 100%;
    }
}
</style>