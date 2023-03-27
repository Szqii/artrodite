<template>
    <div class="row px-32px px-lg-100 m-0" style="max-width: 100vw;">
        <div class="col-3 position-relative d-none d-lg-flex">
            <div data-aos="fade-up" class="sticky-top title-text" style="top: 150px; cursor: default; height: fit-content;">
                Projeler
                <i class="fa fa-chevron-down align-middle fs-6" />
                <ul class="project-list p-0 mt-4">
                    <li v-for="(project, index) in projectList" :key="index" data-aos="fade-up" :data-aos-delay="index * 50"
                        class="mb-2 fw-light">
                        <span class="list-item" :class="activeIndex === index ? 'active-list-item' : ''">
                            {{ project.title }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-lg-9 mx-auto mx-lg-0">
            <div class="project-element row justify-content-start justify-content-lg-between h-lg-screen mb-5 mb-lg-0"
                v-for="(project, index) in projectList" :key="index" ref="projectElements">
                <div class="col-12 col-lg-3 d-flex flex-column order-1 order-lg-0">
                    <router-link :to="'projects/' + project.name">
                        <span class="hover-underline-animation" data-aos="fade-up">
                            {{ project.title }}
                        </span>
                    </router-link>

                    <span class="text-artrodite-gray fw-light" style="font-size: 16px;" data-aos="fade-up"
                        data-aos-delay="50">
                        {{ project.titleDesc }}
                    </span>

                    <span class="text-secondary fw-lighter" style="font-size: 12px;" data-aos="fade-up"
                        data-aos-delay="100">
                        {{ project.date }}
                    </span>
                </div>
                <div class="col-4 d-none d-lg-flex flex-column">
                    <div data-aos="fade-up" class="mb-4" style="height: fit-content;"
                        v-for="(description, index) in project.descriptionList" :key="index">
                        {{ description }}
                    </div>
                </div>
                <div class="col-12 col-lg-4" style="height: fit-content;">
                    <router-link :to="'projects/' + project.name">
                        <img data-aos="fade-left" :src="require('@/assets/projects/' + project.img)"
                            :alt="project.title + ' image'" style="max-width: 100%; aspect-ratio: 1; object-fit: cover;">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import projects from '../datas/projects.json'
const projectList = projects.projectsList

const activeIndex = ref(0);
const projectElements = Array.from(document.querySelectorAll('.project-element'));



const setActive = () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeIndex.value = projectElements.indexOf(entry.target);
            }
        });
    }, { threshold: 0.5 });
    projectElements.forEach(person => observer.observe(person));
}

onMounted(() => {
    const scrollToTeamPerson = (index) => {
        const projectItem = projectElements[index];
        const topPos = projectItem.offsetTop - 150;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
        // projectItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        activeIndex.value = index;
    };
    const projectListItem = document.querySelectorAll('.project-list li');
    const projectListArray = Array.from(projectListItem);
    projectListArray.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeIndex.value = index;
            scrollToTeamPerson(index);
        });
    });

    setActive();
});
</script>

<style lang="scss" scoped>

.project-list {
    list-style: none;

    .list-item{
        transition: .3s all ease-in-out;
        border-bottom: 1px solid;
        border-color: transparent;
        cursor: pointer;
        &.active-list-item{
            border-color: #000;
        }
    }
}
</style>