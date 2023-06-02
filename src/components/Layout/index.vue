<script lang="ts" setup>
import { routes } from '@/router/index.ts'
</script>

<template>
	<el-container class="content">
		<el-header height="70px">
			<section class="header">Header</section>
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
		height: 100%;
	}
	.menu {
		border-radius: 10px;
		border-right: none;
	}

	.main {
		border-radius: 10px;
		background: #ffffff;
		padding: 20px;
	}
	.header {
		height: 100%;
		border-radius: 10px;
		background: #ffffff;
	}
}
</style>
