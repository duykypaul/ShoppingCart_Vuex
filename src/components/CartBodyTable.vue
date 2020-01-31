<template>
  <tbody id="my-cart-body">
  <!-- CART BODY -->
    <cart-body-item/>
    <cart-body-item/>
  </tbody>
</template>

<script>
import CartBodyItem from "./CartBodyItem";
export default {
    name: 'cart-body-table',
    components: {CartBodyItem},
    data (){
        return {

        }
    }
}
</script>

<style>

</style>
