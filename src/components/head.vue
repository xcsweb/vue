<template>
   <div class="header_nav">
   		<div class="w_80">
   			<div class="pull_left">
	   			<input type="text" placeholder="请输入搜索信息">
	   		</div>
	   		<div class="pull_right">
	   			<input type="button" value="搜索">
	   		</div>
   		</div>
   </div>
</template>

<style lang="less">
    .header_nav{
    	width: 100%;
    	background: rgb(0, 150, 136);
    	padding: 10px;
    	overflow: hidden;
    	position: fixed;
    	top: 0;
    	.w_80{
    		width: 80%;
    		margin: 0 auto;
	    	.pull_left{
	    		float: left;
	    		width: -webkit-calc(~"100% - 60px");
	    		input{
	    			width: 100%;
	    			display: block;
			    	margin: 0;
			    	border: 0;
			    	padding:10px;
			    	height: 30px;
	    		}
	    	}
	    	.pull_right{
	    		float: left;
	    		input{
	    			background: #29b7aa;
	    			color: #fff;
	    			width: 60px;
	    			border: 0;
	    			height: 30px;
	    		}
	    	}
    	}
    }
</style>

<script>
module.exports={
}
</script>