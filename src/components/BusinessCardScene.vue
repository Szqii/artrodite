<template>
    <!-- eslint-disable  -->
    <Suspense>
        <TresCanvas shadows alpha :output-encoding="sRGBEncoding">
            <OrbitControls />
            <!-- <TresPerspectiveCamera :position="[0, 0, 10]" :fov="75" :near="1" :far="100" /> -->
            <TresPerspectiveCamera :position="[0, 0, 15]" :fov="75" :aspect="1" :near="0.1" :far="1000" />
            <TresScene :fog="'#82DBC5'">
                <!-- <TresMesh /> -->
                <GLTFModel ref="cardRef" path="/models/business-card/card.gltf" draco />
                <TresAmbientLight :intensity="2" />
                <TresDirectionalLight :position="[0, 0, 20]" :intensity="2" cast-shadow />
                <TresDirectionalLight :position="[0, 0, -20]" :intensity="2" cast-shadow />
               
            </TresScene>
        </TresCanvas>
    </Suspense>
</template>


<script setup>
import {  shallowRef } from 'vue';
import { OrbitControls, GLTFModel } from '@tresjs/cientos';
// import { useRenderLoop } from '@tresjs/core';


const cardRef = shallowRef();

// const { onLoop } = useRenderLoop()

// onLoop(({ delta }) => {
//     if (!cardRef.value) return
//     cardRef.value.rotation.y += delta * 0.04
//     cardRef.value.rotation.z += delta * 0.02
//     cardRef.value.rotation.x += delta * 0.05
// })



</script>

<style lang="scss" scoped>

</style>