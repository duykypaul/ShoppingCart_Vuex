<template>
    <div id="app">
        <div class="container">
            <comp-title/>
            <div class="row">
                <product-list/>
                <cart-wrapper/>
            </div>
        </div>
        <notifications group="notify" :duration="100000" position="bottom right"/>
    </div>

</template>

<script>
    import CompTitle from "./components/CompTitle";
    import CartWrapper from "./components/CartWrapper";
    import ProductList from "./components/ProductList";

    export default {
        name: 'app',
        components: {ProductList, CartWrapper, CompTitle},
        data() {
            return {}
        }
    }
</script>

<style>
    .vue-notification-group{
        padding-right: 10px;
        padding-bottom: 10px;
    }
</style>
