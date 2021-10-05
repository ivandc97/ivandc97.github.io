<template>
    <div class="v-carousel-item">
        <picture class="v-img v-img--hd">
            <img :src="item_data.img" alt="">
        </picture>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            item_data: {
                type: Object,
                default: () => {}
            }
        },
        data: () => ({}),
        computed: {},
        methods: {}
    };
</script>
