import k from"./BF3zRJgk.js";import P from"./BxiCxbFy.js";import b from"./qmg7l4yr.js";import{k as L,d,G as g,P as R,v as x,H as C,I as S,r as B,u as N,J as m,K as T,L as j,M as u,N as p,T as E,O as H,Q as O,S as A,R as w,U as D,m as $,V as q,W as I,b as f,c as M,g as y,w as _,X as v}from"./CkuhlUJA.js";import"./vw6mIIlp.js";const V=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,n.slots)}}),F=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=L(),o=g(R),s=o===x()?C():o,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),l=B();n.expose({layoutRef:l});const i=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",i);N().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??T;return j(E,a&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{O(i)}},{default:()=>p(G,{layoutProps:H(n.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},n.slots)})}).default()}}}),G=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&w(D,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=n.slots).default)==null?void 0:s.call(o):p(V,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),J={class:"document-driven-page"},z=d({__name:"document-driven",setup(t){const{contentHead:n}=$().public.content,{page:e,layout:o}=q();return e.value,n&&I(e),(s,r)=>{const l=k,i=P,a=b,c=F;return f(),M("div",J,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(f(),v(i,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(l,{value:h},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{z as default};
