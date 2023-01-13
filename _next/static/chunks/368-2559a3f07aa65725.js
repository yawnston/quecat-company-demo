(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{368:function(e,a,t){"use strict";t.d(a,{v:function(){return l},Z:function(){return b}});var l,o,r=t(5893),s=t(5152),n=t.n(s),d=t(7294),i=[{selector:"node",style:{"border-color":"black","border-width":"1px",label:"data(label)"}},{selector:".tag-root",style:{"background-color":"red"}},{selector:".availability-available",style:{"border-color":"greenyellow","border-width":"4px"}},{selector:".availability-certainly-available",style:{"border-color":"darkgreen","border-width":"4px"}},{selector:".availability-ambiguous",style:{"border-color":"orange","border-width":"4px"}},{selector:".availability-removable",style:{"border-color":"red","border-width":"4px"}},{selector:".selection-root",style:{"background-color":"purple"}},{selector:".selection-selected",style:{"background-color":"blue"}},{selector:"edge[label]",style:{"font-weight":"bold",label:"data(label)","curve-style":"bezier","target-arrow-shape":"triangle"}},{selector:"edge.temporary",style:{"line-style":"dashed","line-color":"blue"}},{selector:"node.new",style:{"border-style":"dashed"}},{selector:"edge.new",style:{"line-style":"dashed"}},{selector:"node.no-ids[label]",style:{color:"red"}},{selector:".group-placeholder",style:{label:"data(label)",events:"no",opacity:0}},{selector:".group",style:{label:"data(label)",events:"no",shape:"round-rectangle","border-style":"dashed","background-opacity":.01}},{selector:".group-1",style:{"background-color":"green",color:"green","border-color":"green","padding-right":"8px"}},{selector:".group-2",style:{"background-color":"red",color:"red","border-color":"red","padding-right":"12px"}},{selector:".group-3",style:{"background-color":"purple",color:"purple","border-color":"purple","padding-right":"16px"}},{selector:".group-4",style:{"background-color":"blue",color:"blue","border-color":"blue","padding-right":"20px"}},{selector:".no-group",style:{label:"",events:"no",opacity:.2,"background-color":"red",width:"60px",height:"60px"}}],u=n()(function(){return Promise.all([t.e(856),t.e(907)]).then(t.bind(t,5054))},{loadableGenerated:{webpack:function(){return[5054]}},ssr:!1});(o=l||(l={})).Schema="schema",o.Query1="query1",o.Query2="query2";var c=[{data:{id:"mongodb",label:"MongoDB"},classes:"group group-1"},{data:{id:"neo4j",label:"Neo4j"},classes:"group group-4"},{data:{id:"100",label:"Customer",parent:"neo4j"},position:{x:100,y:0},classes:"selection-root"},{data:{id:"102",label:"Name",parent:"neo4j"},position:{x:0,y:0},classes:"selection-root availability-ambiguous"},{data:{id:"110",label:"Orders",parent:"neo4j"},position:{x:200,y:0},classes:"selection-selected"},{data:{id:"111",label:"Order",parent:"neo4j"},position:{x:300,y:0},classes:"selection-selected"},{data:{id:"Mongodb111",label:void 0,parent:"mongodb"},position:{x:300,y:0},classes:"group-placeholder"},{data:{id:"117",label:"Items",parent:"mongodb"},position:{x:300,y:100},classes:"selection-selected"},{data:{id:"121",label:"Product",parent:"mongodb"},position:{x:300,y:200},classes:"selection-selected"},{data:{id:"123",label:"Name",parent:"mongodb"},position:{x:300,y:300},classes:"selection-root"},{data:{source:"100",target:"102",label:"3"}},{data:{source:"110",target:"100",label:"21"}},{data:{source:"110",target:"111",label:"23"}},{data:{source:"117",target:"111",label:"36"}},{data:{source:"117",target:"121",label:"39"}},{data:{source:"121",target:"123",label:"49"}},],p=[{data:{id:"mongodb",label:"MongoDB"},classes:"group group-1"},{data:{id:"cassandra",label:"Cassandra"},classes:"group group-2"},{data:{id:"postgres",label:"PostgreSQL"},classes:"group group-3"},{data:{id:"100",label:"Customer",parent:"cassandra"},position:{x:0,y:0},classes:"selection-root"},{data:{id:"Postgres100",label:void 0,parent:"postgres"},position:{x:0,y:0},classes:"group-placeholder"},{data:{id:"102",label:"Name",parent:"postgres"},position:{x:0,y:100},classes:"selection-root availability-ambiguous"},{data:{id:"110",label:"Orders",parent:"cassandra"},position:{x:100,y:0},classes:"selection-selected"},{data:{id:"111",label:"Order",parent:"cassandra"},position:{x:200,y:0},classes:"selection-selected"},{data:{id:"Mongodb111",label:"Order",parent:"mongodb"},position:{x:200,y:0},classes:"group-placeholder"},{data:{id:"117",label:"Items",parent:"mongodb"},position:{x:200,y:100},classes:"selection-selected"},{data:{id:"121",label:"Product",parent:"mongodb"},position:{x:200,y:200},classes:"selection-selected"},{data:{id:"123",label:"Name",parent:"mongodb"},position:{x:200,y:300},classes:"selection-root"},{data:{source:"100",target:"102",label:"3"}},{data:{source:"110",target:"100",label:"21"}},{data:{source:"110",target:"111",label:"23"}},{data:{source:"117",target:"111",label:"36"}},{data:{source:"117",target:"121",label:"39"}},{data:{source:"121",target:"123",label:"49"}},],g=[{data:{id:"mongodb",label:"MongoDB"},classes:"group group-1"},{data:{id:"postgres",label:"PostgreSQL"},classes:"group group-3"},{data:{id:"address",label:"Address",parent:"postgres"},position:{x:150,y:100},classes:"selection-selected"},{data:{id:"mongoaddress",label:void 0,parent:"mongodb"},position:{x:100,y:100},classes:"group-placeholder"},{data:{id:"legalEntity",label:"Legal Entity",parent:"mongodb"},position:{x:450,y:100},classes:"selection-root"},{data:{id:"identifier",label:"Identifier",parent:"mongodb"},position:{x:450,y:200}},{data:{id:"organization",label:"Organization",parent:"mongodb"},position:{x:600,y:100}},{data:{id:"foundingDate",label:"foundingDate",parent:"mongodb"},position:{x:600,y:0}},{data:{id:"addressArea",label:"address area",parent:"postgres"},position:{x:-200,y:200},classes:"selection-selected"},{data:{id:"addressAreaLang",label:"address area_language",parent:"postgres"},position:{x:-300,y:150},classes:"selection-selected availability-ambiguous"},{data:{id:"addressAreaValue",label:"address area_value",parent:"postgres"},position:{x:-300,y:250},classes:"selection-root"},{data:{id:"postCode",label:"post code",parent:"postgres"},position:{x:-200,y:100}},{data:{id:"postName",label:"post name",parent:"postgres"},position:{x:100,y:300},classes:"selection-selected"},{data:{id:"postNameLang",label:"post name_language",parent:"postgres"},position:{x:220,y:400},classes:"selection-selected availability-ambiguous"},{data:{id:"postNameValue",label:"post name_value",parent:"postgres"},position:{x:50,y:400},classes:"selection-root"},{data:{id:"adminLevel1",label:"administrative unit level 1",parent:"postgres"},position:{x:-100,y:250}},{data:{id:"adminLevel1Lang",label:"administrative unit level 1_language",parent:"postgres"},position:{x:-50,y:350}},{data:{id:"adminLevel1Value",label:"administrative unit level 1_value",parent:"postgres"},position:{x:-200,y:380}},{data:{id:"adminLevel2",label:"administrative unit level 2",parent:"postgres"},position:{x:-100,y:-50}},{data:{id:"adminLevel2Lang",label:"administrative unit level 2_language",parent:"postgres"},position:{x:-50,y:-150}},{data:{id:"adminLevel2Value",label:"administrative unit level 2_value",parent:"postgres"},position:{x:-200,y:-180}},{data:{id:"thoroughfare",label:"thoroughfare",parent:"postgres"},position:{x:100,y:-200}},{data:{id:"thoroughfareLang",label:"thoroughfare_language",parent:"postgres"},position:{x:220,y:-300}},{data:{id:"thoroughfareValue",label:"thoroughfare_value",parent:"postgres"},position:{x:50,y:-300}},{data:{id:"legalName",label:"legal name",parent:"mongodb"},position:{x:450,y:0},classes:"selection-selected"},{data:{id:"legalNameLang",label:"legal name_language",parent:"mongodb"},position:{x:550,y:-100},classes:"selection-selected availability-ambiguous"},{data:{id:"legalNameValue",label:"legal name_value",parent:"mongodb"},position:{x:400,y:-100},classes:"selection-root"},{data:{id:"notation",label:"notation",parent:"mongodb"},position:{x:600,y:200}},{data:{id:"locator",label:"locator designator",parent:"postgres"},position:{x:-200,y:0}},{data:{source:"legalEntity",target:"organization",label:"1 - #isa"}},{data:{source:"legalName",target:"legalNameLang",label:"2"}},{data:{source:"legalName",target:"legalNameValue",label:"3"}},{data:{source:"legalEntity",target:"legalName",label:"4"}},{data:{source:"organization",target:"foundingDate",label:"5"}},{data:{source:"identifier",target:"notation",label:"6"}},{data:{source:"addressArea",target:"addressAreaLang",label:"7"}},{data:{source:"addressArea",target:"addressAreaValue",label:"8"}},{data:{source:"address",target:"addressArea",label:"9"}},{data:{source:"address",target:"postCode",label:"10"}},{data:{source:"postName",target:"postNameLang",label:"11"}},{data:{source:"postName",target:"postNameValue",label:"12"}},{data:{source:"address",target:"postName",label:"13"}},{data:{source:"address",target:"locator",label:"14"}},{data:{source:"adminLevel1",target:"adminLevel1Lang",label:"15"}},{data:{source:"adminLevel1",target:"adminLevel1Value",label:"16"}},{data:{source:"address",target:"adminLevel1",label:"17"}},{data:{source:"adminLevel2",target:"adminLevel2Lang",label:"18"}},{data:{source:"adminLevel2",target:"adminLevel2Value",label:"19"}},{data:{source:"address",target:"adminLevel2",label:"20"}},{data:{source:"thoroughfare",target:"thoroughfareLang",label:"21"}},{data:{source:"thoroughfare",target:"thoroughfareValue",label:"22"}},{data:{source:"address",target:"thoroughfare",label:"23"}},{data:{source:"legalEntity",target:"identifier",label:"24 - Identifier"}},{data:{source:"legalEntity",target:"address",label:"25 - registered address"}},],b=function(e){var a=(0,d.useState)(void 0),t=a[0],o=a[1];(0,d.useEffect)(function(){t&&!t.destroyed()&&t.fit()});var s=[];return s=e.contentKind===l.Schema?g:e.contentKind===l.Query1?c:p,(0,r.jsx)(u,{id:"cy",elements:s,style:{width:"100%",height:"100%",borderWidth:"2px",borderColor:"black",borderStyle:"solid"},stylesheet:i,autoungrabify:!0,cy:function(e){o(e)}})}},638:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t(6856).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=s.default,r=(null==a?void 0:a.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(l(e,Promise)?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=o({},r,e)),(r=o({},r,a)).suspense&&(delete r.ssr,delete r.loading),r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,n(t,r);delete r.ssr}return t(r)},a.noSSR=n;var o=t(6495).Z,r=t(2648).Z,s=(r(t(7294)),r(t(4302)));function n(e,a){return delete a.webpack,delete a.modules,e(a)}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},6319:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.LoadableContext=void 0;var l=(0,t(2648).Z)(t(7294)).default.createContext(null);a.LoadableContext=l},4302:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t(9658).Z,o=t(7222).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(6495).Z,s=(0,t(2648).Z)(t(7294)),n=t(6319),d=t(7294).useSyncExternalStore,i=[],u=[],c=!1;function p(e){var a=e(),t={loading:!0,loaded:null,error:null};return t.promise=a.then(function(e){return t.loading=!1,t.loaded=e,e}).catch(function(e){throw t.loading=!1,t.error=e,e}),t}var g=function(){function e(a,t){l(this,e),this._loadFn=a,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var a=this._res,t=this._opts;a.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},t.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(a){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var a=this;return this._callbacks.add(e),function(){a._callbacks.delete(e)}}}]),e}();function b(e){return function(e,a){var t=function(){if(!b){var a=new g(e,p);b={getCurrentValue:a.getCurrentValue.bind(a),subscribe:a.subscribe.bind(a),retry:a.retry.bind(a),promise:a.promise.bind(a)}}return b.promise()},l=function(){t();var e=s.default.useContext(n.LoadableContext);e&&Array.isArray(p.modules)&&p.modules.forEach(function(a){e(a)})},o=function(e,a){l();var t=d(b.subscribe,b.getCurrentValue,b.getCurrentValue);return s.default.useImperativeHandle(a,function(){return{retry:b.retry}},[]),s.default.useMemo(function(){var a;return t.loading||t.error?s.default.createElement(p.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:b.retry}):t.loaded?s.default.createElement((a=t.loaded)&&a.__esModule?a.default:a,e):null},[e,t])},i=function(e,a){return l(),s.default.createElement(p.lazy,r({},e,{ref:a}))},p=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},a);p.suspense&&(p.lazy=s.default.lazy(p.loader));var b=null;if(!c){var y=p.webpack?p.webpack():p.modules;y&&u.push(function(e){var a=!0,l=!1,o=void 0;try{for(var r,s=y[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var n=r.value;if(-1!==e.indexOf(n))return t()}}catch(d){l=!0,o=d}finally{try{a||null==s.return||s.return()}finally{if(l)throw o}}})}var f=p.suspense?i:o;return f.preload=function(){return t()},f.displayName="LoadableComponent",s.default.forwardRef(f)}(p,e)}function y(e,a){for(var t=[];e.length;){var l=e.pop();t.push(l(a))}return Promise.all(t).then(function(){if(e.length)return y(e,a)})}b.preloadAll=function(){return new Promise(function(e,a){y(i).then(e,a)})},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(a){var t=function(){return c=!0,a()};y(u,e).then(t,t)})},window.__NEXT_PRELOADREADY=b.preloadReady,a.default=b},5152:function(e,a,t){e.exports=t(638)}}]);