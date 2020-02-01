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
            handleBuyProduct(e){
                if(validateQuantity(this.quantity)) {
                    console.log("valid", this.quantity);
                } else {
                    console.log("inValid", this.quantity);
                }
            }
        }
    }
</script>

<style>

</style>
