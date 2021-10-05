<template>
    <div class="l-wrap">
        <router-link :to="{ name: 'catalog'}" class="btn v-product-back" />
        <div class="v-product">
            <picture class="v-img v-product-img">
                <img
                    :src="`https://picsum.photos/300/300?v=${_uid}`"
                >
            </picture>
            <div class="v-product-body">
                <h3 class="v-product-title">
                    {{ productInfo.title }}
                </h3>
                <div class="v-product-content">
                    <hr>
                    <div class="v-product-wrap">
                        <p class="v-product-price">
                            Price: {{ productInfo.price }}
                        </p>
                        <button
                            class="btn btn-dark"
                        >
                            Add to cart
                        </button>
                    </div>
                    <p class="v-product-text">
                        {{ productInfo.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        components: {},
        props: {},
        data: () => ({
            productInfo: {}
        }),
        computed: {
            ...mapGetters([
                'getProducts'
            ])
        },
        mounted() {
            this.task()
        },
        methods: {
            task() {
                this.productInfo = this.getProducts.find(item => item.article === this.$route.params.article);
            }
        }
    };
</script>
