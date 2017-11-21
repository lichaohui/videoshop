<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-navbar-brand href="#">木影视</b-navbar-brand>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				<b-nav-item href="/">首页</b-nav-item>
				<b-nav-item href="/tv">电视剧</b-nav-item>
				<b-nav-item-dropdown text="电影">
					<b-dropdown-item href="/movie?type=all">综合</b-dropdown-item>
					<b-dropdown-item href="/movie?type=comedy">喜剧</b-dropdown-item>
					<b-dropdown-item href="/movie?type=love">爱情</b-dropdown-item>
					<b-dropdown-item href="/movie?type=terror">恐怖</b-dropdown-item>
					<b-dropdown-item href="/movie?type=action">动作</b-dropdown-item>
				</b-nav-item-dropdown>
				<b-nav-item href="/variety">综艺</b-nav-item>
				<b-nav-item href="/live">直播</b-nav-item>
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