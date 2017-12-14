import carousel from '../carousel/index.vue'
import page from '../page/index.vue'

export default {
	props: {
	},
	data() {
		return {
			banners: [],
			resources: [],
			pagecount: 0
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
			page,
			pagesize
		] = [
			this.getRequest().style,
			this.getRequest().page,
			this.getRequest().pagesize ? this.getRequest().pagesize : 8
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
		this.$http.get('/api/resource',{params: {type: type, style: style}}).then((res) => {
			if(res.body.isSuccess) {
				this.pagecount = Math.ceil(res.body.data.length/pagesize)
				this.resources = res.body.data.slice((page-1)*pagesize, page*pagesize)
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