import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-_VDPg7a7.js";import"./index-BPSbGwnC.js";import{c as l}from"./index-BMuvKAV9.js";import{s as n,A as s}from"./Avatar-jDV8pQiW.js";import"./preload-helper-PPVm8Dsz.js";const m=`<!--
Copyright 2023 New Vector Ltd.
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
-->

<svg>
  <clipPath id="cpdAvatarClip" clipPathUnits="objectBoundingBox">
    <!-- 
        All values below need to be between 0 and 1
        for objectBoundingBox to work
     -->
    <path d="M 0,0 V 1 H 0.7683594 A 0.6,0.6 0 0 1 0.5,0.5 0.6,0.6 0 0 1 0.7683594,0 Z" />
  </clipPath>
</svg>
`,c="cpdAvatarClipSvg";let a=0;const r=({children:o,className:i})=>(d.useEffect(()=>{if(a===0){const p=`
        <div aria-hidden="true" id="${c}" class="${n["clip-path"]}">
          ${m}
        </div>
      `;document.body.insertAdjacentHTML("beforeend",p)}return a++,()=>{a--,a<=0&&document.getElementById(c)?.remove()}},[]),e.jsx("div",{className:l(n["stacked-avatars"],i),children:o}));try{r.displayName="AvatarStack",r.__docgenInfo={description:"Renders a stack of avatars and clips the content appropriately.\n\nThe `type` of avatars should always be set to `round`\nAnd all the avatars should have the same size.",displayName:"AvatarStack",filePath:"/home/runner/work/compound-web/compound-web/src/components/Avatar/AvatarStack.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Avatar/AvatarStack.tsx",name:"TypeLiteral"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const h={title:"Avatar/AvatarStack",component:r,tags:["autodocs"],argTypes:{},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{name:"Bob",id:"@bob:example.org",size:"20px",src:"/images/__test__/kitten2.jpg"}),e.jsx(s,{name:"Alice",id:"@alice:example.org",size:"20px",src:"/images/__test__/kitten.jpg"}),e.jsx(s,{name:"Bob",id:"@bob:example.org",size:"20px",src:"/images/__test__/kitten2.jpg"})]})}},t={args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};const x=["AvatarStack"];export{t as AvatarStack,x as __namedExportsOrder,h as default};
