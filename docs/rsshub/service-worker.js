/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "79997a319d72d01ac09abfe1dbee4b4c"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "4c879a53204a2647b88c765e55d8e5fc"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "072243764455713dc94f59c645f7d69d"
  },
  {
    "url": "anime.html",
    "revision": "7e1d105ae1ec9700e715627202dd76d2"
  },
  {
    "url": "api.html",
    "revision": "0b9ee435668366f8528146463f141545"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "240f63e7e2a2d038d41ec0b1177fd7d7"
  },
  {
    "url": "assets/css/0.styles.66db3d45.css",
    "revision": "fcbb0cd568f84eff909f46eb7ce6677c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.35ea7d11.js",
    "revision": "849524e30ceaefec675622432c76e41e"
  },
  {
    "url": "assets/js/10.a14122a9.js",
    "revision": "4ed4d1c0b2556a528e0828ae7686fdef"
  },
  {
    "url": "assets/js/11.728b2ec3.js",
    "revision": "ea6ec8898529df4c9c9bf8aed716ab45"
  },
  {
    "url": "assets/js/12.dc3c426b.js",
    "revision": "7cad6956629fbc58d5929692e3a547e6"
  },
  {
    "url": "assets/js/13.728094c5.js",
    "revision": "9b9ee3c04bd1f6dbc7090a82d0a537a2"
  },
  {
    "url": "assets/js/14.73527b43.js",
    "revision": "30649a16703f15ffdeea47bd9d840b9d"
  },
  {
    "url": "assets/js/15.f55f4d23.js",
    "revision": "5d600756e23d700fbb193d52883e1540"
  },
  {
    "url": "assets/js/16.0e56e1f6.js",
    "revision": "ce6023a024bcd141286cc7d3e7493799"
  },
  {
    "url": "assets/js/17.3c3553fc.js",
    "revision": "a9767fb7c9cdce0a826fff4b23313fa9"
  },
  {
    "url": "assets/js/18.9dedd81e.js",
    "revision": "69fc5a5e6082af1072961313c20e44fc"
  },
  {
    "url": "assets/js/19.348e97cd.js",
    "revision": "bf76a24df347b5cd0d19dce393abc697"
  },
  {
    "url": "assets/js/20.11f5221e.js",
    "revision": "cc6b9a5ce322abbcbd7f93126403a760"
  },
  {
    "url": "assets/js/21.63aa5b99.js",
    "revision": "b1ca5f1e1306da085fa36accd1823414"
  },
  {
    "url": "assets/js/22.c28328ea.js",
    "revision": "bb04701dad3c093909a0cbc4ccc2fd9e"
  },
  {
    "url": "assets/js/23.bbf2942f.js",
    "revision": "5bba9f6940c9e28104e45328a3f6b4d9"
  },
  {
    "url": "assets/js/24.936f0058.js",
    "revision": "9d3c32373ca9e61ceb01af6c8c9c36b6"
  },
  {
    "url": "assets/js/25.b06a83d2.js",
    "revision": "ba5b361b99612b663d7ee46a9ad2d2d1"
  },
  {
    "url": "assets/js/26.8c850aa3.js",
    "revision": "6c725917dfb92e83c0b8ac5517125cfd"
  },
  {
    "url": "assets/js/27.2b24cb36.js",
    "revision": "0f56267984518094104fa5c49f801de2"
  },
  {
    "url": "assets/js/28.57fbbdc3.js",
    "revision": "52a75bfc4e77cb1f27a12a1de4406926"
  },
  {
    "url": "assets/js/29.4a431375.js",
    "revision": "5e586815f9ecc9896ec0c09901b74d4b"
  },
  {
    "url": "assets/js/30.9c34eba1.js",
    "revision": "44d894cd32e121f395000631b4523fec"
  },
  {
    "url": "assets/js/31.26680a7d.js",
    "revision": "716f67a149f8d30ec217e154a27815fb"
  },
  {
    "url": "assets/js/32.3f88b92a.js",
    "revision": "8c43f2ec2a6a4c7cd471a5543c8d3a61"
  },
  {
    "url": "assets/js/33.fbe7f313.js",
    "revision": "90d7e2710912facbd83fb0fda7a6d68c"
  },
  {
    "url": "assets/js/34.33281a2d.js",
    "revision": "4641a9cb48a3926debf845c0cad19cff"
  },
  {
    "url": "assets/js/35.250baef5.js",
    "revision": "a1daa8f13c5522c4efa5d483be050281"
  },
  {
    "url": "assets/js/36.5e33273c.js",
    "revision": "7e26382402cd688fdc732001dcb384fb"
  },
  {
    "url": "assets/js/37.80001270.js",
    "revision": "cfd768498ebd44769e1d940e17956c30"
  },
  {
    "url": "assets/js/38.dc1bab9f.js",
    "revision": "8a2c433bd3c7f6b3c848f020073667ed"
  },
  {
    "url": "assets/js/39.f8bfbad2.js",
    "revision": "66e8855adf7f1ec63c3758c417af3e67"
  },
  {
    "url": "assets/js/4.cad66b17.js",
    "revision": "77c82b63cc629117bcb960ea85e8839e"
  },
  {
    "url": "assets/js/40.c31db598.js",
    "revision": "2413ff33b0746b20e66a22b71ad91bfa"
  },
  {
    "url": "assets/js/41.01b81057.js",
    "revision": "4d69b5582d206bb13944b0e2cddef7d0"
  },
  {
    "url": "assets/js/42.d8f433de.js",
    "revision": "adbe6ea82d2867a985a07233be0e6278"
  },
  {
    "url": "assets/js/43.b81daf73.js",
    "revision": "2a4179b74006a669925a38df3ffce906"
  },
  {
    "url": "assets/js/44.92bf2d08.js",
    "revision": "d626a7e89e93cdc583af60dd66a7731f"
  },
  {
    "url": "assets/js/45.dedd3f02.js",
    "revision": "e4055542c0a18021d9b06b464b4e811c"
  },
  {
    "url": "assets/js/46.4a3cb72d.js",
    "revision": "42f17df49aa7e0775dcea24995040bd0"
  },
  {
    "url": "assets/js/47.d0a47c11.js",
    "revision": "cbca92b024cb1b28f5bc9f69f13ea89e"
  },
  {
    "url": "assets/js/48.8ef487eb.js",
    "revision": "27f6a5e3741b0691b3dd302869915d40"
  },
  {
    "url": "assets/js/49.3738a8af.js",
    "revision": "037758350c380069efc52d3a32c30de1"
  },
  {
    "url": "assets/js/5.867de6c0.js",
    "revision": "f279c934f2c3a897ffe20605f38a9b62"
  },
  {
    "url": "assets/js/50.0d45dd0d.js",
    "revision": "89bb560032ddc756c639382cb5bcedb7"
  },
  {
    "url": "assets/js/51.4ac3882a.js",
    "revision": "113703572a584bdb41d6c66c68852d93"
  },
  {
    "url": "assets/js/52.92733ef2.js",
    "revision": "e3980c7745f6570c234ceb5f88b4c7be"
  },
  {
    "url": "assets/js/53.5837e6ad.js",
    "revision": "6a13d61ea538b56b5fc2c1b96ead776b"
  },
  {
    "url": "assets/js/54.d9450fa3.js",
    "revision": "6025ed3f12e09ca03773821925d5a737"
  },
  {
    "url": "assets/js/55.9f0b6d45.js",
    "revision": "a674777c0cd1ebc72352ac4e9b819ac7"
  },
  {
    "url": "assets/js/56.718204c1.js",
    "revision": "a5a00deac35df6eab29c0862cf1d7c6c"
  },
  {
    "url": "assets/js/57.158e57bf.js",
    "revision": "36cdec84efb9b1db629f802c67d7b5f3"
  },
  {
    "url": "assets/js/58.82fc19ba.js",
    "revision": "08e9fb55a1d6293a577d41d89992468e"
  },
  {
    "url": "assets/js/59.f7fbe7d3.js",
    "revision": "badbdb4a10154b296ab58be0ff9765b3"
  },
  {
    "url": "assets/js/6.b6891f23.js",
    "revision": "f1c81ed57b26d966479e10b9d28fc1ec"
  },
  {
    "url": "assets/js/60.2209eb95.js",
    "revision": "19481034d1bbd0504f03d2a7bb45c6b9"
  },
  {
    "url": "assets/js/61.89f638c5.js",
    "revision": "81ef45004775897b22d88e030df78714"
  },
  {
    "url": "assets/js/62.f97b0a0c.js",
    "revision": "fbab8f40355172ac0145ff517f02a50e"
  },
  {
    "url": "assets/js/63.fae3a947.js",
    "revision": "f7bf072bbf47016e2689dd2b751f7c9f"
  },
  {
    "url": "assets/js/64.ac17022b.js",
    "revision": "36c58952e928c48e86b8b4b8bfbb3b05"
  },
  {
    "url": "assets/js/65.d3cd44a1.js",
    "revision": "abe020c19c4881e19d807da222537464"
  },
  {
    "url": "assets/js/66.9f43c98c.js",
    "revision": "7fbee18229340a26fd3c2c53922734d7"
  },
  {
    "url": "assets/js/67.9ba46368.js",
    "revision": "251d7dd6863eb5a44eda54c8851fa02a"
  },
  {
    "url": "assets/js/68.91326fa5.js",
    "revision": "1cd6c3203205e712bafa47a0ec242f1d"
  },
  {
    "url": "assets/js/69.f74f5231.js",
    "revision": "c1155e25af38f641b8a488eedc4bcd51"
  },
  {
    "url": "assets/js/7.82396777.js",
    "revision": "6b5edb95a133e5abc7e9964124982e6e"
  },
  {
    "url": "assets/js/70.f46f950a.js",
    "revision": "8f85fd0b6fcdeafcaeb0b487c1c950b8"
  },
  {
    "url": "assets/js/71.8651cc75.js",
    "revision": "9f87d542ff062b818606916883bf7921"
  },
  {
    "url": "assets/js/72.812d6355.js",
    "revision": "f6826ee2897ddfb5fd9b9363c659a98c"
  },
  {
    "url": "assets/js/73.0a91498c.js",
    "revision": "09e0bb5b86b937ab5f762ca59df4e6fc"
  },
  {
    "url": "assets/js/74.83b01f98.js",
    "revision": "99f1ad1470b549fdfd79bd450b042dcb"
  },
  {
    "url": "assets/js/8.a1bc52b7.js",
    "revision": "abc4d036fdc88d24227f62e62192353d"
  },
  {
    "url": "assets/js/9.11479063.js",
    "revision": "6e4941aa646c1c67d1b05bc8bb6e008b"
  },
  {
    "url": "assets/js/app.6232b667.js",
    "revision": "c9ed2bb4d5751e15ed04fd15beb40ba9"
  },
  {
    "url": "assets/js/vendors~docsearch.796fe315.js",
    "revision": "193b4d6dd6f422b97209b44ed253e991"
  },
  {
    "url": "bbs.html",
    "revision": "0a2d40dac97a684e201d60eba8c7ceb7"
  },
  {
    "url": "blog.html",
    "revision": "82abdd5072c1923bd9e9e99e7e1d0479"
  },
  {
    "url": "design.html",
    "revision": "7706f483850897b8e7a2e6920508d192"
  },
  {
    "url": "en/anime.html",
    "revision": "fb0b8c68c3a07689b0c5bcb0940fc3a5"
  },
  {
    "url": "en/api.html",
    "revision": "243b34ea0f5f3356b904ca0792932315"
  },
  {
    "url": "en/bbs.html",
    "revision": "7aecab9af8e44cea7d661577638e89f0"
  },
  {
    "url": "en/blog.html",
    "revision": "4e9a021f46c5f1f222ea47a967eae65e"
  },
  {
    "url": "en/design.html",
    "revision": "462135e08bf868f3de21158bf9a54aeb"
  },
  {
    "url": "en/faq.html",
    "revision": "3667eb33d10cf003b3aab0cf0085db1d"
  },
  {
    "url": "en/finance.html",
    "revision": "aebdaf1bf9e421e442df1fe7e80e42da"
  },
  {
    "url": "en/forecast.html",
    "revision": "4f34f26688a78bb3811b8d14a064d98a"
  },
  {
    "url": "en/game.html",
    "revision": "bdfb88109d229f5bee7665d134bddf06"
  },
  {
    "url": "en/government.html",
    "revision": "7cadfd7c4b7e3fedf32e01fe2e8f3347"
  },
  {
    "url": "en/index.html",
    "revision": "30f21ed7cdcccfc9f96bc01706a5445d"
  },
  {
    "url": "en/install/index.html",
    "revision": "4708141b27a5a31ac5610bdeac2770c3"
  },
  {
    "url": "en/joinus/index.html",
    "revision": "3a01b80fcf22d173a0d40ed2738840e3"
  },
  {
    "url": "en/journal.html",
    "revision": "bc98ea93c61eed74b8472f5e0c1e6e85"
  },
  {
    "url": "en/live.html",
    "revision": "99cf34f26b9e0e042cae7b1164d1e0f2"
  },
  {
    "url": "en/multimedia.html",
    "revision": "f2dda76665fefc60361b69336849d560"
  },
  {
    "url": "en/new-media.html",
    "revision": "e29f675aed80e8d1b321e60767caf4a3"
  },
  {
    "url": "en/other.html",
    "revision": "884f20425c1af2c858cc9b02002d9314"
  },
  {
    "url": "en/parameter.html",
    "revision": "1bd602abfc2fc584e34b7414bc331fc9"
  },
  {
    "url": "en/picture.html",
    "revision": "a103ebb1e07c385e30d2136a9f1fb3a6"
  },
  {
    "url": "en/program-update.html",
    "revision": "b4e107765937ad42cec7863e5f3b0f96"
  },
  {
    "url": "en/programming.html",
    "revision": "df60e5b8349597a4f0011d0a3b982ce4"
  },
  {
    "url": "en/reading.html",
    "revision": "6f18ceb7b27abe101b5d067a90eb1b86"
  },
  {
    "url": "en/shopping.html",
    "revision": "f0f3ae5fff00d3c3a3e52b200c9dd856"
  },
  {
    "url": "en/social-media.html",
    "revision": "17a80a84ca130203208e32dee1743e9f"
  },
  {
    "url": "en/study.html",
    "revision": "e68acbf14a6cbdd92bdf5c34152206ab"
  },
  {
    "url": "en/support/index.html",
    "revision": "fb5a2374974c44a888d7de7a99be7828"
  },
  {
    "url": "en/traditional-media.html",
    "revision": "d28f5785f73d058212dc0a3bfc24b504"
  },
  {
    "url": "en/travel.html",
    "revision": "a7d9edfcb9be2f6c6eb4abfb6d837671"
  },
  {
    "url": "en/university.html",
    "revision": "b951fb85f5ea9245bf7bb5d0ba0e2fbd"
  },
  {
    "url": "en/usage.html",
    "revision": "40585c75473018dceced6a51fa5aa248"
  },
  {
    "url": "faq.html",
    "revision": "d824d64942f9493c89072017d349718d"
  },
  {
    "url": "finance.html",
    "revision": "7a63dee1a42d11eaca8253b2af05c96e"
  },
  {
    "url": "forecast.html",
    "revision": "7aae3a5b3f794905c41408f30648a1a3"
  },
  {
    "url": "game.html",
    "revision": "b95552c596a63fc558c959546dcdb653"
  },
  {
    "url": "government.html",
    "revision": "7677ef12d65c75046294d45f2edf6ac7"
  },
  {
    "url": "index.html",
    "revision": "f5a0bac2abd1ba225cc43de752182185"
  },
  {
    "url": "install/index.html",
    "revision": "c759b7a6f3727129cf4bd3877f71c039"
  },
  {
    "url": "joinus/index.html",
    "revision": "d0498bbdbe402b7117145404f65b04ba"
  },
  {
    "url": "journal.html",
    "revision": "d274a700e92f6fec8f04419f3dcb80a4"
  },
  {
    "url": "live.html",
    "revision": "16aefbbfb8bcc84e7d3530876ceffd45"
  },
  {
    "url": "logo.png",
    "revision": "4355db81d7f579db17a594c4404f44f5"
  },
  {
    "url": "multimedia.html",
    "revision": "334ddbc84a419cc7386d270ffe10d066"
  },
  {
    "url": "new-media.html",
    "revision": "0a27ae36fb6df06e397b4ad38e1aa68a"
  },
  {
    "url": "other.html",
    "revision": "dc7ad85463eb32e8e673fefe83669397"
  },
  {
    "url": "parameter.html",
    "revision": "d3983ba07114a97491e9c102a1e3150e"
  },
  {
    "url": "picture.html",
    "revision": "af2ea11a69556ee5f60c0acdcd8a9533"
  },
  {
    "url": "program-update.html",
    "revision": "ec3aa3d1e23eb53e6250ef0a01fbe2f1"
  },
  {
    "url": "programming.html",
    "revision": "30539ae865278a057d09d2f526c4134b"
  },
  {
    "url": "reading.html",
    "revision": "7ce52f8e9674accfdf74651c1c6e2236"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "shopping.html",
    "revision": "45e8e718d9b21d22b455e86b84e116e9"
  },
  {
    "url": "social-media.html",
    "revision": "64ca0164795f5fb94fdbbc05fdca3b8f"
  },
  {
    "url": "study.html",
    "revision": "aaea1f8441b5fd45ca4bc0de699efcf3"
  },
  {
    "url": "support/index.html",
    "revision": "28b92c16b832b3dc9785fd8b22d9bd80"
  },
  {
    "url": "traditional-media.html",
    "revision": "0eee0e5b8c789f85000065085da63fb9"
  },
  {
    "url": "travel.html",
    "revision": "79dbf5f359d21d99c61a51ebe2449253"
  },
  {
    "url": "university.html",
    "revision": "cb80e5e60f2b45d59f8a489ad55fac74"
  },
  {
    "url": "usage.html",
    "revision": "6888e0f224aa7f0eca0b89a6de528322"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
