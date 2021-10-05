<template>
    <div class="v-main l-wrap">
        <v-carousel
            :carousel_data="slider_items"
        />
        <v-slider style="display: none"/>
    </div>
</template>

<script>
    import VSlider from './VSlider';
    import VCarousel from '../slider/VCarousel.vue';


    export default {
        components: {
            VSlider,
            VCarousel
        },
        props: {},
        data: () => ({
            slider_items: [
                {
                    id: 1,
                    name: "img1",
                    img: "https://picsum.photos/1920/1080?v=${_uid}`"
                },
                {
                    id: 2,
                    name: "img2",
                    img: "https://picsum.photos/1920/1080?v=${_uid}`"
                },
                {
                    id: 3,
                    name: "img3",
                    img: "https://picsum.photos/1920/1080?v=${_uid}`"
                },
                {
                    id: 4,
                    name: "img4",
                    img: "https://picsum.photos/1920/1080?v=${_uid}`"
                },
                {
                    id: 5,
                    name: "img5",
                    img: "https://picsum.photos/1920/1080?v=${_uid}`"
                }
            ]
        }),
        computed: {},
        methods: {}
    };
</script>
