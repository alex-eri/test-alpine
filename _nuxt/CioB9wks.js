import"./BtOZl0-_.js";import m from"./CFqWlxQ5.js";import f from"./CFL9lZKc.js";import y from"./BdpwS7Pt.js";import{r as n}from"./DVLsP_zR.js";import{d as _,b as o,c as a,e as s,f as r,F as h,X as c,w as k,j as i,t as l,a5 as v,l as $}from"./CkuhlUJA.js";import"./BZAWB3SM.js";const w={class:"block-hero"},B={class:"layout"},S={class:"content"},g={key:0,class:"announce"},q={class:"title"},H={class:"description"},V={key:1,class:"extra"},b={class:"actions"},A=["href"],C={class:"support"},N=_({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,T)=>{const d=m,u=f,p=y;return o(),a("section",w,[s("div",B,[s("div",S,[t.$slots.announce?(o(),a("p",g,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):r("",!0),s("h1",q,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",H,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),a("div",V,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):r("",!0),s("div",b,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),a(h,{key:1},[e.cta?(o(),c(d,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(l(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(o(),a("a",{key:1,href:e.secondary[1],class:"secondary"},l(e.secondary[0]),9,A)):r("",!0)],64))])]),s("div",C,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),L=$(N,[["__scopeId","data-v-21f1f9a2"]]);export{L as default};
