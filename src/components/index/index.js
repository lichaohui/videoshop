import carousel from '../carousel/index.vue'

export default {
	props: {
	},
	data() {
		return {
			banners: []
		}
	},
	components: {
		carousel
	},
	created() {
		this.$http.get('/api/flagships',{params:{type:'index'}}).then((res) => {
			if(res.body.isSuccess){
				console.log(this.banners)
				this.banners = res.body.data.banners
			}else{
				alert(res.body.message)
			}
		},(res) => {
			alert(res.statusText)
		})
	}
}