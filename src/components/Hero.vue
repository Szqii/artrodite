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
                <!-- <video ref="video1"  v-show="allVideosLoaded" class="rounded d-none d-md-block mt-0 mt-md-5" src="https://res.cloudinary.com/duveeqta0/video/upload/v1677492220/hero-video-1_iti3qj.mp4" muted loop /> -->
                    <video ref="video1" :src="videoUrl1" v-show="allVideosLoaded" class="rounded d-none d-md-block mt-0 mt-md-5" autoplay muted></video>
            </div>
            <div class="col-12 col-md-4 px-4 d-flex flex-column justify-content-between mt-4 mt-md-0 text-justify">
                <span class="mb-0 mb-md-5 text-artrodite-gray animate__animated animate__fadeInUp">
                    Çalışmalarımız sizin ihtiyaçlarınıza özel olarak tasarlanır. <span class="makeItBlack"> Önceden
                        hazırlanmış taslaklar
                        kullanılmaz.</span></span>
                <!-- <img src="/hero/hero-2.jpg" class="d-none d-md-block mt-0 mt-md-5" alt="" style="max-width: 100%;"> -->
                <!-- <video ref="video2" v-show="allVideosLoaded" class="rounded d-none d-md-block mt-0 mt-md-5" src="https://res.cloudinary.com/duveeqta0/video/upload/v1677492213/hero-video-2_b7ilok.mp4" muted loop /> -->
                        <video ref="video2" :src="videoUrl2" v-show="allVideosLoaded" class="rounded d-none d-md-block mt-0 mt-md-5" autoplay muted></video>

            </div>
            <div class="col-12 col-md-4 px-4 d-flex flex-column justify-content-between my-4 my-md-0">
                <router-link class="mb-0 mb-md-5 makeItBlack animate__animated animate__fadeInUp" to="/studio"> <span
                        class="hover-underline-animation"> Detaylı Bilgi <i class="fa-solid fa-chevron-right" />
                    </span></router-link>
                <!-- <img src="/hero/hero-3.jpg" class="d-none d-md-block mt-0 mt-md-5" alt="" style="max-width: 100%;"> -->
                <!-- <video ref="video3" v-show="allVideosLoaded" class="rounded d-none d-md-block mt-0 mt-md-5" src="https://res.cloudinary.com/duveeqta0/video/upload/v1677492214/hero-video-3_qnynuo.mp4" muted loop /> -->
                <video ref="video3" :src="videoUrl3" v-show="allVideosLoaded" class="rounded d-none d-md-block mt-0 mt-md-5" autoplay muted></video>
            </div>
            <video :src="videoUrlMobile" class="d-block d-md-none" autoplay muted loop />
        </div>
    </div>
</template>

<script>
// export default {
//     data(){
//         return {
//             videos: ['hero-video-1.mov', 'hero-video-2.mov', 'hero-video-3.mov'],
//             videosLoaded: false
//         }
//     },
//     mounted() {
//         const promises = [];
//         for (let i = 0; i < this.videos.length; i++) {
//             const promise = new Promise((resolve) => {
//                 const video = document.createElement("video");
//                 video.addEventListener("canplaythrough", () => {
//                     resolve();
//                 });
//                 video.src = this.videos[i].url;
//                 video.load();
//             });
//             promises.push(promise);
//         }
//         Promise.all(promises).then(() => {
//             this.videosLoaded = true;
//         });
//     }
// }
import ImageKit from "imagekit-javascript";
export default {
    data() {
        return {
            allVideosLoaded: false,
            imageKit: new ImageKit({
                publicKey: "public_9v9o6r+FiRVg2pk39KQ4u6KNT6M=",
                urlEndpoint: "https://ik.imagekit.io/artrodite",
                authenticationEndpoint: "https://artrodite.com.tr/imagekit/auth",
            }),
            videoUrl1: "",
            videoUrl2: "",
            videoUrl3: "",
            videoUrlMobile: "",
        };
    },
    async mounted() {

        this.setVideoUrls();
        this.$refs.video1.addEventListener("loadeddata", this.checkAllVideosLoaded);
        this.$refs.video2.addEventListener("loadeddata", this.checkAllVideosLoaded);
        this.$refs.video3.addEventListener("loadeddata", this.checkAllVideosLoaded);
    },
    methods: {
        setVideoUrls(){
            this.videoUrl1 = this.imageKit.url({
                path: "/hero-video-1.mp4?tr=f-auto",
            });
            this.videoUrl2 = this.imageKit.url({
                path: "/hero-video-2.mp4?tr=f-auto",
            });
            this.videoUrl3 = this.imageKit.url({
                path: "/hero-video-3.mp4?tr=f-auto",
            });
            this.videoUrlMobile = this.imageKit.url({
                path: "/hero-mobile-video.mp4?tr=f-auto",
            });
        },
        checkAllVideosLoaded() {
            if (
                this.$refs.video1.readyState === 4 &&
                this.$refs.video2.readyState === 4 &&
                this.$refs.video3.readyState === 4
            ) {
                this.allVideosLoaded = true;
            }
        },
        startVideos() {
            this.$refs.video1.play();
            this.$refs.video2.play();
            this.$refs.video3.play();
        },
    },
    watch: {
        allVideosLoaded(newValue) {
            if (newValue) {
                this.startVideos();
            }
        },
    },
};

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