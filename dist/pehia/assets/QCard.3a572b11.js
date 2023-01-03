import{c as o,r as s,w as I,a as $,h as n,T as j,g as D}from"./index.fbd2e922.js";import{c as k,h as _,e as P}from"./QIcon.dabfdec0.js";const E={ratio:[String,Number]};function F(e,a){return o(()=>{const l=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const H=16/9;var A=k({name:"QImg",props:{...E,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:H},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:l}){const g=s(e.initialRatio),f=F(e,g);let i;const r=[s(null),s(h())],u=s(0),c=s(!1),d=s(!1),C=o(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),w=o(()=>({width:e.width,height:e.height})),B=o(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),T=o(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));I(()=>S(),y);function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function h(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function y(t){clearTimeout(i),d.value=!1,t===null?(c.value=!1,r[u.value^1].value=h()):c.value=!0,r[u.value].value=t}function z({target:t}){i!==null&&(clearTimeout(i),g.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,q(t,1))}function q(t,v){i===null||v===1e3||(t.complete===!0?N(t):i=setTimeout(()=>{q(t,v+1)},50))}function N(t){i!==null&&(u.value=u.value^1,r[u.value].value=null,c.value=!1,d.value=!1,l("load",t.currentSrc||t.src))}function Q(t){clearTimeout(i),c.value=!1,d.value=!0,r[u.value].value=null,r[u.value^1].value=h(),l("error",t)}function b(t){const v=r[t].value,m={key:"img_"+t,class:B.value,style:T.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...v};return u.value===t?(m.class+=" q-img__image--waiting",Object.assign(m,{onLoad:z,onError:Q})):m.class+=" q-img__image--loaded",n("div",{class:"q-img__container absolute-full",key:"img"+t},n("img",m))}function R(){return c.value!==!0?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},_(a[d.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[n(P,{color:e.spinnerColor,size:e.spinnerSize})])}return y(S()),$(()=>{clearTimeout(i),i=null}),()=>{const t=[];return f.value!==null&&t.push(n("div",{key:"filler",style:f.value})),d.value!==!0&&(r[0].value!==null&&t.push(b(0)),r[1].value!==null&&t.push(b(1))),t.push(n(j,{name:"q-transition--fade"},R)),n("div",{class:C.value,style:w.value,role:"img","aria-label":e.alt},t)}}});const L={dark:{type:Boolean,default:null}};function M(e,a){return o(()=>e.dark===null?a.dark.isActive:e.dark)}var U=k({name:"QCard",props:{...L,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:l}}=D(),g=M(e,l),f=o(()=>"q-card"+(g.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>n(e.tag,{class:f.value},_(a.default))}});export{A as Q,M as a,U as b,L as u};