<template>
	<div class="footer">
		<ul>
			<li><a v-link="{ path: '/index' }">首页</a></li>
			<li><a v-link="{ path: '/list' }">列表</a></li>
			<li><a v-link="{ path: '/other' }">其他</a></li>
			<li><a v-link="{ path: '/consult' }">咨询</a></li>
			<li><a v-link="{ path: '/person' }">个人</a></li>
		</ul>
	</div>
</template>
<style lang="less">
	.footer{
		background: rgb(0, 150, 136);
		position: fixed;
		bottom: 0;
		width: 100%;
		ul{padding: 0;
			li{
				width: 20%;
				float: left;
				text-align: center;
				color: #fff;
				list-style-type: none;
				a{
					color: #fff;
					padding: 10px;
					display: block;
					text-decoration: none;
					&.v-link-active{
						background: #0c5851;
					}
				}
			}
		}
	}
</style>