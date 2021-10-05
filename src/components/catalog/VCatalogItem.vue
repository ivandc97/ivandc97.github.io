<template>
    <div class="v-catalog-item">
        <div class="v-card">
            <picture class="v-img">
                <img
                    :src="`https://picsum.photos/300/300?v=${_uid}`"
                >
            </picture>
            <div class="v-card-body">
                <h3 class="v-card-title">
                    <router-link class="v-card-link" :to="'/product/' + productData.article">
                        {{ productData.title }}
                    </router-link>
                </h3>
                <div class="v-card-wrap">
                    <p class="v-card-text">
                        Price: {{ productData.price }}
                    </p>
                    <button
                        class="btn btn-dark"
                        @click="addToCart"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            productData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data: () => ({}),
        computed: {},
        methods: {
            addToCart() {
                this.$emit('addToCart', this.productData);
            }
        }
    };
</script>
