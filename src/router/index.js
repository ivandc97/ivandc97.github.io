import Vue from 'vue';
import VueRouter from 'vue-router';

import VCatalog from '../components/catalog/VCatalog';
import VCart from '../components/cart/VCart';
import VMain from '../components/main/VMain';
import VProduct from '../components/product/VProduct';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: VMain
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: VCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: VCart,
            props: true
        },
        {
            path: '/product/:article',
            name: 'product',
            component: VProduct
          }
    ]
});

export default router;
