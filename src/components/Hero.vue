<template>
    <div class="container">
        <div class="desc-container">

            <div class="desc">
                <span>Artroditie, <br> modern ve özgün tasarımlar üretmeyi amaçlayan, <br> Denizli merkezli bir tasarım stüdyosudur.</span>
            </div>
            <div class="details-btn hover-underline-animation">
                <router-link to="/studio">Detaylı Bilgi <i class="fa-solid fa-chevron-right"></i> </router-link>
            </div>
        </div>
        <div class="hero-img-container">
            <img src="../assets/hero/hero-img.png" alt="Hero Image">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.container{
    padding: 100px;
    height: 100vh;
}

.desc-container{
    display: flex;
    align-items: flex-start;
}
.desc{
    max-width: 300px;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 50px;
    margin-right: 300px;
}

.details-btn{
    a{
        font-size: 20px;
        color: #000;
        text-decoration: none;
        text-align: center;
        i{
            margin-left: 10px;
            
        }
    }
}

.hero-img-container{
    text-align: right;
    img{
        width: 1080px;
    }
}


</style>