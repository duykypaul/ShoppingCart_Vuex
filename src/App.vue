<template>
    <div id="app">
        <div class="container">
            <comp-title/>
            <div class="row">
                <product-list/>
                <cart-wrapper/>
            </div>
        </div>
        <notifications group="notify" :duration="2000" position="bottom right"/>
        <comp-loading :class="{show : isLoading}"/>
    </div>

</template>

<script>
    import CompTitle from "./components/CompTitle";
    import CartWrapper from "./components/CartWrapper";
    import ProductList from "./components/ProductList";
    import CompLoading from "./components/CompLoading";
    import {mapState} from "vuex";

    export default {
        name: 'app',
        components: {CompLoading, ProductList, CartWrapper, CompTitle},
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'isLoading'
            ])
        }
    }
</script>

<style>
    .vue-notification-group{
        padding-right: 10px;
        padding-bottom: 10px;
    }
</style>
