<template>
    <div class="v-main l-wrap">
        <v-carousel
            :carousel_data="slider_items"
        />
        <div class="v-main-category">
            <div class="v-main-category__item">
                <router-link :to="{ name: 'catalog', query: { q1: '1' }}" class="v-main-category__content">
                    <picture class="v-img">
                        <img
                            :src="`https://picsum.photos/600/600?v=${_uid}`"
                        >
                    </picture>
                    <span>
                        Category 1
                    </span>
                </router-link>
            </div>
            <div class="v-main-category__item">
                <router-link :to="{ name: 'catalog', query: { q1: '2' }}" class="v-main-category__content">
                    <picture class="v-img">
                        <img
                            :src="`https://picsum.photos/600/600?v=${_uid}`"
                        >
                    </picture>
                    <span>
                        Category 2
                    </span>
                </router-link>
            </div>
            <div class="v-main-category__item">
                <router-link :to="{ name: 'catalog', query: { q1: '3' }}" class="v-main-category__content">
                    <picture class="v-img">
                        <img
                            :src="`https://picsum.photos/600/600?v=${_uid}`"
                        >
                    </picture>
                    <span>
                        Category 3
                    </span>
                </router-link>
            </div>
            <div class="v-main-category__item">
                <router-link :to="{ name: 'catalog', query: { q1: '4' }}" class="v-main-category__content">
                    <picture class="v-img">
                        <img
                            :src="`https://picsum.photos/600/600?v=${_uid}`"
                        >
                    </picture>
                    <span>
                        Category 4
                    </span>
                </router-link>
            </div>
        </div>
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
