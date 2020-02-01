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
                <input v-model="quantity" type="text" value="1" min="1">
                <a @click.prevent="handleBuyProduct" href="#" class="price"> {{formatPrice}} </a>
            </template>
            <span v-else class="price">{{formatPrice}}</span>
        </div>
    </div>
</template>

<script>
    import {toCurrency, validateQuantity} from "../helpers";
    import {NOTIFY_GREATER_THAN_ONE, NOTIFY_IS_A_NUMBER, NOTIFY_IS_EMPTY} from '../constants/config';

    export default {
        name: 'product-item',
        props: {
            product: {type: Object, default: {}}
        },
        data() {
            return {
                quantity: 1,
                NOTIFY_GREATER_THAN_ONE
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
            handleBuyProduct(e){
                let check = validateQuantity(this.quantity);
                
                if(check === 0) {
                    console.log("valid", this.quantity);
                } else {
                    let text = '';
                    if(check === 1){
                        text = NOTIFY_IS_EMPTY;
                    } else if (check === 2) {
                        text = NOTIFY_GREATER_THAN_ONE;
                    } else {
                        text = NOTIFY_IS_A_NUMBER;
                    }
                    this.$notify({
                        group: 'notify',
                        type: 'error',
                        title: 'Error!',
                        text: text
                    });
                }
            }
        }
    }
</script>

<style>

</style>
