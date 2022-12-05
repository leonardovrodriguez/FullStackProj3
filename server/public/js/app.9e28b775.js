(function(){"use strict";var t={841:function(t,e,n){var o=n(963),s=n(252);const r={id:"app"};function a(t,e,n,o,a,i){const c=(0,s.up)("PostComponent");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(c)])}var i=n(577);const c=t=>((0,s.dD)("data-v-607ebb48"),t=t(),(0,s.Cn)(),t),l={class:"container",style:{"padding-top":"0px !important","margin-top":"0px !important"}},d={style:{color:"#ffffff","font-family":"Arial, Helvetica, sans-serif","font-weight":"bold"}},p=c((()=>(0,s._)("label",{for:"create-post",style:{color:"#ffffff","font-family":"Arial, Helvetica, sans-serif"}}," Whats on your mind?",-1))),u={class:"create-post"},f={class:"row"},w=c((()=>(0,s._)("div",{class:"col-sm"},null,-1))),m={class:"col-sm input-group"},y=c((()=>(0,s._)("div",{class:"col-sm"},null,-1))),v=c((()=>(0,s._)("hr",null,null,-1))),b={key:0,class:"error"},h={class:"post-container"},g=["item","index"],k={class:"text"},x=["onClick"],P={key:1,class:"row"},U={key:0,class:"col-sm"},D={key:1,class:"col-sm input-group"},_={key:2,class:"col-sm"},C=["onClick"],O=["onClick"];function T(t,e,n,r,a,c){const T=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("h1",d,[(0,s.Uk)("Tweeter "),(0,s.Wm)(T,{icon:"fa-solid fa-kiwi-bird"})]),p,(0,s._)("div",u,[(0,s._)("div",f,[w,(0,s._)("div",m,[(0,s.wy)((0,s._)("input",{type:"text",id:"create-post",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>a.text=t),placeholder:"Post Description"},null,512),[[o.nr,a.text]]),(0,s._)("button",{onClick:e[1]||(e[1]=(...t)=>c.createPost&&c.createPost(...t)),class:"btn btn-primary"},[(0,s.Wm)(T,{icon:"fa-solid fa-paper-plane"})])]),y])]),v,a.error?((0,s.wg)(),(0,s.iD)("p",b,(0,i.zw)(a.error),1)):(0,s.kq)("",!0),(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.posts,((t,n)=>((0,s.wg)(),(0,s.iD)("div",{class:"post",item:t,index:n,key:t._id},[(0,s.Uk)((0,i.zw)(`\n         ${t.createdAt.getMonth()+1}/\n         ${t.createdAt.getDate()}/\n         ${t.createdAt.getFullYear()}\n      `)+" ",1),(0,s._)("p",k,(0,i.zw)(t.text),1),n!=a.toUpdate?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-primary",id:"update-post",onClick:t=>c.setUpdateIndex(n)},[(0,s.Wm)(T,{icon:"fa-solid fa-pen-to-square"})],8,x)):(0,s.kq)("",!0),n==a.toUpdate?((0,s.wg)(),(0,s.iD)("div",P,[n==a.toUpdate?((0,s.wg)(),(0,s.iD)("div",U)):(0,s.kq)("",!0),n==a.toUpdate?((0,s.wg)(),(0,s.iD)("div",D,[n==a.toUpdate?(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:0,class:"form-control",type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>a.newText=t),placeholder:"New Description"},null,512)),[[o.nr,a.newText]]):(0,s.kq)("",!0)])):(0,s.kq)("",!0),n==a.toUpdate?((0,s.wg)(),(0,s.iD)("div",_)):(0,s.kq)("",!0)])):(0,s.kq)("",!0),n==a.toUpdate?((0,s.wg)(),(0,s.iD)("button",{key:2,class:"btn btn-primary",onClick:e=>c.updatePost(t._id,a.newText)},"Submit",8,C)):(0,s.kq)("",!0),n==a.toUpdate?((0,s.wg)(),(0,s.iD)("button",{key:3,class:"btn btn-primary",onClick:e[3]||(e[3]=(...t)=>c.resetUpdate&&c.resetUpdate(...t))},"Cancel")):(0,s.kq)("",!0),n!=a.toUpdate?((0,s.wg)(),(0,s.iD)("button",{key:4,class:"btn btn-primary",onClick:e=>c.deletePost(t._id)},[(0,s.Wm)(T,{icon:"fa-solid fa-trash"})],8,O)):(0,s.kq)("",!0)],8,g)))),128))])])}var q=n(594);const j="api/posts/";class A{static getPosts(){return new Promise(((t,e)=>{q.Z.get(j).then((e=>{const n=e.data;t(n.map((t=>({...t,createdAt:new Date(t.createdAt)}))))})).catch((t=>{e(t)}))}))}static insertPost(t){return q.Z.post(j,{text:t})}static deletePost(t){return q.Z["delete"](`${j}${t}`)}static updatePost(t,e){return q.Z.post(`${j}${t}`,{text:e})}}var $=A,W=(n(734),n(901)),S=n.n(W),Z={name:"PostComponent",data(){return{posts:[],toUpdate:null,newText:"",error:"",text:""}},async created(){try{this.posts=await $.getPosts()}catch(t){this.error=t.message}},methods:{async createPost(){this.text?(await $.insertPost(this.text),this.posts=await $.getPosts(),S().success("Post Created!"),this.text=""):S().error("Enter a description!")},async deletePost(t){await $.deletePost(t),this.posts=await $.getPosts(),S().success("Post Deleted!")},async updatePost(t){await $.updatePost(t,this.newText),this.posts=await $.getPosts(),S().success("Post Updated!"),this.toUpdate=null,this.newText=""},setUpdateIndex(t){this.toUpdate=t},resetUpdate(){this.toUpdate=null,this.newText=""}}},I=n(744);const M=(0,I.Z)(Z,[["render",T],["__scopeId","data-v-607ebb48"]]);var z=M,E={name:"App",components:{PostComponent:z}};const H=(0,I.Z)(E,[["render",a]]);var Y=H,F=n(636),N=n(810),V=n(417);n(117);F.vI.add(V.Yai,V.$aW,V.XCy,V.R7J),(0,o.ri)(Y).component("font-awesome-icon",N.GN).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var t=[];n.O=function(e,o,s,r){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],r=t[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[o,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var d=c(n)}for(e&&e(o);l<a.length;l++)r=a[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(841)}));o=n.O(o)})();
//# sourceMappingURL=app.9e28b775.js.map