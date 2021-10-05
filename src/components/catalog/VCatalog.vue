<template>
    <div class="v-catalog l-wrap">
            <div class="v-catalog__cart">
                <div class="v-select">
                    <select class="btn" @change="queryFilter" v-model="filterValue" required>
                        <option value="" disabled selected>Choose category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                        <option value="4">Category 4</option>
                    </select>
                    <button v-if="filterValue" @click="clearFilter" class="v-select-btn">
                        <span class="material-icons">
                            close
                        </span>
                    </button>
                </div>
                <router-link :to="{ name: 'cart', params: { cartData: getCart }}" class="btn">
                    Cart: {{ getCart.length }}
                </router-link>
            </div>
        <div class="v-catalog__wrap">
            <v-catalog-item
                v-for="(product, index) in filter"
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
        data: () => ({
            filterValue: ''
        }),
        mounted() {
            this.queryCheck(),
            window.onpopstate = () => {
                this.queryCheck()
            }
        },
        computed: {
            ...mapGetters([
                'getProducts',
                'getCart'
            ]),
            filter() {
                if(this.filterValue === '') {
                    return this.getProducts
                } else {
                    return this.getProducts.filter(item => item.category === this.filterValue)
                }
            }
        },
        methods: {
             ...mapActions([
                 'pushToCart'
             ]),
            addToCart(data) {
                this.pushToCart(data);
            },
            clearFilter() {
                this.filterValue = ''
                this.$router.push({ query: {q1: this.filterValue} })
            },
            queryFilter() {
                this.$router.push({ query: {q1: this.filterValue} })
            },
            queryCheck() {
                this.filterValue = this.$route.query.q1
            }
        }
    };
</script>
