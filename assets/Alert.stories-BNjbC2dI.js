import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-DKvazcp1.js";import"./index-hJVOCH9Z.js";import{B as u}from"./Button-DISkbajg.js";import{c as A}from"./index-Bab3r4A0.js";import{C as q}from"./check-circle-CoOd3O1R.js";import{E as v}from"./error-solid-D2Hs_MlS.js";import{I as C}from"./info-DBCpNRHu.js";import{C as w}from"./close-B9ROkHHZ.js";import{T as p}from"./Text-CWBqIN79.js";import{I as N}from"./IconButton-Xalk3TWG.js";import"./preload-helper-PPVm8Dsz.js";import"./UnstyledButton-jKTHJBUf.js";import"./Typography-Cfs1tTK3.js";import"./IndicatorIcon-CCKyM8mM.js";import"./Tooltip-B-6a6aZ-.js";import"./floating-ui.react-Cy3sgRsI.js";import"./floating-ui.react-dom-Bddn_7hx.js";import"./index-Q9MwdAjB.js";import"./index-Den-Wr7e.js";const j="_alert_zx76t_10",T="_content_zx76t_37",S="_icon_zx76t_48",I="_actions_zx76t_64",t={alert:j,content:T,"text-content":"_text-content_zx76t_44",icon:S,actions:I},l=({type:s,title:g,children:h,className:f,actions:m,onClose:d,...x})=>{const y=A(t.alert,f),_=b.useCallback(c=>{switch(s){case"critical":return e.jsx(v,{...c});case"info":return e.jsx(C,{...c});case"success":return e.jsx(q,{...c})}},[s]);return e.jsxs("div",{...x,className:y,"data-type":s,children:[_({width:24,height:24,className:t.icon,"aria-hidden":!0}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t["text-content"],children:[e.jsx(p,{size:"md",weight:"semibold",children:g}),e.jsx(p,{size:"sm",weight:"regular",children:h})]}),m&&e.jsx("div",{className:t.actions,children:m})]}),d&&e.jsx(N,{onClick:d,"aria-label":"Close",role:"button",className:t.close,children:e.jsx(w,{})})]})};try{l.displayName="Alert",l.__docgenInfo={description:"An alert component component that is dismissable when passing an `onClose`\nproperty.",displayName:"Alert",filePath:"/home/runner/work/compound-web/compound-web/src/components/Alert/Alert.tsx",methods:[],props:{type:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Alert/Alert.tsx",name:"TypeLiteral"}],description:"The type of alert",name:"type",required:!0,tags:{},type:{name:"enum",raw:'"critical" | "success" | "info"',value:[{value:'"critical"'},{value:'"success"'},{value:'"info"'}]}},title:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Alert/Alert.tsx",name:"TypeLiteral"}],description:"The headline of the alert.",name:"title",required:!0,tags:{},type:{name:"string"}},className:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Alert/Alert.tsx",name:"TypeLiteral"}],description:"The CSS class name.",name:"className",required:!1,tags:{},type:{name:"string"}},actions:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Alert/Alert.tsx",name:"TypeLiteral"}],description:`Actions that will be displayed to the right of the content
Wraps and stacks actions under content when alert's size is <=600px
eg
\`\`\`
<Alert
 title='Title'
 actions={<Button onClick={doSomething}>Yes</Button>}
/>
\`\`\``,name:"actions",required:!1,tags:{},type:{name:"ReactNode"}},onClose:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Alert/Alert.tsx",name:"TypeLiteral"}],description:`Event callback when dismissing the alert. Determines the display of the
"close" button at the top right of the alert.`,name:"onClose",required:!1,tags:{param:"e the event parameters"},type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}},tags:{}}}catch{}const K={title:"Alert",component:l,tags:["autodocs"],argTypes:{type:{options:["success","critical","info"],control:{type:"inline-radio"}}},args:{title:"Title",children:"Description",onClose:()=>{console.log("Clicked!")}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0"}}},o={args:{type:"success"}},n={args:{type:"critical"}},a={args:{type:"info"}},r={args:{type:"info",title:"Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",children:"Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Yes"}),e.jsx(u,{children:"No"})]})}},i={...o,args:{...o.args,onClose:void 0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "success"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "critical"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children: "Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    actions: <>
        <Button>Yes</Button>
        <Button>No</Button>
      </>
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Success,
  args: {
    ...Success.args,
    onClose: undefined
  }
}`,...i.parameters?.docs?.source}}};const X=["Success","Critical","Info","WithActions","WithoutClose"];export{n as Critical,a as Info,o as Success,r as WithActions,i as WithoutClose,X as __namedExportsOrder,K as default};
