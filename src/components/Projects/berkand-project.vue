<template>
    <div>
        <div v-for="(n, index) in 19" :key="index" style="height: 100vh; width: 100vw;">
            <img :src="'/berkand-project/' + n + '.png'" alt="" style="width: 100%; height: 100%;">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>