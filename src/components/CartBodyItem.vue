<template>
    <tr>
        <th scope="row">{{index}}</th>
        <td>{{cart.product.name}}</td>
        <td>{{formatPrice}}</td>
        <td><input :value="cart.quantity" @blur="handleUpdate" type="text" value="1" min="1"></td>
        <td><strong>{{formatSubTotal}}</strong></td>
        <td>
            <a class="label label-info update-cart-item" href="#" >Update</a>
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
    import {
        NOTIFY_ACTION_UPDATE,
        NOTIFY_ACTION_DELETE,
        NOTIFY_GREATER_THAN_ONE, NOTIFY_IS_A_NUMBER,
        NOTIFY_IS_EMPTY
    } from "../constants/config";
    
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
                'actionDelete': 'cart/handleDelete',
                'actionUpdate': 'cart/handleUpdate',
                'setLoading': 'setLoading'
            }),
            handleDelete(){
                if(confirm("Do you want to remove product?")) {
                    this.actionDelete(this.cart);
                    this.$notify(NOTIFY_ACTION_DELETE);
                }
            },
            handleUpdate(e){
                this.setLoading()
                // must using arrow function when used setLoading
                setTimeout(() => {
                    let check = validateQuantity(e.target.value);
                    if(check === 0) {
                        let data = {
                            product: this.cart.product,
                            quantity: parseInt(e.target.value)
                        };
                        this.actionUpdate(data);
                        this.$notify(NOTIFY_ACTION_UPDATE);
                    } else {
                        if(check === 1){
                            this.$notify(NOTIFY_IS_EMPTY);
                        } else if (check === 2) {
                            this.$notify(NOTIFY_GREATER_THAN_ONE);
                        } else {
                            this.$notify(NOTIFY_IS_A_NUMBER);
                        }
                        e.target.value = this.cart.quantity;
                    }
                    this.setLoading(false);
                },1000)
            }
        }
    }
</script>

<style>

</style>
