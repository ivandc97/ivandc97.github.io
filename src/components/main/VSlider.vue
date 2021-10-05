<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>
    <swiper-slide>
      <picture class="v-img v-img--hd">
          <img
            src="https://picsum.photos/1920/1080?v=${_uid}`"
          >
      </picture>
    </swiper-slide>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data: () => ({
      swiperOption: {
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    })
  }
</script>
