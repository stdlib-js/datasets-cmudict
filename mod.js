// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})})),r}var r="/home/runner/work/datasets-cmudict/datasets-cmudict/lib",t=require("path").resolve;require("@stdlib/string-format"),require("@stdlib/fs-read-json").sync,require("@stdlib/assert-has-own-property"),require("./validate.js"),t(r,"..","data","dict.json"),t(r,"..","data","phones.json"),t(r,"..","data","symbols.json"),t(r,"..","data","vp.json");var a=e(Object.freeze({__proto__:null}));export{a as default};
//# sourceMappingURL=mod.js.map
