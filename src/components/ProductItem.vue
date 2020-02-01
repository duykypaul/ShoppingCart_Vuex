<template>
    <div class="media product">
        <div class="media-left">
            <a href="#">
                <img class="media-object" :src="urlImage" alt="charmander">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{product.name}}</h4>
            <p>{{product.summary}}</p>
            <template v-if="product.canBuy">
                <input v-model="quantity" type="number" value="1" min="1">
                <a @click.prevent="handleBuyProduct" href="#" class="price"> {{formatPrice}} </a>
            </template>
            <span v-else class="price">{{formatPrice}}</span>
        </div>
    </div>
</template>

<script>
    import {
        toCurrency,
        validateQuantity
    } from "../helpers";
    import {
        NOTIFY_ACTION_ADD,
        NOTIFY_GREATER_THAN_ONE,
        NOTIFY_IS_A_NUMBER,
        NOTIFY_IS_EMPTY
    } from '../constants/config';
    
    import {mapActions} from 'vuex';

    export default {
        name: 'product-item',
        props: {
            product: {type: Object, default: {}}
        },
        data() {
            return {
                quantity: 1
            }
        },
        computed: {
            urlImage() {
                return "/dist/images/" + this.product.image;
            },
            formatPrice() {
                return toCurrency(this.product.price);
            }
        },
        methods: {
            ...mapActions({
                'actionBuyProduct': 'cart/handleBuyProduct'
            }),
            handleBuyProduct(){
                let check = validateQuantity(this.quantity);
                if(check === 0) {
                    let data = {
                        product: this.product,
                        quantity: parseInt(this.quantity)
                    };
                    this.actionBuyProduct(data);
                    this.$notify(NOTIFY_ACTION_ADD);
                    this.quantity = 1;
                } else {
                    if(check === 1){
                        this.$notify(NOTIFY_IS_EMPTY);
                    } else if (check === 2) {
                        this.$notify(NOTIFY_GREATER_THAN_ONE);
                    } else {
                        this.$notify(NOTIFY_IS_A_NUMBER);
                    }
                    
                }
            }
        }
    }
</script>

<style>

</style>
