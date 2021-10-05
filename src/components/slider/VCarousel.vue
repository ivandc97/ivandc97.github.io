<template>
    <div class="v-carousel">
        <div
            class="v-carousel__wrap"
            :style=" { 'transform': 'translate' + '(-' + (100 * (currentSlideIndex)) + '%)' }"
        >
            <v-carousel-item
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
            />
        </div>

        <button
            @click="prevSlide()"
            class="v-carousel__prev"
        >
            <span class="material-icons">chevron_left</span>
        </button>
         <button
            @click="nextSlide()"
            class="v-carousel__next"
        >
            <span class="material-icons">chevron_right</span>
        </button>
        <div class="v-carousel__pagination">
            <button
                class="v-carousel__pagination-item"
                :class="{ 'is-active': currentSlideIndex === (index.id - 1) }"
                @click="paginationSlide(index.id)"
                v-for="index in carousel_data"
                :key="index.id"
            >
            </button>
        </div>
    </div>
</template>

<script>
    import VCarouselItem from './VCarouselItem'

    export default {
        components: {
            VCarouselItem
        },
        props: {
            carousel_data: {
                type: Array,
                default: () => []
            }
        },
        data: () => ({
            currentSlideIndex: 0
        }),
        mounted() {
            this.slideshowStart()
        },
        computed: {},
        methods: {
            prevSlide() {
                this.slideshowStop()
                if(this.currentSlideIndex > 0) {
                    this.currentSlideIndex--
                } else {
                    this.currentSlideIndex = this.carousel_data.length - 1
                }
                this.slideshowStart()
            },
            nextSlide() {
                this.slideshowStop()
                if(this.currentSlideIndex < this.carousel_data.length - 1) {
                    this.currentSlideIndex++
                } else {
                    this.currentSlideIndex = 0
                }
                this.slideshowStart()
            },
            slideshowStart() {
                this.slideshow = setInterval(() => {
                    this.nextSlide()
                }, 3000)
            },
            slideshowStop() {
                clearInterval(this.slideshow)
            },
            paginationSlide(index) {
                this.currentSlideIndex = index - 1
            }
        }
    };
</script>
