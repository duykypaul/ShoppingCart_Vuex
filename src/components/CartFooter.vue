<template>
    <tfoot id="my-cart-footer">
    <!-- CART FOOTER -->
    <tr>
        <td colspan="4">There are <b>{{totalQuantity}}</b> items in your shopping cart.</td>
        <td colspan="2" class="total-price text-left">{{totalPrice}} USD</td>
    </tr>
    </tfoot>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'cart-footer',
        data() {
            return {}
        },
        computed: {
            ...mapState({
                totalQuantity: state => state.cart.totalQuantity,
                totalPrice: state => state.cart.totalPrice,
            })
        }
    }
</script>

<style>

</style>
