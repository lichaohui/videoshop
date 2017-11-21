import carousel from '../carousel/index.vue'

export default {
	props: {
	},
	data() {
		return {
			banners: [],
			resources: [
				{
					type: 'tv',
					data: []
				},
				{
					type: 'movie',
					showingType: 'all',
					data: []
				},
				{
					type: 'variety',
					data: []
				},
				{
					type: 'live',
					data: []
				}
			]
		}
	},
	components: {
		carousel
	},
	created() {
		//获取旗舰产品
		this.$http.get('/api/flagships',{params: {type: 'index'}}).then((res) => {
			if(res.body.isSuccess) {
				this.banners = res.body.data.banners
			}else{
				alert(res.body.message)
			}
		},(res) => {
			alert(res.statusText)
		})
		
		//获取全部资源
		this.$http.get('/api/resource',{params: {type: 'all'}}).then((res) => {
			if(res.body.isSuccess) {
				let results = res.body.data
				for(let resource of this.resources){
					resource.data = results.filter((result) => {
						return result.type == resource.type
					})[0].data
				}
			}else{
				alert(res.statusText)
			}
		})
	},
	methods: {
		movieShowingType(showingType){
			this.resources[1].showingType = showingType
		}
	}
}