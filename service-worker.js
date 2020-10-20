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
    "revision": "7011ff4ed1966ef2742425e29ed98363"
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
    "revision": "2b21b79d959f8939af84117feeaabe23"
  },
  {
    "url": "api.html",
    "revision": "751873b0d8704c942c4fda1686ce3e24"
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
    "url": "assets/js/4.0d780b07.js",
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
    "url": "assets/js/app.ee7ef83f.js",
    "revision": "883a77d39f48984a328cdf48978927d5"
  },
  {
    "url": "assets/js/vendors~docsearch.796fe315.js",
    "revision": "193b4d6dd6f422b97209b44ed253e991"
  },
  {
    "url": "bbs.html",
    "revision": "cbe3c3920b000b6894ac195ea0d34d3e"
  },
  {
    "url": "blog.html",
    "revision": "b9a2328e3b8f0aa8c33256169f4614e3"
  },
  {
    "url": "design.html",
    "revision": "16d642959fcdccae5ce50ee4f38927c8"
  },
  {
    "url": "en/anime.html",
    "revision": "b16bf93333500b57ab04a6faa62cc5f5"
  },
  {
    "url": "en/api.html",
    "revision": "a455e1c886fe8cacd2e6abc313e7dd2d"
  },
  {
    "url": "en/bbs.html",
    "revision": "0b91e4c281a068ae2c4d754625221c1d"
  },
  {
    "url": "en/blog.html",
    "revision": "3f15aa10d3a8903c59fc39e36cbbce6f"
  },
  {
    "url": "en/design.html",
    "revision": "42dd31ed4f4f46ba4af7aeda870cef6a"
  },
  {
    "url": "en/faq.html",
    "revision": "e6e7729f4a253c1c75651e79edbd03e0"
  },
  {
    "url": "en/finance.html",
    "revision": "89a24b7fd90bc9e95a2e51e0b5b88838"
  },
  {
    "url": "en/forecast.html",
    "revision": "b563e31d19a6e6442a26933f4eb40bb9"
  },
  {
    "url": "en/game.html",
    "revision": "2438a4cddaeb31e3429c31f383ef911a"
  },
  {
    "url": "en/government.html",
    "revision": "c86520b9babbbf8080d1431b2d5004e5"
  },
  {
    "url": "en/index.html",
    "revision": "5989b7c6f53c55ac3058d31569d7a96f"
  },
  {
    "url": "en/install/index.html",
    "revision": "c1ae9a8e1accd198aada4770aa9cc144"
  },
  {
    "url": "en/joinus/index.html",
    "revision": "918df0b402cf5eaaac7b361d35ab7a98"
  },
  {
    "url": "en/journal.html",
    "revision": "5ca8e5ad86063a315ef355438ad3d42b"
  },
  {
    "url": "en/live.html",
    "revision": "fefc41ab05df124ff27131302cb951c0"
  },
  {
    "url": "en/multimedia.html",
    "revision": "75c86babd5faec4de552d9814bd76cb1"
  },
  {
    "url": "en/new-media.html",
    "revision": "e5a12575c341a5df666581a6dec5b20e"
  },
  {
    "url": "en/other.html",
    "revision": "f530b1a0a944f26b3bb0a1c2d754e599"
  },
  {
    "url": "en/parameter.html",
    "revision": "da40599502a44c8479af8038ce40a5d9"
  },
  {
    "url": "en/picture.html",
    "revision": "7778b9c551120b1780a6005f1144de99"
  },
  {
    "url": "en/program-update.html",
    "revision": "010e33781776a54123a6ef1fc5c11133"
  },
  {
    "url": "en/programming.html",
    "revision": "bb39089e8fe4ddb978186b5c092060c0"
  },
  {
    "url": "en/reading.html",
    "revision": "be700e8f67d389ba0a08f7c04307e8a2"
  },
  {
    "url": "en/shopping.html",
    "revision": "ecfb683a00becff37c3cb905201382da"
  },
  {
    "url": "en/social-media.html",
    "revision": "a57fc336e8c64b706b78d876954d3aaf"
  },
  {
    "url": "en/study.html",
    "revision": "6e8e3c6e0f088a221c79fbc97733aa28"
  },
  {
    "url": "en/support/index.html",
    "revision": "84e38bc79c1a4ff577c774418802e4d5"
  },
  {
    "url": "en/traditional-media.html",
    "revision": "a8b600c8447383bdbe47c5a650acaf42"
  },
  {
    "url": "en/travel.html",
    "revision": "e7315724fb2a8c0caf7e06b82fdd5426"
  },
  {
    "url": "en/university.html",
    "revision": "1b1a6eba7bc5786d00d0f2394367554c"
  },
  {
    "url": "en/usage.html",
    "revision": "f7a14c792ee692a2f1890e6bb5789c6f"
  },
  {
    "url": "faq.html",
    "revision": "a9b2cdada8420cf41ae67a40a3da7bd4"
  },
  {
    "url": "finance.html",
    "revision": "cd5d3e3b3ad8b7abb5f92d9c07a66e42"
  },
  {
    "url": "forecast.html",
    "revision": "8ef2a6afebfe21f5096fd85ed6e3eb20"
  },
  {
    "url": "game.html",
    "revision": "39a3132a9225b227378bf5d66e91a4dc"
  },
  {
    "url": "government.html",
    "revision": "0c7534aec2f09d7594949a989e419d98"
  },
  {
    "url": "index.html",
    "revision": "4e58051e8b36d96c93a0f0bda99a898d"
  },
  {
    "url": "install/index.html",
    "revision": "7189302f7b51d969bde1cd6380595975"
  },
  {
    "url": "joinus/index.html",
    "revision": "aa338916b455bfa3d3bf251c43a79cdf"
  },
  {
    "url": "journal.html",
    "revision": "1d2f77bc7f6279aadc9d6a0e5f171ad3"
  },
  {
    "url": "live.html",
    "revision": "6e0f9f3f2ca6955994509de8f4dfc5b2"
  },
  {
    "url": "logo.png",
    "revision": "4355db81d7f579db17a594c4404f44f5"
  },
  {
    "url": "multimedia.html",
    "revision": "5dea42813908af6be8927f86d0bdfc73"
  },
  {
    "url": "new-media.html",
    "revision": "acb120cd7e3eda7d131b3d7bdda7dbcc"
  },
  {
    "url": "other.html",
    "revision": "f254d32b5845c62f6461abc4b0409483"
  },
  {
    "url": "parameter.html",
    "revision": "9ab9f4151890610d0dd8ed2d6eebbabf"
  },
  {
    "url": "picture.html",
    "revision": "04d331f0898ffd6fba3ef941108dd62b"
  },
  {
    "url": "program-update.html",
    "revision": "feefe577e04befad61d3475f6cbc245b"
  },
  {
    "url": "programming.html",
    "revision": "b673916fd88f48ac7afa4ccd8529f8dd"
  },
  {
    "url": "reading.html",
    "revision": "f78c2874b19045b53d8be2c0bee07373"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "shopping.html",
    "revision": "aeca485ad3ec523bb163ec89906233a9"
  },
  {
    "url": "social-media.html",
    "revision": "ec3e808d937de6ab210d41aa0e82bcb4"
  },
  {
    "url": "study.html",
    "revision": "3a6fb805716d23f2b2dd92f12c4cd861"
  },
  {
    "url": "support/index.html",
    "revision": "2dcb2dda0d3417ab0afbf960161671d4"
  },
  {
    "url": "traditional-media.html",
    "revision": "286e124b7158fb80e5017c913baf49a4"
  },
  {
    "url": "travel.html",
    "revision": "0e090bdf01ea5bda6530fd0f40265c0e"
  },
  {
    "url": "university.html",
    "revision": "adbaf2218591c0d22843e08f5942ab37"
  },
  {
    "url": "usage.html",
    "revision": "deaeafef75e9c4dde5d83aaf2ccc6ac0"
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
