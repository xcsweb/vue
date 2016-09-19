<template>
	<div class="index">
		<div id="frist">
			<div class="pull_left"><input type="text" v-model="message"></div>
			<div class="pull_right"><button id="submit" v-on:click="tijiao">提交</button></div>
			{{showjson}}
		</div>
	</div>
</template>
<style lang="less">
	.index{
		margin-top: 50px;
		#frist{
			width: 100%;
			.pull_left{
				float: left;
				width: 80%;
				input{
					width: 100%;
					display: block;
					padding: 10px;
				}
			}
			.pull_right{
				float: left;
				width: 20%;
				button{
					width: 100%;
					padding: 10px;
				}
			}
		}
	}
</style>
<script>
	// import store from "../../node_modules/storejs/dist/store.js"
	import store from "../data/store.js"
	export default{
		data(){
			return {
				el:"frist",
				message:"hollo world",
				allmsg:[],
				showjson:""
			}
		},
		methods:{
			tijiao (){
				this.allmsg.push(this.message);
				this.message="";
				// store.set("allmsg",this.allmsg);
				// adddata(state,this.allmsg)
				store.dispatch('ADDDATA',this.allmsg)
				console.log(store.state.data)
			}
		},
		ready(){
		        this.$http.get('./static/one.json').then(function (data) {
		        	this.showjson=data.data.people[0].firstName;
		        }, function () {
		        	
		        });
		    }
	}
</script>