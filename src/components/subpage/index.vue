<template>
  <main>
	  <carousel v-bind:banners='banners'></carousel>
		<hr>
    <b-card v-for='data in resources' v-bind:title="data.caption"
      v-bind:img-src="data.image"
      img-top
      tag="article"
      class="mb-2 pt-2 pl-2 pr-2 col-md-3 col-sm-6 col-12">
			<p class="card-text">{{ data.summary }}</p>
		  <b-button v-bind:href="'/tv/'+data.id" variant="primary" class='btn-sm' target="_blank">进入</b-button>
		</b-card>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>