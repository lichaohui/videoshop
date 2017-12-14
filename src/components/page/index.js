export default{
	props: {
		pagecount: {
			type: Number,
			default: 0
		}
	},
	data () {
    return {
      currentPage: 1,
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#&page=' + pageNum
    }
  }
}