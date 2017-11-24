export default {
	props: {
		user: {
			type: Object
		}
	},
	data() {
		return {
			navs: []
		}
	}, 
	created() {
		//获取导航数据
		this.$http.get('/api/navs').then((res) => {
			this.navs = res.body.data
		},(res) => {
			alert(res.statusText)
		})
	}
}