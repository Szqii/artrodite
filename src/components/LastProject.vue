<template>
    <div class="container">
        <div class="title hover-underline-animation">
            <span>Son çalışmamız</span>
        </div>
        <div class="img-container">
            <img src="../assets/hero/berkand-img.png" alt="Havalan Image">
            <div class="img-desc">
                <span>Berkand</span>
                <small>Kablo makineleri</small>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.container {
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
}

.title {
    font-size: 24px;
    font-weight: 200;
    white-space: nowrap;
}

.img-container {
    text-align: right;

    img {
        width: 1080px;
    }

    .img-desc{
        text-align: left;
        display: flex;
        flex-direction: column;

        small{
            color: #6F6F6F;
        }
    }
}
</style>