<template>
    <tr>
        <th scope="row">{{index}}</th>
        <td>{{cart.product.name}}</td>
        <td>{{formatPrice}}</td>
        <td><input :value="cart.quantity" type="number" value="1" min="1"></td>
        <td><strong>{{formatSubTotal}}</strong></td>
        <td>
            <a class="label label-info update-cart-item" href="#" data-product="">Update</a>
            <a class="label label-danger delete-cart-item" href="#" @click.prevent="handleDelete">Delete</a>
        </td>
    </tr>
</template>

<script>
    import {
        toCurrency,
        validateQuantity
    } from "../helpers";
    import {mapActions} from "vuex";
    import {NOTIFY_ACTION_DELETE} from "../constants/config";
    
    export default {
        name: 'cart-body-item',
        props: {
            cart: {type: Object, default: {}},
            index: {type: Number, default: 0}
        },
        data() {
            return {}
        },
        computed: {
            formatPrice() {
                return toCurrency(this.cart.product.price);
            },
            formatSubTotal() {
                return toCurrency(this.cart.product.price * this.cart.quantity);
            }
        },
        methods: {
            ...mapActions({
                'actionDelete': 'cart/handleDelete'
            }),
            handleDelete(){
                if(confirm("Do you want to remove product?")) {
                    this.actionDelete(this.cart);
                    this.$notify(NOTIFY_ACTION_DELETE);
                }
            }
        }
    }
</script>

<style>

</style>
