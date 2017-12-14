<template>
  <main>
	  <b-pagination-nav :link-gen="linkGen" v-bind:number-of-pages="pagecount" v-model="currentPage" />
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>