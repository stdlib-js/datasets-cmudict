"use strict";var v=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var m=v(function(k,l){
var g=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-is-string/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist');function b(a,r){return q(r)?g(r,"data")&&(a.data=r.data,!w(a.data))?new TypeError(f('0M32W',"data",a.data)):null:new TypeError(f('0M32V',r));}l.exports=b
});var h=v(function(S,c){
var o=require("path").resolve,y=require('@stdlib/error-tools-fmtprodmsg/dist'),p=require('@stdlib/fs-read-json/dist').sync,_=require('@stdlib/assert-has-own-property/dist'),j=m(),d=["dict","phones","symbols","vp"],u={dict:o(__dirname,"..","data","dict.json"),phones:o(__dirname,"..","data","phones.json"),symbols:o(__dirname,"..","data","symbols.json"),vp:o(__dirname,"..","data","vp.json")},O={encoding:"utf8"};function E(a){var r,t,s,e,i,n;if(arguments.length>0){if(r={},t=j(r,a),t)throw t;if(r.data){if(!_(u,r.data))throw new RangeError(y('0M34S',"data",d.join('", "'),r.data));if(e=p(u[r.data],O),e instanceof Error)throw e;return e}}for(e={},n=0;n<d.length;n++){if(s=d[n],i=p(u[s]),i instanceof Error)throw i;e[s]=i}return e}c.exports=E
});var x=h();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
