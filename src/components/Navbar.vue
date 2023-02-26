<template>
    <div class="row w-100 mx-0 justify-content-between px-32px px-lg-100 py-28px"
        :class="isProjectPage ? 'position-absolute top-0 bg-transparent mb-md-0 mb-0' : 'bg-artrodite mb-4 mb-md-100 '"
        style="max-width: 100vw;">
        <div class="col-9 col-md-3" style="cursor: pointer;">
            <router-link to="/" class="logo">
                <img src="../assets/navbar/logo.svg" alt="logo">
            </router-link>
        </div>

        <div class="router-container col-9 text-end d-none d-md-flex row justify-content-between">
            <div class="col-8  text-start" style="font-size: 16px;">
                <router-link class="me-4 hover-underline-animation" to="/"> Anasayfa</router-link>
                <router-link class="me-4 hover-underline-animation" to="/projects">Projeler</router-link>
                <router-link class="hover-underline-animation" to="/studio"> Stüdyo</router-link>
            </div>
            <div class="col-4 px-4 d-flex align-items-center justify-content-end" style="font-size: 16px;">
                <router-link class="contact-btn btn btn-dark text-nowrap" to="/contact">Bize Ulaşın</router-link>
            </div>
        </div>

        <div class="col-3 d-flex d-md-none">
            <!-- Hamburger Menu Icon -->
            <div class="hamburger-menu-icon" @click="toggleMenu">
                <div class="hamburger-menu-icon__line hamburger-menu-icon__line--top"></div>
                <div class="hamburger-menu-icon__line hamburger-menu-icon__line--middle"></div>
                <div class="hamburger-menu-icon__line hamburger-menu-icon__line--bottom"></div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        if (this.$route.path.includes('projects/')) {
            this.isProjectPage = true;
        } else {
            this.isProjectPage = false;
        }
    },
    watch: {
        $route(to) {
            if (to.path.includes('projects/')) {
                this.isProjectPage = true;
            } else {
                this.isProjectPage = false;
            }
        }
    },
    data() {
        return {
            isProjectPage: false
        }
    }
}

</script>

<style lang="scss" scoped>
a {

    font-weight: 500;
    padding: 5px 0;
}

i {
    opacity: 0;
    font-size: .3rem;
    margin-right: 5px;
}

.logo {
    border: none !important;
}

.router-link-active,
.router-link-exact-active {
    border-bottom: 1px solid black;
}

.contact-btn {
    padding: 2px 10px;
    margin-left: 20px;
}

.contact-btn:hover {
    background-color: #fff !important;
    color: #000 !important;
}
</style>