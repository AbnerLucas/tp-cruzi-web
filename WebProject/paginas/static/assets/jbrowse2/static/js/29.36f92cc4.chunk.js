(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[29],{2278:function(e,t,n){"use strict";var a=n(92);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(0,a(n(96)).default)(r.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=o},2279:function(e,t,n){"use strict";var a=n(92);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(0,a(n(96)).default)(r.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=o},2533:function(e,t,n){"use strict";n.r(t),n.d(t,"chooseGridPitch",(function(){return D}));var a=n(82),r=n(1),o=n.n(r),c=n(51),i=n(85),l=n(111),s=n(2475),u=n(81),m=n(118),f=n(1083),d=n.n(f),v=n(101),p=n(84),b=n(2437),h=n(2423),y=n(2470),g=n(2460),x=n(2431),E=n(2412),w=n(2435),k=Object(c.a)((function(e){return{importFormContainer:{padding:e.spacing(4),margin:"0 auto"},importFormEntry:{minWidth:180},errorMessage:{textAlign:"center",paddingTop:e.spacing(1),paddingBottom:e.spacing(1)}}})),j=Object(i.observer)((function(e){var t=e.model,n=e.selected,a=e.onChange,r=e.error,c=k(),i=Object(p.getSession)(t).assemblyNames;return o.a.createElement(g.a,{container:!0,item:!0,justify:"center",spacing:2,alignItems:"center"},o.a.createElement(E.a,{select:!0,variant:"outlined",value:i[n]?n:"",inputProps:{"data-testid":"dotplot-input"},onChange:function(e){a(Number(e.target.value))},error:Boolean(r),disabled:Boolean(r),className:c.importFormEntry},i.map((function(e,t){return o.a.createElement(x.a,{key:e,value:t},e)}))))})),P=Object(i.observer)((function(e){var t=e.model,n=k(),c=Object(r.useState)(2),i=Object(a.a)(c,1)[0],l=Object(r.useState)([0,0]),s=Object(a.a)(l,2),u=s[0],f=s[1],d=Object(r.useState)({uri:""}),x=Object(a.a)(d,2),E=x[0],P=x[1],O=Object(p.getSession)(t),N=O.assemblyNames,B=N.length?"":"No configured assemblies";return o.a.createElement(y.a,{className:n.importFormContainer},o.a.createElement(g.a,{container:!0,spacing:1,justify:"center",alignItems:"center",style:{width:"50%",margin:"0 auto"}},B?o.a.createElement(w.a,{color:"error"},B):o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{item:!0},o.a.createElement(h.a,{style:{padding:12,marginBottom:10}},o.a.createElement("p",{style:{textAlign:"center"}},"Select assemblies for dotplot view"),Object(v.a)(new Array(i)).map((function(e,n){return o.a.createElement(j,{key:"row_".concat(n,"_").concat(u[n]),error:B,selected:u[n],onChange:function(e){var t=u.slice(0);t[n]=e,f(t)},model:t})}))),o.a.createElement(h.a,{style:{padding:12,marginBottom:10}},o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("b",null,"Optional"),": Add a PAF"," ",o.a.createElement("a",{href:"https://github.com/lh3/miniasm/blob/master/PAF.md"},"(pairwise mapping format)")," ","file for the dotplot view. Note that the first assembly should be the left column of the PAF and the second assembly should be the right column"),o.a.createElement(g.a,{container:!0,justify:"center"},o.a.createElement(g.a,{item:!0},o.a.createElement(m.FileSelector,{name:"URL",description:"",location:E,setLocation:function(e){return P(e)}}))))),o.a.createElement(g.a,{item:!0},o.a.createElement(b.a,{"data-testid":"submitDotplot",onClick:function(){if(t.setViews([{bpPerPx:.1,offsetPx:0},{bpPerPx:.1,offsetPx:0}]),t.setAssemblyNames([N[u[0]],N[u[1]]]),"uri"in E&&E.uri){var e=E.uri?E.uri.slice(E.uri.lastIndexOf("/")+1):null,n=O.addTrackConf({trackId:"fileName-".concat(Date.now()),name:e,assemblyNames:u.map((function(e){return N[e]})),type:"SyntenyTrack",adapter:{type:"PAFAdapter",pafLocation:E,assemblyNames:u.map((function(e){return N[e]}))}});t.toggleTrack(n.trackId)}},variant:"contained",color:"primary"},"Open")))))})),O=n(548),N=n.n(O),B=n(432),S=n.n(B),C=n(852),M=n.n(C),T=n(715),R=n.n(T),L=n(2278),A=n.n(L),z=n(2279),F=n.n(z),I=n(248),_=n(2427),J=Object(c.a)({iconButton:{padding:"4px",margin:"0 2px 0 2px"},controls:{overflow:"hidden",background:"white",whiteSpace:"nowrap",position:"absolute",boxSizing:"border-box",border:"1px solid #a2a2a2",right:0,top:0,zIndex:1001}}),Y=Object(i.observer)((function(e){var t=e.model,n=J();return o.a.createElement("div",{className:n.controls},o.a.createElement(_.a,{onClick:function(){t.hview.scroll(-100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(A.a,null)),o.a.createElement(_.a,{onClick:function(){t.hview.scroll(100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(F.a,null)),o.a.createElement(_.a,{onClick:function(){t.vview.scroll(100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(R.a,null)),o.a.createElement(_.a,{onClick:function(){t.vview.scroll(-100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(M.a,null)),o.a.createElement(_.a,{onClick:t.zoomOutButton,className:n.iconButton,color:"secondary"},o.a.createElement(N.a,null)),o.a.createElement(_.a,{onClick:t.zoomInButton,className:n.iconButton,title:"zoom in",color:"secondary"},o.a.createElement(S.a,null)),o.a.createElement(_.a,{onClick:t.activateTrackSelector,title:"Open track selector",value:"track_select","data-testid":"circular_track_select",color:"secondary"},o.a.createElement(I.b,null)))})),X=Object(c.a)((function(e){return{root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},viewContainer:{marginTop:"3px"},container:{display:"grid",padding:5,position:"relative"},overlay:{pointerEvents:"none",overflow:"hidden",display:"flex",width:"100%",gridRow:"1/2",gridColumn:"2/2",zIndex:100,"& path":{cursor:"crosshair",fill:"none"}},vtext:{gridColumn:"1/2",gridRow:"1/2",pointerEvents:"none"},content:{gridColumn:"2/2",gridRow:"1/2"},spacer:{gridColumn:"1/2",gridRow:"2/2"},htext:{gridColumn:"2/2",gridRow:"2/2",pointerEvents:"none"},error:{color:"red"},popover:{background:"#fff",maxWidth:400,wordBreak:"break-all",zIndex:1e3,border:"1px solid black",pointerEvents:"none",position:"absolute"},majorTickLabel:{fontSize:"11px"},majorTick:{stroke:"#555"},minorTick:{stroke:"#999"}}}));function U(e,t){var n=t.pxToBp(e),a=n.refName,r=n.start,o=n.offset,c=n.oob,i=Math.floor(r+o);return c?"out of bounds":"".concat(a,":").concat(i.toLocaleString("en-US"))}function W(e,t,n){var a=[],r=e.slice(0).sort((function(e,t){var n=e.end-e.start;return t.end-t.start-n})),o=new Array(Math.round(t));return r.forEach((function(e){var r=e.key,c=e.offsetPx,i=Math.round(t-c+n),l=[Math.max(i-12,0),i];0===i||o.slice.apply(o,l).some(Boolean)?a.push(r):o.fill.apply(o,[!0].concat(l))})),a}function D(e,t,n){for(var a=t*(e=Math.abs(e)),r=parseInt(Number(a).toExponential().split(/e/i)[1],10),o=Math.pow(10,r);o<a&&!((o*=2)>=a);)o*=2.5;var c=(o=Math.max(o,5))/e,i=0;return!(o%10)&&c/10>=n?i=o/10:!(o%5)&&c/5>=n?i=o/5:!(o%2)&&c/2>=n&&(i=o/2),{majorPitch:o,minorPitch:i}}function K(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=[],o=D(t,60,15),c=o.minorPitch||o.majorPitch,i=0;i<e.length;i++)for(var l=e[i],s=l.start,u=l.end,m=l.refName,f=0,d=s,v=u,p=Math.ceil(d/c)*c;p<v;p+=c)a&&p%o.majorPitch?(r.push({type:"minor",base:p-1,index:f,refName:m}),f+=1):n&&Math.abs(p-l.start)>o.minorPitch&&(r.push({type:"major",base:p-1,index:f,refName:m}),f+=1);return r}var H=Object(i.observer)((function(e){var t=e.model,n=X(),a=t.viewWidth,r=t.borderY,c=t.hview,i=t.htextRotation,l=W(c.dynamicBlocks.contentBlocks,a,c.offsetPx),s=K(c.staticBlocks.contentBlocks,c.bpPerPx);return o.a.createElement("svg",{width:a,height:r,className:n.htext},o.a.createElement("g",null,c.dynamicBlocks.contentBlocks.filter((function(e){return!l.includes(e.key)})).map((function(e){var t=e.offsetPx;return o.a.createElement("text",{transform:"rotate(".concat(i,",").concat(t-c.offsetPx,",").concat(0,")"),key:JSON.stringify(e),x:t-c.offsetPx,y:1,fill:"#000000",dominantBaseline:"hanging",textAnchor:"end"},"".concat(e.refName,":").concat(0!==e.start?Math.floor(e.start).toLocaleString("en-US"):""))})),s.map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("line",{key:"line-".concat(JSON.stringify(e)),x1:t,x2:t,y1:0,y2:"major"===e.type?6:4,strokeWidth:1,stroke:"major"===e.type?"#555":"#999",className:"major"===e.type?n.majorTick:n.minorTick,"data-bp":e.base})})),s.filter((function(e){return"major"===e.type})).map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("text",{x:t-7,y:0,transform:"rotate(".concat(i,",").concat(t,",").concat(0,")"),key:"text-".concat(JSON.stringify(e)),style:{fontSize:"11px"},className:n.majorTickLabel,dominantBaseline:"middle",textAnchor:"end"},(e.base+1).toLocaleString("en-US"))}))))})),V=Object(i.observer)((function(e){var t=e.model,n=X(),a=t.borderX,r=t.viewHeight,c=t.vview,i=t.vtextRotation,l=W(c.dynamicBlocks.contentBlocks,r,c.offsetPx),s=K(c.staticBlocks.contentBlocks,c.bpPerPx);return o.a.createElement("svg",{className:n.vtext,width:a,height:r},o.a.createElement("g",null,c.dynamicBlocks.contentBlocks.filter((function(e){return!l.includes(e.key)})).map((function(e){var t=e.offsetPx,n=a;return o.a.createElement("text",{transform:"rotate(".concat(i,",").concat(n,",").concat(t,")"),key:JSON.stringify(e),x:a,y:r-t+c.offsetPx,fill:"#000000",textAnchor:"end"},"".concat(e.refName,":").concat(0!==e.start?Math.floor(e.start):""))})),s.map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("line",{key:"line-".concat(JSON.stringify(e)),y1:r-t,y2:r-t,x1:a,x2:a-("major"===e.type?6:4),strokeWidth:1,stroke:"major"===e.type?"#555":"#999",className:"major"===e.type?n.majorTick:n.minorTick,"data-bp":e.base})})),s.filter((function(e){return"major"===e.type})).map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("text",{y:r-t-3,x:a-7,key:"text-".concat(JSON.stringify(e)),textAnchor:"end",dominantBaseline:"hanging",style:{fontSize:"11px"},className:n.majorTickLabel},(e.base+1).toLocaleString("en-US"))}))))})),q=Object(i.observer)((function(e){var t=e.model,n=e.children,a=e.stroke,r=void 0===a?"#000a":a,c=t.viewWidth,i=t.viewHeight,l=t.hview,s=t.vview,u=l.dynamicBlocks.contentBlocks,m=s.dynamicBlocks.contentBlocks,f=l.displayedRegionsTotalPx-l.offsetPx,d=u[0].offsetPx-l.offsetPx,v=s.displayedRegionsTotalPx-s.offsetPx,p=m[0].offsetPx-s.offsetPx;return o.a.createElement("svg",{style:{background:"rgba(0,0,0,0.12)"},width:c,height:i}," ",o.a.createElement("rect",{x:d,y:i-v,width:f-d,height:v-p,fill:"#fff"}),o.a.createElement("g",null,u.map((function(e){var t=e.offsetPx-l.offsetPx;return o.a.createElement("line",{key:JSON.stringify(e),x1:t,y1:0,x2:t,y2:i,stroke:r})})),m.map((function(e){var t=i-(e.offsetPx-s.offsetPx);return o.a.createElement("line",{key:JSON.stringify(e),x1:0,y1:t,x2:c,y2:t,stroke:r})})),o.a.createElement("line",{x1:f,y1:0,x2:f,y2:i,stroke:r}),o.a.createElement("line",{x1:0,y1:i-v,x2:c,y2:i-v,stroke:r})),n)}));function G(e,t){return e&&[e[0]-t.left,e[1]-t.top]}var Z=Object(i.observer)((function(e){var t,n,c,i=e.model,s=i.hview,f=i.vview,v=i.viewHeight,p=X(),b=Object(r.useState)(),h=Object(a.a)(b,2),y=h[0],g=h[1],x=Object(r.useState)(),E=Object(a.a)(x,2),w=E[0],k=E[1],j=Object(r.useState)(),P=Object(a.a)(j,2),O=P[0],N=P[1],B=Object(r.useRef)(null),S=Object(r.useRef)(null),C=Object(r.useRef)(0),M=Object(r.useRef)(0),T=Object(r.useRef)(null),R=Object(r.useRef)(null),L=Object(r.useRef)(),A=Object(r.useRef)(0),z=Object(r.useRef)(!1),F={left:0,top:0,width:0,height:0},I=(null===(t=B.current)||void 0===t?void 0:t.getBoundingClientRect())||F,_=(null===(n=R.current)||void 0===n?void 0:n.getBoundingClientRect())||F,J=(null===(c=T.current)||void 0===c?void 0:c.getBoundingClientRect())||F,W=G(w,I),D=G(y,I),K=G(O,I),Z=K||D;return Object(r.useEffect)((function(){function e(e){var t=d()(e);e.preventDefault(),!0===e.ctrlKey?(A.current+=t.pixelY/500,i.vview.setScaleFactor(A.current<0?1-A.current:1/(1+A.current)),i.hview.setScaleFactor(A.current<0?1-A.current:1/(1+A.current)),L.current&&clearTimeout(L.current),L.current=setTimeout((function(){Object(l.transaction)((function(){i.hview.setScaleFactor(1),i.vview.setScaleFactor(1),i.hview.zoomTo(A.current>0?i.hview.bpPerPx*(1+A.current):i.hview.bpPerPx/(1-A.current)),i.vview.zoomTo(A.current>0?i.vview.bpPerPx*(1+A.current):i.vview.bpPerPx/(1-A.current))})),A.current=0}),300)):(C.current+=t.pixelX,M.current-=t.pixelY,z.current||(z.current=!0,window.requestAnimationFrame((function(){Object(l.transaction)((function(){i.hview.scroll(C.current),i.vview.scroll(M.current)})),z.current=!1,C.current=0,M.current=0}))))}if(B.current){var t=B.current;return t.addEventListener("wheel",e),function(){t.removeEventListener("wheel",e)}}return function(){}}),[i.hview,i.vview]),Object(r.useEffect)((function(){function e(e){g([e.clientX,e.clientY])}return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),Object(r.useEffect)((function(){var e=function(){};function t(e){W&&D&&Math.abs(W[0]-D[0])>3&&Math.abs(W[1]-D[1])>3?N([e.clientX,e.clientY]):k(void 0)}return W&&!K&&(window.addEventListener("mouseup",t,!0),e=function(){window.removeEventListener("mouseup",t,!0)}),e}),[W,D,K]),o.a.createElement("div",{ref:S,className:p.root},o.a.createElement(Y,{model:i}),o.a.createElement("div",{className:p.container},o.a.createElement("div",{style:{display:"grid",transform:"scaleX(".concat(i.hview.scaleFactor,") scaleY(").concat(i.vview.scaleFactor,")")}},o.a.createElement(V,{model:i}),o.a.createElement(H,{model:i}),o.a.createElement("div",{ref:B,style:{position:"relative"},className:p.content},Z?o.a.createElement("div",{ref:T,className:p.popover,style:{left:Z[0]-(W&&Z[0]-W[0]<0?J.width:0),top:Z[1]-(W&&Z[1]-W[1]<0?J.height:0)}},"x-".concat(U(Z[0],s)),o.a.createElement("br",null),"y-".concat(U(v-Z[1],f))):null,W&&Z&&Math.abs(W[0]-Z[0])>3&&Math.abs(W[1]-Z[1])>3?o.a.createElement("div",{ref:R,className:p.popover,style:{left:W[0]-(Z[0]-W[0]<0?0:_.width),top:W[1]-(Z[1]-W[1]<0?0:_.height)}},"x-".concat(U(W[0],s)),o.a.createElement("br",null),"y-".concat(U(v-W[1],f))):null,o.a.createElement("div",{role:"presentation",style:{cursor:"crosshair"},onMouseDown:function(e){0===e.button&&(k([e.clientX,e.clientY]),g([e.clientX,e.clientY]))}},o.a.createElement(q,{model:i},W&&Z?o.a.createElement("rect",{fill:"rgba(255,0,0,0.3)",x:Math.min(Z[0],W[0]),y:Math.min(Z[1],W[1]),width:Math.abs(Z[0]-W[0]),height:Math.abs(Z[1]-W[1])}):null)),o.a.createElement("div",{className:p.spacer})),o.a.createElement("div",{className:p.overlay},i.tracks.map((function(e){var t=Object(a.a)(e.displays,1)[0],n=t.RenderingComponent;return n?o.a.createElement(n,{key:Object(u.getConf)(e,"trackId"),model:t}):null}))),o.a.createElement(m.Menu,{open:Boolean(K),onMenuItemClick:function(e,t){t(),N(void 0),k(void 0)},onClose:function(){N(void 0),k(void 0)},anchorReference:"anchorPosition",anchorPosition:O?{top:O[1]+30,left:O[0]+30}:void 0,style:{zIndex:1e3},menuItems:[{label:"Zoom in",onClick:function(){W&&K&&i.zoomIn(W,K)}},{label:"Open linear synteny view",onClick:function(){W&&K&&i.onDotplotView(W,K)}}]}))))})),Q=Object(i.observer)((function(e){var t=e.model,n=t.initialized,a=t.loading,r=t.error,c=X();return n||a?r?o.a.createElement("p",{className:c.error},String(r)):a?o.a.createElement("div",null,o.a.createElement("p",null,"Loading..."),o.a.createElement(s.a,null)):o.a.createElement(Z,{model:t}):o.a.createElement(P,{model:t})}));t.default=Q},852:function(e,t,n){"use strict";var a=n(92);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(0,a(n(96)).default)(r.default.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.default=o}}]);
//# sourceMappingURL=29.36f92cc4.chunk.js.map