<template>
  <main class='main'>
    <carousel v-bind:banners='banners'></carousel>
		<hr>
		<b-card no-body>
      <b-tabs card>
        <b-tab title="电视剧" active>
          <b-card title="Card Title"
          img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 pt-2 col-md-3 col-sm-6 col-xs-12">
						<p class="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
						<b-button href="#" variant="primary">Go somewhere</b-button>
					</b-card>
        </b-tab>
      </b-tabs>
    </b-card>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>