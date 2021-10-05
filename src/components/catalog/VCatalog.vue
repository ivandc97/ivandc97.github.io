<template>
    <div class="v-catalog l-wrap">
            <div class="v-catalog__cart">
                <router-link :to="{ name: 'cart', params: { cartData: getCart }}" class="btn">
                    Cart: {{ getCart.length }}
                </router-link>
            </div>
        <div class="v-catalog__wrap">
            <v-catalog-item
                v-for="(product, index) in getProducts"
                :key="index"
                :product-data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
    import VCatalogItem from './VCatalogItem';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {
            VCatalogItem
        },
        props: {},
        data: () => ({}),
        computed: {
            ...mapGetters([
                'getProducts',
                'getCart'
            ]),
        },
        methods: {
             ...mapActions([
                 'pushToCart'
             ]),
            addToCart(data) {
                this.pushToCart(data);
            }
        }
    };
</script>
