import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    namespaced: true,
    state: {
        products: [
            {
                title: "Title 1",
                price: "150",
                article: "T1",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            },
            {
                title: "Title 2",
                price: "170",
                article: "T2",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            },
            {
                title: "Title 3",
                price: "200",
                article: "T3",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            },
            {
                title: "Title 4",
                price: "230",
                article: "T4",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            },
            {
                title: "Title 5",
                price: "120",
                article: "T5",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            },
            {
                title: "Title 6",
                price: "220",
                article: "T6",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            },
            {
                title: "Title 7",
                price: "180",
                article: "T7",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            },
            {
                title: "Title 8",
                price: "200",
                article: "T8",
                available: true,
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, nemo ducimus! Tempore omnis exercitationem, in commodi dignissimos magnam vero mollitia cupiditate repellat veniam, excepturi, sit ab laboriosam sapiente beatae perferendis!'
            }
        ],
        cart: [],
        darkMode: JSON.parse(localStorage.getItem("darkMode"))
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getCart(state) {
            return state.cart;
        }
    },
    mutations: {
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(item => {
                  if (item.article === product.article) {
                      isProductExists = true;
                      item.quantity++;
                  }
                });
                if (!isProductExists) {
                    state.cart.push({
                        ...product,
                        quantity: 1
                    });
                }
            } else {
                state.cart.push({
                    ...product,
                    quantity: 1
                });
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        },
        TOGGLE_DARK_MODE: (state) => {
            localStorage.setItem("darkMode", state.darkMode = !state.darkMode)

            if(state.darkMode) {
                document.documentElement.classList.add('dark-theme');
            } else {
                document.documentElement.classList.remove('dark-theme');
            }
        },
        CHECK_DARK_MODE_CLASS: (state) => {
            if(state.darkMode) {
                document.documentElement.classList.add('dark-theme');
            }
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if(state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }
    },
    actions: {
        pushToCart({commit}, product) {
            commit('SET_CART', product);
        },
        spliceFromCart({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        },
        toggleDarkMode({commit}) {
            commit('TOGGLE_DARK_MODE');
        },
        checkDarkMode({commit}) {
            commit('CHECK_DARK_MODE_CLASS');
        },
        incrementCartItem({commit}, index) {
            commit('INCREMENT', index)
        },
        decrementCartItem({commit}, index) {
            commit('DECREMENT', index)
        }
    }
});

export default store;

