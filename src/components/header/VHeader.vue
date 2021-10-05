<template>
    <div class="v-header">
        <div class="v-header__inner l-wrap">
            <router-link :to="{ name: 'main' }">
                <span class="material-icons">logo_dev</span>
            </router-link>
            <ul class="v-header__list">
                <li class="v-header__list-item">
                    <router-link :to="{ name: 'catalog' }">
                        Catalog
                    </router-link>
                </li>
                <li class="v-header__list-item">
                    <router-link :to="{ name: 'cart', params: { cartData: getCart }}">
                        Cart
                        <span class="v-header__cart">
                            {{ getCart.length }}
                        </span>
                    </router-link>
                </li>
                <li class="v-header__list-item">
                    <button class="switch btn" id="theme-toggle" @click="changeMode"></button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';


    export default {
        components: {},
        props: {},
        data: () => ({}),
        computed: {
            ...mapGetters([
                'getCart'
            ])
        },
        mounted() {
            this.checkDarkMode();
        },
        methods: {
            ...mapActions([
                'toggleDarkMode',
                'checkDarkMode'
            ]),
            changeMode() {
                this.toggleDarkMode();
            }
        }
    };
</script>
