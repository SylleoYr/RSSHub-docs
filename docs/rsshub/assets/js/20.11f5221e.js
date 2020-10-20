(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{541:function(t,s,e){"use strict";e.r(s);var a=e(29),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),e("p",[t._v("The API is under active development and is subject to change. All suggestions are welcome!")])]),t._v(" "),e("p",[t._v("RSSHub provides the following APIs:")]),t._v(" "),e("h3",{attrs:{id:"api-list-of-public-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-list-of-public-routes"}},[t._v("#")]),t._v(" List of Public Routes")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),e("p",[t._v("This API "),e("strong",[t._v("will not")]),t._v(" return any routes under "),e("code",[t._v("lib/protected_router.js")]),t._v(".")])]),t._v(" "),e("p",[t._v("Eg: "),e("a",{attrs:{href:"https://rsshub.app/api/routes/github",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/api/routes/github"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Route: "),e("code",[t._v("/api/routes/:name?")])]),t._v(" "),e("p",[t._v("Parameters:")]),t._v(" "),e("ul",[e("li",[t._v("name, route's top level name as in "),e("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/tree/master/lib/routes",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/DIYgod/RSSHub/tree/master/lib/routes"),e("OutboundLink")],1),t._v(". Optional, "),e("strong",[t._v("returns all public routes if not specified")]),t._v(".")])]),t._v(" "),e("p",[t._v("A successful request returns a HTTP status code "),e("code",[t._v("200 OK")]),t._v(" with the result in JSON:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"routes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/github/trending/:since/:language?"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/github/issue/:user/:repo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/github/user/followers/:user"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/github/stars/:user/:repo"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"request returned 4 routes"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If no matching results were found, the server returns only a HTTP status code "),e("code",[t._v("204 No Content")]),t._v(".")])])}),[],!1,null,null,null);s.default=r.exports}}]);