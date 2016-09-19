<template>
	<div class="index">{{allmsg1}}</div>
</template>
<style lang="less">
	.index{
		margin-top: 50px;
	}
</style>
<script>
	import store from "../data/store.js"
	// import store from "../../node_modules/storejs/dist/store.min.js"
	export default {
			data(){
				return {
					allmsg1:store.state.data
					}
				}
			}
</script>