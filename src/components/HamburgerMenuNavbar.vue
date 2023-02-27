<template>
    <div class="d-flex d-lg-none row w-100 mx-0 justify-content-between px-32px px-lg-100 py-28px"
        :class="isProjectPage ? 'position-absolute top-0 bg-transparent mb-md-0 mb-0' : 'bg-artrodite mb-4 mb-md-100 '"
        style="max-width: 100vw;">
        <div class="col-9 col-md-3" style="cursor: pointer;">
            <router-link to="/" class="logo">
                <img src="../assets/navbar/logo.svg" alt="logo">
            </router-link>
        </div>

        <div class="col-3 fs-2 d-flex align-items-center justify-content-center" @click="openModal">
            <i class="fa fa-bars" />
        </div>
    </div>

    <div class="hamburgerMenu" v-if="isModalOpen">
        <div class="router-container col-9 text-end row flex-column justify-content-between">
            <div class="col-9 mx-auto text-start d-flex flex-column text-center gap-5" style="font-size: 16px;">
                <router-link to="/" @click="closeModal"> Anasayfa</router-link>
                <router-link to="/projects" @click="closeModal">Projeler</router-link>
                <router-link to="/studio" @click="closeModal"> Stüdyo</router-link>
            </div>
            <div class="col-12 px-4 d-flex align-items-center justify-content-center mt-5" style="font-size: 16px;">
                <router-link class="contact-btn btn btn-dark text-nowrap" to="/contact" @click="closeModal">Bize
                    Ulaşın</router-link>
            </div>
        </div>
        <div ref="closeBtn" class="mt-5" @click="closeModal">
            X
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
            console.log(this.isModalOpen);
        },
        closeModal() {
            this.isModalOpen = false;
        }
    },
}





</script>

<style lang="scss" scoped>
.hamburgerMenu {
    background-color: #F1F1F1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}
</style>