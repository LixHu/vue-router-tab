(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Page-vue","p-IframeOperate-vue"],{1874:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("你在 "),a("strong",{staticClass:"text-strong"},[e._v(e._s(e.pageTime))]),e._v(" 秒前打开本页面")])},n=[],i={name:"PageTimer",data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}},o=i,c=a("2877"),s=Object(c["a"])(o,r,n,!1,null,null,null);t["a"]=s.exports},"1ec1":function(e,t,a){"use strict";var r=a("ed72"),n=a.n(r);n.a},2048:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{on:{click:e.click}},[e._v(" 页面"+e._s(e.pageId)+" ")]),a("page-timer"),a("h3",[e._v("页签操作")]),a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+e.nextId}},[e._v(" 打开“页面"+e._s(e.nextId)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.open("../page/"+e.nextId,!0)}}},[e._v(" 全新打开“页面"+e._s(e.nextId)+"” ")])],1),e.prevId>0?a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+e.prevId}},[e._v(" 打开“页面"+e._s(e.prevId)+"” ")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.open("../page/"+e.prevId,!0)}}},[e._v(" 全新打开“页面"+e._s(e.prevId)+"” ")])],1):e._e(),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$router.push("../tab-dynamic")}}},[e._v("打开“动态更新页签”")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.close("../tab-dynamic")}}},[e._v("关闭“动态更新页签”")])]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.refresh()}}},[e._v("刷新当前页面")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.close()}}},[e._v("关闭当前页面")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.close(null,"../tab-dynamic")}}},[e._v("关闭当前并跳转")])]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.refreshAll()}}},[e._v("刷新所有页面")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.reset()}}},[e._v("重置页签")])]),a("iframe-operate"),a("h3",[e._v("路由信息")]),a("page-route-info")],1)},n=[],i=(a("c975"),a("1874")),o=a("ce92"),c=a("ccdb"),s={name:"Page",components:{PageTimer:i["a"],PageRouteInfo:o["a"],IframeOperate:c["default"]},data:function(){var e=this.$route.params.id,t=this.$route.fullPath.indexOf("/i18n/")>-1;return{pageId:e,nextId:+e+1,prevId:+e-1,routeTab:{title:t?["page",e]:"页面"+e}}},methods:{click:function(){console.log("页面".concat(this.pageId))}}},l=s,u=a("2877"),m=Object(u["a"])(l,r,n,!1,null,null,null);t["default"]=m.exports},ccdb:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("iframe 页签操作")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.openIframe("https://www.baidu.com","百度","rt-icon-web")}}},[e._v("打开“百度”")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.refreshIframe("https://www.baidu.com")}}},[e._v("刷新“百度”")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.closeIframe("https://www.baidu.com")}}},[e._v("关闭“百度”")])]),a("p",[a("a",{staticClass:"demo-btn",attrs:{title:"XSS 跨站链接的 iframe 将展示空白页面"},on:{click:function(t){e.$routerTab.openIframe("javascript:alert(window.parent.document.body.innerHTML)","XSS 跨站","rt-icon-web")}}},[e._v("XSS 跨站")])]),a("h3",[e._v("打开 iframe 页签")]),a("div",{staticClass:"custom-iframe"},[a("label",[e._v(" 名称： "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.iframe.title,expression:"iframe.title"}],attrs:{name:"title",placeholder:"页签标题"},domProps:{value:e.iframe.title},on:{input:function(t){t.target.composing||e.$set(e.iframe,"title",t.target.value)}}})]),a("label",[e._v(" 网址： "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.iframe.src,expression:"iframe.src"}],attrs:{name:"src",placeholder:"请输入完整的网址"},domProps:{value:e.iframe.src},on:{input:function(t){t.target.composing||e.$set(e.iframe,"src",t.target.value)}}})]),a("a",{staticClass:"demo-btn primary",on:{click:function(t){e.iframe.src&&e.$routerTab.openIframe(e.iframe.src,e.iframe.title,"rt-icon-web")}}},[e._v("打开页签")])]),/^\/iframe\//.test(e.$route.path)?[a("h3",{staticClass:"text-strong"},[e._v(" 提示： ")]),e._m(0)]:e._e()],2)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" 开启浏览器开发者工具的 console 页签，打开 iframe 页签并查看 "),a("code",[e._v("iframe-mounted")]),e._v(" 和 "),a("code",[e._v("iframe-loaded")]),e._v(" 事件的参数打印 ")])}],i={name:"IframeOperate",data:function(){return{iframe:{src:"https://www.hao123.com/",title:"Hao123"}}}},o=i,c=(a("1ec1"),a("2877")),s=Object(c["a"])(o,r,n,!1,null,"26a2d9e4",null);t["default"]=s.exports},ce92:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"demo-table"},[a("tr",[a("th",{attrs:{width:"80"}},[e._v(" name ")]),a("td",[e._v(e._s(e.$route.name))])]),a("tr",[a("th",[e._v("path")]),a("td",[e._v(e._s(e.$route.path))])]),a("tr",[a("th",[e._v("params")]),a("td",[e._v(e._s(e.$route.params))])]),a("tr",[a("th",[e._v("query")]),a("td",[e._v(e._s(e.$route.query))])]),a("tr",[a("th",[e._v("hash")]),a("td",[e._v(e._s(e.$route.hash))])]),a("tr",[a("th",[e._v("fullPath")]),a("td",[e._v(e._s(e.$route.fullPath))])])])},n=[],i=a("2877"),o={},c=Object(i["a"])(o,r,n,!1,null,null,null);t["a"]=c.exports},ed72:function(e,t,a){}}]);
//# sourceMappingURL=p-Page-vue.bea69bb3.js.map