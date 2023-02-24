<template>
    <transition name="fade" mode="out-in" enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster">
        <loading v-if="loading" />
        <div v-else>
            <div v-for="(n, index) in 19" :key="index" style="width: 100vw;">
                <img :src="'/berkand-project/' + n + '.png'" alt="" style="width: 100%; height: 100%;">
            </div>
        </div>
    </transition>
</template>

<script>
import Loading from '@/components/Loading.vue';
export default {
    components: {
        Loading
    },
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        window.scrollTo(0, 0);
        console.log('mounted');
        setTimeout(() => {
            this.loading = false;
        }, 1000)
    }
}

</script>

<style lang="scss" scoped></style>