!function(){"use strict";function a(a){console.log("About Controller Constructor"),c=this,c.name="About",c.GruntfilesService=a}function b(){return console.log("About Controller canActivate Method"),!0}angular.module("sampleApp.components.about",["sampleApp.service.gruntfiles"]).component("about",{controller:a,templateUrl:"components/about/about.html",$canActivate:b}),a.$inject=["GruntfilesService"],a.prototype.$onInit=function(){console.log("About Controller $onInit"),c.onInit="Success";var a=this.GruntfilesService.query().$promise;a.then(d)["catch"](e)};var c,d=function(a){c.list=a},e=function(a){c.error=a}}(),function(){"use strict";function a(){console.log("Contact Controller Constructor"),c=this,c.name="Contact"}function b(){return console.log("Contact Controller $canActivate"),!0}angular.module("sampleApp.components.contact",[]).component("contact",{controller:a,templateUrl:"components/contact/contact.html",$canActivate:b}),a.$inject=[],a.prototype.$onInit=function(){console.log("Contact Controller $onInit"),c.onInit="Success",c.case1=20,d()};var c,d=function(){c.case2=10}}(),function(){"use strict";function a(a,b){console.log("Home Controller Constructor"),c=this,c.name="Home",c.$localForage=a,c.ngDexie=b}function b(){return console.log("Home Controller $canActivate"),!0}angular.module("sampleApp.components.home",["LocalForageModule","ngdexie"]).component("home",{controller:a,templateUrl:"components/home/home.html",$canActivate:b}),a.$inject=["$localForage","ngDexie"];var c;a.prototype.$onInit=function(){console.log("Home Controller $onInit"),c.onInit="Success"},a.prototype.save=function(){c.$localForage.setItem("sample",c.input)},a.prototype.get=function(){c.$localForage.getItem("sample").then(function(a){c.text=a})},a.prototype.save2=function(){var a={id:1,title:c.input2,action:"create more documentation"};c.ngDexie.put("notes",a).then(function(){c.status="success"})["catch"](function(a){c.status="error"})},a.prototype.get2=function(){c.ngDexie.list("notes").then(function(a){c.text2=angular.toJson(a)})}}(),function(){"use strict";function a(a,b,c){a.html5Mode(!1),b.config({driver:b.INDEXEDDB,name:"SampleDatabase",version:1,storeName:"SampleTable",description:"some descriptio"}),c.setOptions({name:"databaseName",debug:!1}),c.setConfiguration(function(a){a.version(1).stores({notes:"++id,title"}),a.on("error",function(a){})})}angular.module("sampleApp.config",["LocalForageModule","ngdexie","ngdexie.ui"]).config(a),a.$inject=["$locationProvider","$localForageProvider","ngDexieProvider"]}(),function(){"use strict";function a(a){return a("/api/gruntfiles")}angular.module("sampleApp.service.gruntfiles",["ngResource"]).factory("GruntfilesService",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){a.config([{path:"/home",name:"Home",component:"home",useAsDefault:!0},{path:"/about",name:"About",component:"about"},{path:"/contact",name:"Contact",component:"contact"}])}angular.module("sampleApp",["ngComponentRouter","sampleApp.config","sampleApp.components.home","sampleApp.components.about","sampleApp.components.contact"]).controller("AppController",a),a.$inject=["$router"]}();