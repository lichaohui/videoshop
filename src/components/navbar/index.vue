<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-navbar-brand href="#">木影视</b-navbar-brand>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				<b-nav-item href="/">首页</b-nav-item>
				<b-nav-item-dropdown v-for='nav in navs' v-bind:text='nav.type.nameInChinese'>
				  <b-dropdown-item v-for='style in nav.styles' v-bind:href="'/'+nav.type.name+'?style='+style.name+'&page=1'">{{ style.nameInChinese }}</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-form>
					<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="输入电影名"/>
				</b-nav-form>
				<b-nav-item-dropdown right>
					<!-- Using button-content slot -->
					<template slot="button-content">
						<em>李朝辉</em>
					</template>
					<b-dropdown-item href="#">个人中心</b-dropdown-item>
					<b-dropdown-item href="#">退出登录</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<style lang='stylus'>
@import './index.styl'
</style>

<script src='./index.js'></script>