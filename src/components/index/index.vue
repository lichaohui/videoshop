<template>
  <main class='main'>
    <carousel v-bind:banners='banners'></carousel>
		<hr>
		<b-card no-body>
      <b-tabs card>
        <b-tab title="电视剧" active>
          <b-card v-for='resource in resources[0].data' v-bind:title="resource.caption"
          v-bind:img-src="resource.image"
          img-top
          tag="article"
          class="mb-2 pt-2 pl-2 pr-2 col-md-3 col-sm-6 col-12">
						<p class="card-text">{{ resource.summary }}</p>
						<b-button href="#" variant="primary" class='btn-sm'>进入</b-button>
					</b-card>
        </b-tab>
      </b-tabs>
    </b-card>
		<hr>
		<b-card no-body>
      <b-tabs card>
        <b-tab title="全部电影" active v-on:click='movieShowingType("all")'></b-tab>
				<b-tab title="喜剧" v-on:click='movieShowingType("comedy")'></b-tab>
				<b-tab title="爱情" v-on:click='movieShowingType("love")'></b-tab>
				<b-tab title="恐怖" v-on:click='movieShowingType("terror")'></b-tab>
				<b-tab title="动作" v-on:click='movieShowingType("action")'></b-tab>
				<b-card v-for='resource in resources[1].data' v-bind:title="resource.caption"
          v-bind:img-src="resource.image"
					v-show='resources[1].showingType == "all" || resources[1].showingType == resource.type'
          img-top
          tag="article"
          class="mb-2 pt-2 pl-2 pr-2 col-md-3 col-sm-6 col-xs-12">
						<p class="card-text">{{ resource.summary }} | {{ resource.type }}</p>
						<b-button href="#" variant="primary" class='btn-sm'>进入</b-button>
				</b-card>
      </b-tabs>
    </b-card>
		<hr>
		<b-card no-body>
      <b-tabs card>
        <b-tab title="综艺" active>
          <b-card v-for='resource in resources[2].data' v-bind:title="resource.caption"
          v-bind:img-src="resource.image"
          img-top
          tag="article"
          class="mb-2 pt-2 pl-2 pr-2 col-md-3 col-sm-6 col-xs-12">
						<p class="card-text">{{ resource.summary }}</p>
						<b-button href="#" variant="primary" class='btn-sm'>进入</b-button>
					</b-card>
        </b-tab>
      </b-tabs>
    </b-card>
		<hr>
		<b-card no-body>
      <b-tabs card>
        <b-tab title="直播" active>
          <b-card v-for='resource in resources[3].data' v-bind:title="resource.caption"
          v-bind:img-src="resource.image"
          img-top
          tag="article"
          class="mb-2 pt-2 pl-2 pr-2 col-md-3 col-sm-6 col-xs-12">
						<p class="card-text">{{ resource.summary }}</p>
						<b-button href="#" variant="primary" class='btn-sm'>进入</b-button>
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