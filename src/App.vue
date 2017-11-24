<template>
  <div id='app' class='container-fluid'>
	  <navbar></navbar>
		<keep-alive>
      <router-view></router-view>
		</keep-alive>
		<footers></footers>
	</div>
</template>

<script>
  import navbar from './components/navbar/index.vue'
	import footers from './components/footer/index.vue'
	
  export default {
    name: 'app',
		props: {
		},
    data() {
      return {
      }
    },
    methods: {
    },
		components: {
			navbar,
			footers
		}
  };
</script>

<style lang='stylus'>
	body
		font-size: 14px

	.navbar-brand
		padding-top: 0

	.dropdown-menu
		font-size: inherit
</style>