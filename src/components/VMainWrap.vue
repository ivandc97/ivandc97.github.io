<template>
    <div class="content">
        <v-header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import VHeader from './header/VHeader';

    export default {
        components: {
            VHeader
        },
        props: {},
        data: () => ({
            modalShow: false
        }),
        computed: {},
        methods: {}
    };
</script>
