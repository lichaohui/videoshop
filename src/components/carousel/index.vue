<template>
  <b-carousel id="carousel1" controls indicators background="#ababab" v-bind:interval="4000" v-on:sliding-start="onSlideStart" v-on:sliding-end="onSlideEnd" v-if='banners.length > 0'>
	  <b-carousel-slide v-for='banner in banners' v-bind:caption='banner.caption' v-bind:text='banner.info' v-bind:img-src='banner.image'></b-carousel-slide> 
  </b-carousel>
</template>

<style lang='stylus'>
@import './index.styl'
</style>

<script src='./index.js'></script>