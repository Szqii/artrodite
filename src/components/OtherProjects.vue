<template>
    <div class="container">
        <div class="title hover-underline-animation">
            <span>Projeler</span>
        </div>
        <div class="img-container">
            <div class="plasmet">
                <img src="../assets/hero/plasmet-img.png" alt="Plasmet Image">
                <div class="img-desc">
                    <span>Plasmet</span>
                    <small>Yapı çözümleri</small>
                </div>
            </div>
            <div class="havalan">
                <img class="havalan-img" src="../assets/hero/havalan-img.png" alt="Berkand Image">
                <div class="img-desc">
                    <span>Havalan</span>
                    <small>Havalandırma çözümleri</small>
                </div>
            </div>
        </div>
    </div>
</template>


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
    width: 1080px;
    text-align: right;
    display: flex;
    justify-content: space-between;


    .havalan-img {
        width: 600px;
        height: 200px;
    }
}

.img-desc{
    text-align: left;
    display: flex;
    flex-direction: column;

    small{
        color: #6F6F6F;
    }
}
</style>