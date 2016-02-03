/* Usage:
*
*  1) copy config_example.js to config.js
*  2) change demo content 
*
*/

(function (ng) {
  "use strict";
  ng
  .module("settingsModule",[])
  .constant("appSettings",{
    serverPath: "https://your.domain.com:3000",   
    localPath: "http://localhost:8080"
  });
})(angular);