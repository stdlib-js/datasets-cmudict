"use strict";var v=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var m=v(function(k,l){
var g=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-is-string/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist');function b(a,r){return q(r)?g(r,"data")&&(a.data=r.data,!w(a.data))?new TypeError(f('0M32W',"data",a.data)):null:new TypeError(f('0M32V',r));}l.exports=b
});var h=v(function(S,c){
var n=require("path").resolve,y=require('@stdlib/error-tools-fmtprodmsg/dist'),p=require('@stdlib/fs-read-json/dist').sync,_=require('@stdlib/assert-has-own-property/dist'),j=m(),d=["dict","phones","symbols","vp"],u={dict:n(__dirname,"..","data","dict.json"),phones:n(__dirname,"..","data","phones.json"),symbols:n(__dirname,"..","data","symbols.json"),vp:n(__dirname,"..","data","vp.json")},O={encoding:"utf8"};function E(a){var r,o,s,e,t,i;if(arguments.length>0){if(r={},o=j(r,a),o)throw o;if(r.data){if(!_(u,r.data))throw new RangeError(y('0M34S',"data",d.join('", "'),r.data));if(e=p(u[r.data],O),e instanceof Error)throw e;return e}}for(e={},i=0;i<d.length;i++){if(s=d[i],t=p(u[s]),t instanceof Error)throw t;e[s]=t}return e}c.exports=E
});var x=h();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
