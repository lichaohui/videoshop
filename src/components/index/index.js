import carousel from '../carousel/index.vue'

export default {
	props: {
	},
	data() {
		return {
			banners: [],
			resources: []
		}
	},
	components: {
		carousel
	},
	created() {
		//获取旗舰产品
		this.$http.get('/api/flagships',{params: {type: 'index'}}).then((res) => {
			if(res.body.isSuccess) {
				this.banners = res.body.data
			}else{
				alert(res.body.message)
			}
		},(res) => {
			alert(res.statusText)
		})
		
		//获取全部资源
		this.$http.get('/api/resource',{params: {type: 'all'}}).then((res) => {
			if(res.body.isSuccess) {
				this.resources = res.body.data
				console.log(this.resources)
			}else{
				alert(res.statusText)
			}
		})
	},
	methods: {
	}
}