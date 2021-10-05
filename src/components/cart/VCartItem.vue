<template>
    <div class="v-cart-item">
        <div class="v-cart-item__wrap">
            <picture class="v-img">
                <img
                    src="https://picsum.photos/50/50?v=${_uid}`"
                >
            </picture>
            <h3 class="v-cart-item__title">
                {{ cartItemData.title }}
            </h3>
            <p class="v-cart-item__text">
                Price: {{ cartItemData.price }}
            </p>
            <div class="v-cart-item__quantity">
                Quantity:
                <span class="btn v-cart-item__quantity-counter">
                    <span
                        @click="decrementItem"
                        class="v-cart-item__quantity-item"
                    >
                        -
                    </span>
                    {{ cartItemData.quantity }}
                    <span
                        @click="incrementItem"
                        class="v-cart-item__quantity-item"
                    >
                        +
                    </span>
                </span>
            </div>
            <button
                class="btn btn-dark"
                @click="deleteFromCart"
            >
                x
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            cartItemData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data: () => ({}),
        computed: {},
        mounted() {
            // this.$set(this.cartItemData, 'quantity', '1');
        },
        methods: {
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            },
            deleteFromCart() {
                this.$emit('deleteFromCart');
            }
        }
    };
</script>
