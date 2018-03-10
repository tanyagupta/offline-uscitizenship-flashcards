/* global caches */

/*
  (function() {
    'use strict';

    var filesToCache = [
      'static/offline-index.html',
      'static/js/libs.js',
      'static/js/scripts.js',
      'static/pages/offline.html',
      'static/pages/404.html',
      'static/images/statue-of-liberty.jp2',
      'static/images/icons/favicon.ico',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'static/images/arrow.png',
      ' https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0'
    ];

    var staticCacheName = 'pages-cache-v5';

    self.addEventListener('install', function(event) {
      console.log('Attempting to install service worker and cache static assets');
      event.waitUntil(
        caches.open(staticCacheName)
        // "caches" is a global read-only variable, which is an instance of CacheStorage,
        // For more info, see: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches
        .then(function(cache) {
          return cache.addAll(filesToCache);
        })
      );
    });

    self.addEventListener('fetch', function(event) {
//      console.log('Fetch event for ', event.request);
      event.respondWith(
        caches.match(event.request).then(function(response) {
//          console.log("Response: ",response)
          if (response) {
            console.log('Found ', event.request.url, ' in cache');
            return response; //the response has been found in the cache
          }
//          console.log('Network request for ', event.request.url);
          return fetch(event.request).then(function(response) { //not found in cache therefore issuing a fetch
            if (response.status === 404) { //page not found
              return caches.match('static/pages/404.html');
              /*
              Network response errors do not throw an error in the fetch promise. Instead, fetch returns the response object containing
              the error code of the network error. This means we handle network errors in a .then instead of a .catch.

              You can test this by trying to access a sub page that does not exist while you are online. If you are offline and then try to access a page that does not exist the default offline page will trigger instead - see below
              */
//            }
  /*          return caches.open(staticCacheName).then(function(cache) {
                cache.put(event.request.url, response.clone());
              return response;
            });
          });
        }).catch(function(error) {
          console.log('Error, ', error);
          return caches.match('static/pages/offline.html');
          /* If the fetch cannot reach the network (user is offline) an error is thrown in the promise and the .catch executes.
              */
/*       })
      );
    });

    self.addEventListener('activate', function(event) {
    console.log('Activating new service worker...');

    var cacheWhitelist = [staticCacheName];

    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            console.log('cahce white list: ',cacheWhitelist,'cachename: ',cacheName,"found or not: ",cacheWhitelist.indexOf(cacheName) === -1)
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
    );
  });

})();*/
 /*
              We wait for an activate event, and then run a waitUntil() block that clears up any old, unused caches before a new service worker is activated.
              Here we have a whitelist containing the name of the cache we want to keep. We return the keys of the caches in the CacheStorage object using
              CacheStorage.keys, then check each key to see if it is in the whitelist. If not, we delete it using delete().
              We delete old caches in the activate event to make sure that we aren't deleting caches before the new service worker has taken over the page.
              We create an array of caches that are currently in use and delete all other caches.
              */


  (function() {
    'use strict';

    var filesToCache = [
      'static/offline-index.html',
      'static/js/libs.js',
      'static/js/scripts.js',
      'static/pages/offline.html',
      'static/pages/404.html',
      'static/images/statue-of-liberty.jp2',
      'static/images/icons/favicon.ico',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'static/images/arrow.png',
      ' https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0'
    ];

    var staticCacheName = 'pages-cache-v2';

    self.addEventListener('install', function(event) {
      console.log('Attempting to install service worker and cache static assets');
      event.waitUntil(
        caches.open(staticCacheName)
        .then(function(cache) {
          return cache.addAll(filesToCache);
        })
      );
    });

    self.addEventListener('fetch', function(event) {
      console.log('Fetch event for ', event.request.url);
      event.respondWith(
        caches.match(event.request).then(function(response) {
          console.log(response)
          if (response) {
            console.log('Found ', event.request.url, ' in cache');
            return response;
          }
          console.log('Network request for ', event.request.url);
          return fetch(event.request).then(function(response) {
            console.log("404 expected",response.status)
            if (response.status === 404) {
              return caches.match('static/pages/404.html');
            }
            return caches.open(staticCacheName).then(function(cache) {

             // if (event.request.url.indexOf('test') < 0) {
                cache.put(event.request.url, response.clone());
            //  }
              return response;
            });
          });
        }).catch(function(error) {
          console.log('Error, ', error);
          return caches.match('static/pages/offline.html');
        })
      );
    });

    self.addEventListener('activate', function(event) {
    console.log('Activating new service worker...');

    var cacheWhitelist = [staticCacheName];

    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  })();
