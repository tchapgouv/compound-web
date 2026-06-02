import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-DiRGk66W.js";import"./index-Berc1BMp.js";import{C as l}from"./check-D9pWHURI.js";import{c as C}from"./index-zXCRHanH.js";import{T as w}from"./Text-PUEc1Lni.js";import{C as I}from"./close-C8v1IV2g.js";import{I as b}from"./IconButton-0mvs-kB3.js";import{T as k}from"./Tooltip-CqIA5m9L.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-BYSxK9Jc.js";import"./UnstyledButton-CE0PvGbE.js";import"./IndicatorIcon-Bt2VAnu7.js";import"./floating-ui.react-DnLVLOSf.js";import"./floating-ui.react-dom-BmxSQ0gD.js";import"./index-QDlEmBhf.js";import"./index-FjhBhZSL.js";const S="_icon_1ysb3_26",j="_content_1ysb3_34",v="_close_1ysb3_41",t={"toast-container":"_toast-container_1ysb3_8",icon:S,"has-close":"_has-close_1ysb3_30",content:j,close:v},c=x.forwardRef(function({children:h,className:y,Icon:m,onClose:d,tooltip:f,...g},T){const p=!!d,_=C(t["toast-container"],y,{[t["has-close"]]:p});return o.jsxs(w,{...g,as:"div",size:"sm",weight:"medium",className:_,ref:T,children:[o.jsxs("div",{className:t.content,children:[m&&o.jsx(m,{className:t.icon,width:20,height:20,"aria-hidden":!0}),h]}),p&&o.jsx(b,{size:"24px",kind:"secondary",noBackground:!0,tooltip:f,tooltipPlacement:"right",className:t.close,onClick:d,children:o.jsx(I,{})})]})});try{c.displayName="Toast",c.__docgenInfo={description:"",displayName:"Toast",filePath:"/home/runner/work/compound-web/compound-web/src/components/Toast/Toast.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Toast/Toast.tsx",name:"TypeLiteral"},{fileName:"compound-web/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],description:"",name:"className",required:!1,tags:{},type:{name:"string"}},Icon:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Toast/Toast.tsx",name:"TypeLiteral"}],description:"An icon to display within the button.",name:"Icon",required:!1,tags:{},type:{name:"ComponentType<SVGAttributes<SVGElement>>"}},onClose:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Toast/Toast.tsx",name:"TypeLiteral"}],description:"Whether to show the action button. If true, an action button will be shown on the right side of the toast.",name:"onClose",required:!1,tags:{},type:{name:"MouseEventHandler<HTMLButtonElement>"}},tooltip:{defaultValue:null,declarations:[{fileName:"compound-web/src/components/Toast/Toast.tsx",name:"TypeLiteral"}],description:"The tooltip to show on the close button. This is only used if `onClose` is provided.",name:"tooltip",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const{fn:u}=__STORYBOOK_MODULE_TEST__,K={title:"Toast",component:c,tags:["autodocs"],argTypes:{},args:{children:"Would you like some toast?",onClose:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3627-42633&t=m0RMwUTXkukgU29g-0"}},decorators:[e=>o.jsx(k,{children:o.jsx(e,{})})]},s={},n={args:{Icon:l}},a={args:{Icon:l,onClose:u(),tooltip:"Close"}},r={decorators:[e=>o.jsx("div",{style:{width:"250px"},children:o.jsx(e,{})})],args:{Icon:l,children:"Would you like some toast on multiple multiple multiple lines?"}},i={decorators:[e=>o.jsx("div",{style:{width:"250px"},children:o.jsx(e,{})})],args:{Icon:l,onClose:u(),tooltip:"Close",children:"Would you like some toast on multiple multiple multiple lines?"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "250px"
  }}>
        <Story />
      </div>],
  args: {
    Icon: CheckIcon,
    children: "Would you like some toast on multiple multiple multiple lines?"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "250px"
  }}>
        <Story />
      </div>],
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close",
    children: "Would you like some toast on multiple multiple multiple lines?"
  }
}`,...i.parameters?.docs?.source}}};const Q=["Default","Icon","CloseAndIcon","Multiline","MultilineAndClose"];export{a as CloseAndIcon,s as Default,n as Icon,r as Multiline,i as MultilineAndClose,Q as __namedExportsOrder,K as default};
