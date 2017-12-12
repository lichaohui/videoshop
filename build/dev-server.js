'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()

//引入数据源文件
const appdata = require('../data.json')

//路由
const router = express.Router()

//获取导航数据的路由
router.get('/navs',(req,res) => {
	let resources = appdata.resource
	let result = []
	for(let resource of resources){
		let obj = {}
    obj.type = resource.type
		obj.styles = resource.styles
		result.push(obj)
	}
	res.json({
		isSuccess: true,
		data: result
	})
})

//获取旗舰资源（主打的电视剧、电影）的路由
router.get('/flagships',(req,res) => {
	let flagships = appdata.flagships
	let _result, result
	_result = flagships.filter((flagship) => {
	  return flagship.type == req.query.type
	})
	if(req.query.style){
		result = _result[0].banners.filter((banner) => {
			return banner.style == req.query.style
		})
	}else{
		result = _result[0].banners
	}
	res.json({
		isSuccess: true,
		data: result
	})
})

//获取资源的路由
router.get('/resource',(req,res) => {
	let resources = appdata.resource
	let _results, results, page, pagesize, total
	page = req.query.page ? req.query.page : 1
	pagesize = req.query.pagesize ? req.query.pagesize : 16
	if(req.query.type == 'all'){
		_results = resources
	}else{
		console.log('子页面')
		_results = resources.filter((resource) => {
			return resource.type.name == req.query.type
		})
	}
	console.log('开始了')
	console.log(_results)
	console.log(_results[0].data)
	if(req.query.style){
		results = _results[0].data.filter((data) => {
			return data.style == req.query.style
		})
		console.log('aa')
		console.log(results)
		total = results.length
		console.log('长度：'+ total)
		results = results.slice((page-1)*pagesize, page*pagesize)
	}else{
		results = _results
		total = results
		for(let result of results){
			result.data = result.data.slice((page-1)*pagesize, page*pagesize)
		}
	}
	res.json({
		isSuccess: true,
		data: results,
		total: total
	})
})

//使用路由
app.use('/api',router)

const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
