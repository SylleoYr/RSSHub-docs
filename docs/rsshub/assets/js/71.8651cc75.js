(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{592:function(t,a,e){"use strict";e.r(a);var r=e(29),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("出行旅游")]),t._v(" "),e("h2",{attrs:{id:"_12306"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12306"}},[t._v("#")]),t._v(" 12306")]),t._v(" "),e("h3",{attrs:{id:"_12306-zui-xin-dong-tai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12306-zui-xin-dong-tai"}},[t._v("#")]),t._v(" 最新动态")]),t._v(" "),e("Route",{attrs:{author:"LogicJake",example:"/12306/zxdt",path:"/12306/zxdt/:id?",paramsDesc:["铁路局id，可在 URL 中找到，不填默认显示所有铁路局动态"]}}),t._v(" "),e("h2",{attrs:{id:"all-the-flight-deals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-the-flight-deals"}},[t._v("#")]),t._v(" All the Flight Deals")]),t._v(" "),e("h3",{attrs:{id:"all-the-flight-deals-te-jia-ji-piao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-the-flight-deals-te-jia-ji-piao"}},[t._v("#")]),t._v(" 特价机票")]),t._v(" "),e("Route",{attrs:{author:"HenryQW",example:"/atfd/us+new%20york,gb+london/1",path:"/atfd/:locations/:nearby?",paramsDesc:["始发地, 由「国家, 参见 ISO 3166-1 国家代码」和「城市」两部分组成","可选 0 或 1, 默认 0 为不包括, 是否包括临近机场"]}},[e("p",[t._v("举例: "),e("a",{attrs:{href:"https://rsshub.app/atfd/us+new%20york,gb+london/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/atfd/us+new york, gb+london/1"),e("OutboundLink")],1)]),t._v(" "),e("ol",[e("li",[t._v("单个始发地，例如 「us+new york」, "),e("a",{attrs:{href:"https://rsshub.app/atfd/us+new%20york",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/atfd/us+new york"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("逗号分隔多个始发地，例如 「us+new york, gb+london」, "),e("a",{attrs:{href:"https://rsshub.app/atfd/us+new%20york,gb+london/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/atfd/us+new york, gb+london/"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("ISO 3166-1 国家代码列表请参见 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/ISO_3166-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科 ISO_3166-1"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"hopper-flight-deals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hopper-flight-deals"}},[t._v("#")]),t._v(" Hopper Flight Deals")]),t._v(" "),e("h3",{attrs:{id:"hopper-flight-deals-hopper-te-jia-ji-piao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hopper-flight-deals-hopper-te-jia-ji-piao"}},[t._v("#")]),t._v(" Hopper 特价机票")]),t._v(" "),e("Route",{attrs:{author:"HenryQW",example:"/hopper/1/LHR/PEK",path:"/hopper/:lowestOnly/:from/:to?",paramsDesc:["是否只返回最低价机票, `1`: 是, 其他任意值: 否","始发地, IATA 国际航空运输协会机场代码","目的地, IATA 国际航空运输协会机场代码, 可选, 缺省则目的地为`任意城市`"]}},[e("p",[t._v("本路由返回由 Hopper 算法给出的现在可购入最便宜的折扣机票，通常包含 6 个结果。出行日期将由 Hopper 算法定义，可能是明天也可能是 10 个月后.")]),t._v(" "),e("p",[t._v("伦敦希思罗 ✈ 北京首都国际 "),e("a",{attrs:{href:"https://rsshub.app/hopper/1/LHR/PEK",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/hopper/1/LHR/PEK"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("IATA 国际航空运输协会机场代码，参见"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E8%88%AA%E7%A9%BA%E8%BF%90%E8%BE%93%E5%8D%8F%E4%BC%9A%E6%9C%BA%E5%9C%BA%E4%BB%A3%E7%A0%81_(A)",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科 国际航空运输协会机场代码"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"imuseum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#imuseum"}},[t._v("#")]),t._v(" iMuseum")]),t._v(" "),e("h3",{attrs:{id:"imuseum-zhan-lan-xin-xi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#imuseum-zhan-lan-xin-xi"}},[t._v("#")]),t._v(" 展览信息")]),t._v(" "),e("Route",{attrs:{author:"sinchang",example:"/imuseum/shanghai/all",path:"/imuseum/:city/:type?",paramsDesc:["如 shanghai, beijing","不填则默认为 `all`"]}},[e("table",[e("thead",[e("tr",[e("th",[t._v("全部")]),t._v(" "),e("th",[t._v("最新")]),t._v(" "),e("th",[t._v("热门")]),t._v(" "),e("th",[t._v("即将结束")]),t._v(" "),e("th",[t._v("即将开始")]),t._v(" "),e("th",[t._v("已结束")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("all")]),t._v(" "),e("td",[t._v("latest")]),t._v(" "),e("td",[t._v("hot")]),t._v(" "),e("td",[t._v("end_soon")]),t._v(" "),e("td",[t._v("coming")]),t._v(" "),e("td",[t._v("outdated")])])])])]),t._v(" "),e("h2",{attrs:{id:"fei-ke-cha-guan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fei-ke-cha-guan"}},[t._v("#")]),t._v(" 飞客茶馆")]),t._v(" "),e("h3",{attrs:{id:"fei-ke-cha-guan-you-hui-xin-xi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fei-ke-cha-guan-you-hui-xin-xi"}},[t._v("#")]),t._v(" 优惠信息")]),t._v(" "),e("Route",{attrs:{author:"howel52",example:"/flyertea/preferential",path:"/flyertea/preferential"}}),t._v(" "),e("h3",{attrs:{id:"fei-ke-cha-guan-xin-yong-ka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fei-ke-cha-guan-xin-yong-ka"}},[t._v("#")]),t._v(" 信用卡")]),t._v(" "),e("Route",{attrs:{author:"nicolaszf",example:"/flyertea/creditcard/zhongxin",path:"/flyertea/creditcard/:bank",paramsDesc:["信用卡板块各银行的拼音简称"]}},[e("table",[e("thead",[e("tr",[e("th",[t._v("信用卡模块")]),t._v(" "),e("th",[t._v("bank")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("国内信用卡")]),t._v(" "),e("td",[t._v("creditcard")])]),t._v(" "),e("tr",[e("td",[t._v("浦发银行")]),t._v(" "),e("td",[t._v("pufa")])]),t._v(" "),e("tr",[e("td",[t._v("招商银行")]),t._v(" "),e("td",[t._v("zhaoshang")])]),t._v(" "),e("tr",[e("td",[t._v("中信银行")]),t._v(" "),e("td",[t._v("zhongxin")])]),t._v(" "),e("tr",[e("td",[t._v("交通银行")]),t._v(" "),e("td",[t._v("jiaotong")])]),t._v(" "),e("tr",[e("td",[t._v("中国银行")]),t._v(" "),e("td",[t._v("zhonghang")])]),t._v(" "),e("tr",[e("td",[t._v("工商银行")]),t._v(" "),e("td",[t._v("gongshang")])]),t._v(" "),e("tr",[e("td",[t._v("广发银行")]),t._v(" "),e("td",[t._v("guangfa")])]),t._v(" "),e("tr",[e("td",[t._v("农业银行")]),t._v(" "),e("td",[t._v("nongye")])]),t._v(" "),e("tr",[e("td",[t._v("建设银行")]),t._v(" "),e("td",[t._v("jianshe")])]),t._v(" "),e("tr",[e("td",[t._v("汇丰银行")]),t._v(" "),e("td",[t._v("huifeng")])]),t._v(" "),e("tr",[e("td",[t._v("民生银行")]),t._v(" "),e("td",[t._v("mingsheng")])]),t._v(" "),e("tr",[e("td",[t._v("兴业银行")]),t._v(" "),e("td",[t._v("xingye")])]),t._v(" "),e("tr",[e("td",[t._v("花旗银行")]),t._v(" "),e("td",[t._v("huaqi")])]),t._v(" "),e("tr",[e("td",[t._v("无卡支付")]),t._v(" "),e("td",[t._v("wuka")])]),t._v(" "),e("tr",[e("td",[t._v("投资理财")]),t._v(" "),e("td",[t._v("137")])]),t._v(" "),e("tr",[e("td",[t._v("网站权益汇")]),t._v(" "),e("td",[t._v("145")])]),t._v(" "),e("tr",[e("td",[t._v("境外信用卡")]),t._v(" "),e("td",[t._v("intcreditcard")])])])])]),t._v(" "),e("h2",{attrs:{id:"guo-jia-di-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guo-jia-di-li"}},[t._v("#")]),t._v(" 国家地理")]),t._v(" "),e("h3",{attrs:{id:"guo-jia-di-li-fen-lei"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guo-jia-di-li-fen-lei"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),e("Route",{attrs:{author:"fengkx",example:"/natgeo/environment/article",path:"/natgeo/:cat/:type?",paramsDesc:["分类","类型, 例如`https://www.natgeomedia.com/environment/photo/`对应 cat, type 分别为 environment, photo"]}}),t._v(" "),e("h2",{attrs:{id:"huo-dong-hang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#huo-dong-hang"}},[t._v("#")]),t._v(" 活动行")]),t._v(" "),e("h3",{attrs:{id:"huo-dong-hang-zui-xin-huo-dong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#huo-dong-hang-zui-xin-huo-dong"}},[t._v("#")]),t._v(" 最新活动")]),t._v(" "),e("Route",{attrs:{author:"kfgamehacker",example:"/huodongxing/explore",path:"/huodongxing/explore"}}),t._v(" "),e("h2",{attrs:{id:"ma-feng-wo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ma-feng-wo"}},[t._v("#")]),t._v(" 马蜂窝")]),t._v(" "),e("h3",{attrs:{id:"ma-feng-wo-you-ji"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ma-feng-wo-you-ji"}},[t._v("#")]),t._v(" 游记")]),t._v(" "),e("Route",{attrs:{author:"sinchang",example:"/mafengwo/note/hot",path:"/mafengwo/note/:type",paramsDesc:["目前支持两种, `hot` 代表热门游记, `latest` 代表最新游记"]}}),t._v(" "),e("h3",{attrs:{id:"ma-feng-wo-zi-you-hang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ma-feng-wo-zi-you-hang"}},[t._v("#")]),t._v(" 自由行")]),t._v(" "),e("Route",{attrs:{author:"nczitzk",example:"/mafengwo/ziyouxing/10186",path:"/mafengwo/ziyouxing/:code",paramsDesc:["目的地代码，可在该目的地页面的 URL 中找到"]}},[e("p",[t._v("目的地代码请参见 "),e("a",{attrs:{href:"http://www.mafengwo.cn/mdd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"zhong-guo-mei-shu-guan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhong-guo-mei-shu-guan"}},[t._v("#")]),t._v(" 中国美术馆")]),t._v(" "),e("h3",{attrs:{id:"zhong-guo-mei-shu-guan-mei-shu-guan-xin-wen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhong-guo-mei-shu-guan-mei-shu-guan-xin-wen"}},[t._v("#")]),t._v(" 美术馆新闻")]),t._v(" "),e("Route",{attrs:{author:"HenryQW",example:"/namoc/announcement",path:"/namoc/:type",paramsDesc:["新闻类型， 可选如下"]}},[e("table",[e("thead",[e("tr",[e("th",[t._v("通知公告")]),t._v(" "),e("th",[t._v("新闻")]),t._v(" "),e("th",[t._v("媒体联报")]),t._v(" "),e("th",[t._v("展览预告")]),t._v(" "),e("th",[t._v("焦点专题")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("announcement")]),t._v(" "),e("td",[t._v("news")]),t._v(" "),e("td",[t._v("media")]),t._v(" "),e("td",[t._v("exhibition")]),t._v(" "),e("td",[t._v("specials")])])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);