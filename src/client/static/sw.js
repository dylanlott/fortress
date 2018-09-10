importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.00083c859db278e87032.js",
    "revision": "938abd1f5299d9d7a461167a338d2b1c"
  },
  {
    "url": "/_nuxt/app.9ae0c6acbdc72fb54e72e4f5dcd78428.css",
    "revision": "9ae0c6acbdc72fb54e72e4f5dcd78428"
  },
  {
    "url": "/_nuxt/layouts/default.749ab654d796cc35f1cd.js",
    "revision": "5af577a97b0320d14cf5983830ec31de"
  },
  {
    "url": "/_nuxt/manifest.9edd499b11edb0b98ccc.js",
    "revision": "70e5846c167ba8a15c9a63455fc29d21"
  },
  {
    "url": "/_nuxt/pages/admin/index.f819fafc936588d55072.js",
    "revision": "f2300954ca2faadd2ae468f36759b4e8"
  },
  {
    "url": "/_nuxt/pages/cards/index.60ca23220ddce214a7f0.js",
    "revision": "25c87a66c9b5e2236a965d00e85d626b"
  },
  {
    "url": "/_nuxt/pages/index.ef45d63eedf6610e30aa.js",
    "revision": "1d48a0b2fbe09fe784aa845a462741fc"
  },
  {
    "url": "/_nuxt/pages/users/_username/index.f8ef298b7456e960b51b.js",
    "revision": "93de8ca6df2a81cc7903e8bec7aa2495"
  },
  {
    "url": "/_nuxt/pages/users/auth/index.a9ad16adc9d9e6567461.js",
    "revision": "d871404ec6e14daf6fa2e65eb5d600f4"
  },
  {
    "url": "/_nuxt/pages/users/auth/sign-in.c9f14bdbe3f0d0ba6129.js",
    "revision": "e7d6669c5d0bfb390960a3b865a3f04e"
  },
  {
    "url": "/_nuxt/pages/users/auth/sign-out.a9d2c9536965ee8fa542.js",
    "revision": "0aaee4ea952b62efbf5bcc04fa187ceb"
  },
  {
    "url": "/_nuxt/pages/users/auth/sign-up.7aee935423447a67eb0c.js",
    "revision": "86c572af3cfed8abd63cbd2846feacd5"
  },
  {
    "url": "/_nuxt/pages/users/index.ba0c019229f16533081d.js",
    "revision": "b5da8f64655d1244c073ca7c5b35e07a"
  },
  {
    "url": "/_nuxt/pages/users/profile/index.50571fadea5861cc4cc2.js",
    "revision": "63ce36487f8d3cf75c4a1c495e12695a"
  },
  {
    "url": "/_nuxt/vendor.d44316234ff4d338e259.js",
    "revision": "8f4331056671b3877fb1f928984b070f"
  }
], {
  "cacheId": "hivemindnews",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





