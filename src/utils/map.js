/* eslint-disable */
export default {
	init: function() {
		console.log("初始化高德地图脚本...");
		const key = 'd09ab504ad2e0432b952109318e79dd2'
		const GaoDe_URL = '//webapi.amap.com/maps?v=1.4.15&key=' + key + '&callback=onLoad'
		return new Promise(resolve => {
			// 如果已加载直接返回
			
			if (typeof AMap !== 'undefined') {
				resolve(AMap)
				return true
			}

			window.onLoad = function() {
				console.log('初始化高德地图脚本初始化成功...')
				resolve(AMap)
			}

			// 插入script脚本
			let scriptNode = document.createElement('script')
			scriptNode.setAttribute('type', 'text/javascript')
			scriptNode.setAttribute('src', GaoDe_URL)
			document.head.appendChild(scriptNode)
		})
	}
}
