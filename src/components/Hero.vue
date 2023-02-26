<template>
    <div class="row mx-auto justify-content-between align-items-start px-2 px-lg-100 h-screen overflow-hidden">
        <div class="col-lg-3 d-none d-lg-inline-block animate__animated animate__fadeInUp">
            <div class="title-text" style="cursor: default;">artrodite</div>
        </div>
        <div class="row col-12 col-lg-9 mx-auto">
            <div class="col-12 col-md-4 px-4 d-flex flex-column justify-content-between text-justify">
                <span class="mb-0 mb-md-5 text-artrodite-gray animate__animated animate__fadeInUp">Artrodite <span
                        class="makeItBlack">özgün ve kaliteli tasarımlar</span> oluşturarak alanında fark yaratmayı
                    amaçlayan,
                    <span class="makeItBlack">Denizli</span> merkezli bir tasarım stüdyosudur.</span>
                <!-- <img src="/hero/hero-1.jpg" class="d-none d-md-block mt-0 mt-md-5 " alt="" style="max-width: 100%;"> -->
                <video class="rounded d-none d-md-block mt-0 mt-md-5" :src="'/hero/' + videos[0]" autoplay muted loop />
            </div>
            <div class="col-12 col-md-4 px-4 d-flex flex-column justify-content-between mt-4 mt-md-0 text-justify">
                <span class="mb-0 mb-md-5 text-artrodite-gray animate__animated animate__fadeInUp">
                    Çalışmalarımız sizin ihtiyaçlarınıza özel olarak tasarlanır. <span class="makeItBlack"> Önceden
                        hazırlanmış taslaklar
                        kullanılmaz.</span></span>
                <!-- <img src="/hero/hero-2.jpg" class="d-none d-md-block mt-0 mt-md-5" alt="" style="max-width: 100%;"> -->
                <video class="rounded d-none d-md-block mt-0 mt-md-5" :src="'/hero/' + videos[1]" autoplay muted loop />

            </div>
            <div class="col-12 col-md-4 px-4 d-flex flex-column justify-content-between my-4 my-md-0">
                <router-link class="mb-0 mb-md-5 makeItBlack animate__animated animate__fadeInUp" to="/studio"> <span
                        class="hover-underline-animation"> Detaylı Bilgi <i class="fa-solid fa-chevron-right" />
                    </span></router-link>
                <!-- <img src="/hero/hero-3.jpg" class="d-none d-md-block mt-0 mt-md-5" alt="" style="max-width: 100%;"> -->
                <video class="rounded d-none d-md-block mt-0 mt-md-5" :src="'/hero/' + videos[2]" autoplay muted loop />

            </div>
            <img src="../assets/hero/hero-mobile.jpg" class="d-block d-md-none" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            videos: ['hero-video-1.mov', 'hero-video-2.mov', 'hero-video-3.mov'],
            videosLoaded: false
        }
    },
    mounted() {
        const promises = [];
        for (let i = 0; i < this.videos.length; i++) {
            const promise = new Promise((resolve) => {
                const video = document.createElement("video");
                video.addEventListener("canplaythrough", () => {
                    resolve();
                });
                video.src = this.videos[i].url;
                video.load();
            });
            promises.push(promise);
        }
        Promise.all(promises).then(() => {
            this.videosLoaded = true;
        });
    }
}

</script>

<style lang="scss" scoped>
// .container {
//     display: flex;
//     justify-content: space-between;
//     padding: 100px;
//     height: 100vh;

//     .title {
//         margin-right: 200px;
//         font-weight: 600;
//         font-size: 1.5rem;
//     }
// }

// .desc-container {
//     display: flex;
//     max-width: 1080px;

//     .desc {
//         padding: 0 20px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: center;
//         min-height: 500px;

//         img {

//             width: 100%;
//         }
//     }
// }
</style>