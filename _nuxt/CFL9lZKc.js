import{u as m}from"./BZAWB3SM.js";import{d as v,r as h,I as f,b as e,c as o,M as i,f as p,e as t,F as y,Z as b,p as C,i as k,t as g,l as I}from"./CkuhlUJA.js";const n=s=>(C("data-v-852b9bff"),s=s(),k(),s),S={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),x=n(()=>t("div",{class:"content"}," Copied! ",-1)),B=[w,x],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>t("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(s){const a=s,{copy:l}=m(),c=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(e(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(e(),o("div",S,B)):p("",!0),T,t("div",F,[(e(!0),o(y,null,b(i(r),d=>(e(),o("span",{key:d,class:"line"},[N,t("span",V,g(d),1)]))),128))]),i(c)!=="copied"?(e(),o("div",j," Click to copy ")):p("",!0)]))}}),L=I(q,[["__scopeId","data-v-852b9bff"]]);export{L as default};
