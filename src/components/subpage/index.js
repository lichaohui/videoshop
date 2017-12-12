import carousel from '../carousel/index.vue'
import page from '../page/index.vue'

export default {
	props: {
	},
	data() {
		return {
			banners: [],
			resources: [],
			total: 0
		}
	},
	components: {
		carousel,
		page
	},
	created() {
		//获取旗舰产品
		let search = window.location.pathname
		let type = search.split('/')[1]
		let [
			style,
			page
		] = [
			this.getRequest().style,
			this.getRequest().page
		]
		
		this.$http.get('/api/flagships',{params: {type: type, style: style}}).then((res) => {
			if(res.body.isSuccess) {
				this.banners = res.body.data
			}else{
				alert(res.body.message)
			}
		},(res) => {
			alert(res.statusText)
		})
		
		//获取对应的资源
		this.$http.get('/api/resource',{params: {type: type, style: style, page: page,pagesize: 8}}).then((res) => {
			if(res.body.isSuccess) {
				console.log(res.body)
				this.total = res.body.total
				this.resources = res.body.data
			}else{
				alert(res.statusText)
			}
		})
	},
	methods: {
		getRequest(){
			//获取url中"?"符后的字串 
			let url = location.search
			let theRequest = new Object()
			if (url.indexOf("?") != -1) { 
				let str = url.substr(1)
				let strs = str.split("&")
				for(let singlestr of strs){
					theRequest[singlestr.split("=")[0]] = unescape(singlestr.split("=")[1])
				}
			} 
			return theRequest
		}
	}
}