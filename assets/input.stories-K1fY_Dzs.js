import{Z as p,$ as S,Q as a,a as o,b as l,s as E,V as k,_ as I}from"./iframe-CgneSgH9.js";import"./legacy-CkD1GFCA.js";import{s as u}from"./attributes-Bd7WPEUP.js";import{s as c,c as m}from"./class-DcOriy5i.js";import{b as v}from"./input-wVfQgeBE.js";import"./preload-helper-PPVm8Dsz.js";var B=l('<input type="number"/>'),D=l('<input type="email"/>'),F=l('<input type="password"/>'),G=l('<input type="text"/>'),H=l('<span class="svelte-g0zi4j"> </span>'),J=l('<div class="svelte-g0zi4j"><label class="svelte-g0zi4j"> <!></label> <!></div>');function s(j,n){let i=p(n,"placeholder",8,""),d=p(n,"value",12,""),z=p(n,"label",8,""),_=p(n,"type",8,"text"),t=p(n,"error",8,"");var x=J(),C=k(x),w=k(C),V=E(w);{var q=r=>{var e=B();a(()=>{c(e,1,m(t()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",i())}),v(e,d),o(r,e)},R=r=>{var e=D();a(()=>{c(e,1,m(t()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",i())}),v(e,d),o(r,e)},T=r=>{var e=F();a(()=>{c(e,1,m(t()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",i())}),v(e,d),o(r,e)},O=r=>{var e=G();a(()=>{c(e,1,m(t()?"error":""),"svelte-g0zi4j"),u(e,"placeholder",i())}),v(e,d),o(r,e)};S(V,r=>{_()==="number"?r(q):_()==="email"?r(R,1):_()==="password"?r(T,2):r(O,!1)})}var Q=E(C,2);{var Z=r=>{var e=H(),A=k(e);a(()=>I(A,t())),o(r,e)};S(Q,r=>{t()&&r(Z)})}a(()=>I(w,`${z()??""} `)),o(j,x)}s.__docgen={data:[{name:"placeholder",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"text"'},{name:"error",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"Input.svelte"};const W={title:"Components/Input"},y=()=>({Component:s,props:{placeholder:"enter value..."}}),b=()=>({Component:s,props:{label:"Enter number here",placeholder:"enter value...",type:"number"}}),f=()=>({Component:s,props:{label:"Enter email address here",placeholder:"enter value...",type:"email"}}),h=()=>({Component:s,props:{label:"Enter password here",placeholder:"enter value...",type:"password"}}),g=()=>({Component:s,props:{label:"Required field",placeholder:"enter value...",error:"This is a required field"}});y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(): StorybookSvelte.Component => ({
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
})`,...g.parameters?.docs?.source}}};const X=["text","number","email","password","withError"];export{X as __namedExportsOrder,W as default,f as email,b as number,h as password,y as text,g as withError};
