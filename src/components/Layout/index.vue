<script lang="ts" setup>
import { routes } from '@/router/index.ts'
</script>

<template>
	<el-container class="content">
		<el-header height="70px">
			<section class="header">天不生我杨某人，前端万古如长夜</section>
		</el-header>
		<el-container>
			<el-aside width="300px">
				<RootNav :list="routes" />
			</el-aside>
			<el-main>
				<section class="main">
					<router-view v-slot="{ Component }">
						<transition name="el-zoom-in-center">
							<component :is="Component" />
						</transition>
					</router-view>
				</section>
			</el-main>
		</el-container>
	</el-container>
</template>

<style lang="scss" scoped>
.content {
	height: 100vh;
	.el-header,
	.el-main,
	.el-aside {
		padding: 10px;
	}
	.el-header {
		padding-bottom: 0;
	}
	.el-aside {
		padding-right: 0;
	}
	.el-menu {
		height: calc(100vh - 90px);
		overflow-y: scroll;
	}
	.menu {
		border-radius: 10px;
		border-right: none;
	}

	.main {
		border-radius: 10px;
		background: #ffffff;
		padding: 20px;
		height: calc(100vh - 90px);
		overflow-y: scroll;
	}
	.header {
		height: 100%;
		border-radius: 10px;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.el-menu::-webkit-scrollbar,
	.main::-webkit-scrollbar {
		display: none;
	}
}
</style>
