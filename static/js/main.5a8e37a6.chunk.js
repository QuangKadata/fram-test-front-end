(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(18),r=a.n(c),i=(a(25),a(0));var l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"footer",children:Object(i.jsx)("div",{className:"container text-center",children:Object(i.jsx)("small",{children:"React \xa9 BLACK LIVE MATTER"})})})})};var d=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",style:{borderBottom:"1px solid lightgray"},children:[Object(i.jsx)("button",{className:"btn btn-default btn-close-sidebar mr-3",onClick:function(){var e;null===(e=document.getElementById("content-page"))||void 0===e||e.classList.remove("hide-sidebar")},style:{border:"1px solid gray",borderRadius:"4px"},children:Object(i.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})}),Object(i.jsx)("a",{href:"/",className:"navbar-brand",children:Object(i.jsx)("img",{src:"https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/9fdfae942131961bc5751bd4ceea01ba.jpg",width:"60px",height:"35px",alt:""})}),Object(i.jsx)("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarCollapse",children:[Object(i.jsx)("div",{className:"navbar-nav"}),Object(i.jsx)("form",{className:"form-inline",children:Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("input",{type:"text",className:"form-control",width:"100",placeholder:"Search"}),Object(i.jsx)("div",{className:"input-group-append",children:Object(i.jsx)("button",{type:"button",className:"btn btn-secondary",style:{background:"red",border:"none"},children:Object(i.jsx)("i",{className:"fa fa-search"})})})]})})]})]})})},o=function(){return Object(i.jsx)("div",{className:"sidebar",style:{background:"#f8f9fa"},children:Object(i.jsx)("div",{className:"navbar-collapse",id:"navbarsExampleDefault",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{children:Object(i.jsx)("button",{className:"btn btn-close-sidebar",onClick:function(){var e;null===(e=document.getElementById("content-page"))||void 0===e||e.classList.add("hide-sidebar")},style:{float:"right",padding:"8px"},children:Object(i.jsx)("i",{className:"fa fa-chevron-left",style:{margin:"10px"},"aria-hidden":"true"})})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",children:"Employess"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",children:"About Me"})})]})})})},b=a(4);var j=function(){var e=n.useState(0),t=Object(b.a)(e,2),a=t[0],s=t[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("h1",{children:["Result: ",a]}),Object(i.jsx)("button",{onClick:function(){return s(a+1)},children:"+"}),Object(i.jsx)("button",{onClick:function(){return s(0)},children:"Reset"})]})},u=a(20),h=a(5),x=a.n(h),p=a(8),m=a(9),O=a.n(m),v=a(19),f=a.n(v);a(47);var g=function(){var e,t=Object(n.useState)(),a=Object(b.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(0),l=Object(b.a)(r,2),d=l[0],o=l[1];Object(n.useEffect)((function(){j()}),[]);var j=function(){var e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("https://60abc0b05a4de40017ccaccf.mockapi.io/api/employess");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(u.a)(s),e.next=4,O.a.post("https://60abc0b05a4de40017ccaccf.mockapi.io/api/employess");case 4:200===(a=e.sent).status||201===a.status?(t.push(a.data),c(t),alert("Create Successfully !")):alert("Create failed"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Create failed"),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)(n.Fragment,{children:Object(i.jsxs)("div",{className:"card",style:{padding:"10px"},children:[Object(i.jsx)("div",{style:{padding:"20px"},children:Object(i.jsxs)("button",{className:"btn btn-success",style:{position:"absolute",right:"10px",top:"5px",backgroundColor:"red",border:"none"},onClick:h,children:[Object(i.jsx)("i",{className:"fa fa-plus mr-1","aria-hidden":"true"}),"NEW"]})}),Object(i.jsxs)("table",{className:"table table-bordered table-hover",style:{border:"1px solid #fff"},children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{style:{color:"red"},children:[Object(i.jsxs)("th",{children:[Object(i.jsx)("i",{className:"fa fa-sort mr-1 text-dark","aria-hidden":"true"}),"Name"]}),Object(i.jsxs)("th",{children:[Object(i.jsx)("i",{className:"fa fa-sort mr-1 text-dark","aria-hidden":"true"}),"Email"]}),Object(i.jsxs)("th",{children:[Object(i.jsx)("i",{className:"fa fa-sort mr-1 text-dark","aria-hidden":"true"}),"Position"]})]})}),Object(i.jsx)("tbody",{children:null===s||void 0===s||null===(e=s.slice(5*d,5*(d+1)))||void 0===e?void 0:e.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.position})]},e.id)}))})]}),(null===s||void 0===s?void 0:s.length)&&Object(i.jsx)(f.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil((null===s||void 0===s?void 0:s.length)/5),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;o(t)},containerClassName:"pagination",activeClassName:"active"})]})})},N=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(g,{})]})};a(48);var y=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{id:"content-page",children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"main-content",children:Object(i.jsx)(N,{})})]}),Object(i.jsx)(l,{})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),k()}},[[49,1,2]]]);
//# sourceMappingURL=main.5a8e37a6.chunk.js.map