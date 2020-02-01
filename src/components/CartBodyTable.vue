<template>
    <tbody id="my-cart-body">
    <!-- CART BODY -->
        <template v-if="carts.length">
            <cart-body-item v-for="(item, index) in carts" :key="index"/>
        </template>
        <tr v-else>
            <th colspan="6">{{NOTI_EMPTY}}</th>
        </tr>
    
    </tbody>
</template>

<script>
    import {NOTI_EMPTY} from '../constants/config';
    import {mapState} from 'vuex';
    import CartBodyItem from "./CartBodyItem";

    export default {
        name: 'cart-body-table',
        components: {CartBodyItem},
        data() {
            return {
                NOTI_EMPTY
            }
        },
        computed: {
            ...mapState({
                carts: state => state.cart.cartList
            })
        }
    }
</script>

<style>

</style>
