/**
 * LogJS (c)2013 Brett Fattori
 * Lightweight JavaScript logging framework
 * MIT Licensed
 */
(function(g,h){var a={ERROR:"ERROR",WARN:"WARN",INFO:"INFO",version:"LogJS v1.0.0"},d={},f=function(b,a,c,g){var h=(new Date).getTime(),f;for(f in d)d.hasOwnProperty(f)&&d[f].log(b,h,a,c,g)},j;g.onerror!==h&&(j=g.onerror);g.onerror=function(b,e,c){f(a.ERROR,"[EXCEPTION] "+b,e,c);j&&j(b,e,c)};a.error=function(b,e,c){f(a.ERROR,b,e,c)};a.warn=function(b,e,c){f(a.WARN,b,e,c)};a.info=function(b,e,c){f(a.INFO,b,e,c)};a.addAppender=function(b){b!==h&&(b=new b(a.config),b.LOGJSAPPENDER&&(d[b.name]=b))};a.removeAppender=
    function(b){b!==h&&delete d[b.name]};a.getAppender=function(b){return d[b]};a.getRegisteredAppenders=function(){var b=[],a;for(a in d)d.hasOwnProperty(a)&&b.push(a);return b};a.addPlugin=function(b){a[b.toString()]===h&&(a[b.toString()]=b)};Object.defineProperty(a,"config",{configurable:!1,value:{},writable:!0,enumerable:!1});a.BaseAppender=function(){};Object.defineProperty(a.BaseAppender.prototype,"LOGJSAPPENDER",{configurable:!1,value:!0,writable:!1,enumerable:!1});a.BaseAppender.prototype.log=
    function(){};a.BaseAppender.prototype.configOpt=function(b,a,c){return a[this.name]&&a[this.name][b]||c};Object.defineProperty(a.BaseAppender.prototype,"name",{configurable:!1,value:"LogJSBaseAppender",writable:!0,enumerable:!1});g.LogJS=a})(this);