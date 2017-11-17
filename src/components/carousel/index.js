export default {
	props: {
		banners: {
			type: Array,
			default: []
		}
	},
	data() {
		return {
		}
	},
	methods: {
		onSlideStart(slide) {
        this.sliding = true;
    },
    onSlideEnd(slide) {
        this.sliding = false;
    }
	}
}