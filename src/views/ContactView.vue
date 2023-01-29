<template>
    <div class="container">
        <div class="column">
            <div class="text">
                İletişim
            </div>

        </div>
        <div class="column">
            <div class="text desc">
                Her projeye özenle çalıştığımız için başarılıyız.
            </div>
            <div class="img-container">
                <img src="../assets/contact/contact-1.png"
                    alt="">
            </div>
        </div>
        <div class="column">
            <div class="text">
                <div class="instagram-link">
                    <a  href="https://www.instagram.com/artrodite_studio/" target="_blank">Instagram <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/artrodite/" target="_blank">LinkedIn <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                </div>

            </div>
            <div class="img-container">
                <img src="../assets/contact/contact-2.png"
                    alt="">
            </div>
        </div>
        <div class="column">
            <div class="text">
                <a href="mailto:artrodite@gmail.com">Email <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
            </div>
            <div class="img-container">
                <img src="../assets/contact/contact-3.png"
                    alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    padding: 100px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
}

.column {
    width: 20%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:last-child {
        margin-right: 0;
    }

    .text {
        font-size: 24px;
        line-height: 32.4px;
        height: 300px;

        .instagram-link{
            margin-bottom: 70px;
        }
    }

    .desc{
        max-width: 70%;
    }

    .img-container {
        display: flex;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }

}

i{
    margin-left: 10px;
    font-size: 20px;
}
</style>