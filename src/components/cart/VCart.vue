<template>
    <div class="v-cart l-wrap">
        <h2>Cart</h2>
        <v-cart-item
            v-for="(item, index) in cartData"
            :key="item.article"
            :cart-item-data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
         <div class="v-cart-item">
            <div class="v-cart__total">
                <p class="v-cart__total-title"> Total: </p>
                <p class="v-cart__total-count">{{ cartTotalCost }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import VCartItem from './VCartItem';
    import {mapActions} from 'vuex';

    export default {
        components: {
            VCartItem
        },
        props: {
            cartData: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data: () => ({}),
        computed: {
            cartTotalCost () {
                let result = []

                if(this.cartData.length) {
                    for(let item of this.cartData) {
                        result.push(item.price * item.quantity)
                    }

                    result = result.reduce((sum, el) => {
                        return sum + el
                    })

                }

                return result
            }
        },
        methods: {
            ...mapActions([
                'spliceFromCart',
                'incrementCartItem',
                'decrementCartItem'
            ]),
            increment(index) {
                this.incrementCartItem(index)
            },
            decrement(index) {
                this.decrementCartItem(index)
            },
            deleteFromCart(index) {
                this.spliceFromCart(index);
            }
        }
    };
</script>
