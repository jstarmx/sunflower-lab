import{H as P,W as p,Y as S,K as o,a as s,M as W,b as l,s as E,P as k,X as I}from"./iframe-DmS6-p8r.js";import{s as u}from"./attributes--R_M9z1N.js";import{s as c,c as m}from"./class-DcOriy5i.js";import{b as v}from"./input-CFYcisJU.js";import"./preload-helper-PPVm8Dsz.js";var X=l('<input type="number"/>'),Y=l('<input type="email"/>'),A=l('<input type="password"/>'),B=l('<input type="text"/>'),D=l('<span class="svelte-g0zi4j"> </span>'),F=l('<div class="svelte-g0zi4j"><label class="svelte-g0zi4j"> <!></label> <!></div>');function n(j,t){P(t,!0);let i=p(t,"value",15,""),d=p(t,"placeholder",3,""),z=p(t,"label",3,""),_=p(t,"type",3,"text"),a=p(t,"error",3,"");var x=F(),C=k(x),w=k(C),V=E(w);{var q=r=>{var e=X();o(()=>{c(e,1,m(a()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",d())}),v(e,i),s(r,e)},R=r=>{var e=Y();o(()=>{c(e,1,m(a()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",d())}),v(e,i),s(r,e)},T=r=>{var e=A();o(()=>{c(e,1,m(a()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",d())}),v(e,i),s(r,e)},H=r=>{var e=B();o(()=>{c(e,1,m(a()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",d())}),v(e,i),s(r,e)};S(V,r=>{_()==="number"?r(q):_()==="email"?r(R,1):_()==="password"?r(T,2):r(H,!1)})}var K=E(C,2);{var M=r=>{var e=D(),O=k(e);o(()=>I(O,a())),s(r,e)};S(K,r=>{a()&&r(M)})}o(()=>I(w,`${z()??""} `)),s(j,x),W()}n.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"placeholder",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"text"'},{name:"error",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"Input.svelte"};const U={title:"Components/Input"},y=()=>({Component:n,props:{placeholder:"enter value..."}}),b=()=>({Component:n,props:{label:"Enter number here",placeholder:"enter value...",type:"number"}}),f=()=>({Component:n,props:{label:"Enter email address here",placeholder:"enter value...",type:"email"}}),h=()=>({Component:n,props:{label:"Enter password here",placeholder:"enter value...",type:"password"}}),g=()=>({Component:n,props:{label:"Required field",placeholder:"enter value...",error:"This is a required field"}});y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    placeholder: 'enter value...'
  }
})`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    label: 'Enter number here',
    placeholder: 'enter value...',
    type: 'number'
  }
})`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    label: 'Enter email address here',
    placeholder: 'enter value...',
    type: 'email'
  }
})`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    label: 'Enter password here',
    placeholder: 'enter value...',
    type: 'password'
  }
})`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    label: 'Required field',
    placeholder: 'enter value...',
    error: 'This is a required field'
  }
})`,...g.parameters?.docs?.source}}};const Z=["text","number","email","password","withError"];export{Z as __namedExportsOrder,U as default,f as email,b as number,h as password,y as text,g as withError};
