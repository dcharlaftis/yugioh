

(function (ng) {
  "use strict";
  ng
  .module("settingsModule",[])
  .constant("appSettings",{
    serverPath: "http://yugiohprices.com/api/",   
    localPath: "http://localhost:8080"
  });
})(angular);