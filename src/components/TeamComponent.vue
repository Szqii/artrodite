<template>
    <div class="row px-32px px-lg-100 m-0" style="max-width: 100vw;">
        <div class="col-3 position-relative d-none d-lg-flex flex-column">
            <div class="sticky-top title-text" style="top: 150px; cursor: default; height: fit-content;" data-aos="fade-up">
                Takım <i class="fa fa-chevron-down align-middle fs-6" />
                <ul class="team-list p-0 mt-4">
                    <li v-for="(person, index) in teamList" :key="index" data-aos="fade-up" :data-aos-delay="index * 50"
                        class="mb-2 fw-light">
                        <span class="list-item" :class="activeIndex === index ? 'active-list-item' : ''">
                            {{ person.name }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-lg-9 mx-auto mx-lg-0">
            <div class="team-person row justify-content-start justify-content-lg-between h-lg-screen mb-5 mb-lg-0"
                v-for="(person, index) in teamList" :key="index" ref="teamPeople">
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
import { onMounted, ref } from 'vue';
import team from '../datas/team.json'
const teamList = team.teamList

const activeIndex = ref(0);
const teamPeople = Array.from(document.querySelectorAll('.team-person'));

const scrollToTeamPerson = (index) => {
    const teamPerson = teamPeople[index];
    const topPos = teamPerson.offsetTop - 150;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
    // teamPerson.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activeIndex.value = index;
};

const setActive = () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeIndex.value = teamPeople.indexOf(entry.target);
            }
        });
    }, { threshold: 0.5 });
    teamPeople.forEach(person => observer.observe(person));
}

onMounted(() => {
    const teamList = document.querySelectorAll('.team-list li');
    const teamListArray = Array.from(teamList);
    teamListArray.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeIndex.value = index;
            scrollToTeamPerson(index);
        });
    });

    setActive();
});


</script>

<style lang="scss" scoped>
.team-list {
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