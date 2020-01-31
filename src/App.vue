<template>
  <div id="app">
    <div class="container">
      <comp-title/>
      <div class="row">
        <product-list/>
        <cart-wrapper />
      </div>
    </div>
  </div>
</template>

<script>
import CompTitle from "./components/CompTitle";
import CartWrapper from "./components/CartWrapper";
import ProductList from "./components/ProductList";
export default {
	  name: 'app',
    components: {ProductList, CartWrapper, CompTitle},
    data () {
		return {
		}
	}
}
</script>

<style>

</style>
