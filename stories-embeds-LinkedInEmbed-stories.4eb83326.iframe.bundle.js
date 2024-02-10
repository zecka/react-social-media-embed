/*! For license information please see stories-embeds-LinkedInEmbed-stories.4eb83326.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_social_media_embed=self.webpackChunkreact_social_media_embed||[]).push([[644],{"./src/stories/embeds/LinkedInEmbed.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPlaceholder:()=>CustomPlaceholder,CustomPlaceholderLinkText:()=>CustomPlaceholderLinkText,MainExample:()=>MainExample,PlaceholderDisabled:()=>PlaceholderDisabled,PlaceholderSpinnerDisabled:()=>PlaceholderSpinnerDisabled,Size150x570AtUnderMin:()=>Size150x570AtUnderMin,Size250x570AtMinWidth:()=>Size250x570AtMinWidth,Size400x570:()=>Size400x570,Size600x650:()=>Size600x650,UrlOnly:()=>UrlOnly,Width100Percent:()=>Width100Percent,WithPlaceholderImage:()=>WithPlaceholderImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LinkedInEmbed_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),PlaceholderEmbed=__webpack_require__("./src/components/placeholder/PlaceholderEmbed.tsx"),EmbedStyle=__webpack_require__("./src/components/embeds/EmbedStyle.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinkedInEmbed=_ref=>{let{url,postUrl,width,height=500,linkText="View post on LinkedIn",placeholderImageUrl,placeholderSpinner,placeholderSpinnerDisabled=!1,placeholderProps,embedPlaceholder,placeholderDisabled=!1,...divProps}=_ref;const[ready,setReady]=react.useState(!1),placeholderStyle={minWidth:250,maxWidth:550,width:void 0!==width?width:"100%",height:void 0!==height?height:void 0!==divProps.style?.height||void 0!==divProps.style?.maxHeight?"100%":550,border:"solid 1px rgba(0, 0, 0, 0.15)",borderRadius:8},placeholder=embedPlaceholder??(0,jsx_runtime.jsx)(PlaceholderEmbed.Y,{url:postUrl??url,imageUrl:placeholderImageUrl,linkText,spinner:placeholderSpinner,spinnerDisabled:placeholderSpinnerDisabled,...placeholderProps,style:{...placeholderStyle,...placeholderProps?.style}});return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()("rsme-embed rsme-linkedin-embed",divProps.className),style:{overflow:"hidden",width:width??void 0,height:height??void 0,borderRadius:8,...divProps.style},children:[(0,jsx_runtime.jsx)(EmbedStyle.e,{}),(0,jsx_runtime.jsx)("iframe",{className:classnames_default()("linkedin-post",!ready&&"rsme-d-none"),src:url,width:"100%",height:ready?height:0,frameBorder:"0",onLoad:()=>setReady(!0)}),!ready&&!placeholderDisabled&&placeholder]})};LinkedInEmbed.displayName="LinkedInEmbed";try{LinkedInEmbed.displayName="LinkedInEmbed",LinkedInEmbed.__docgenInfo={description:"",displayName:"LinkedInEmbed",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},postUrl:{defaultValue:null,description:"",name:"postUrl",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"500"},description:"",name:"height",required:!1,type:{name:"string | number"}},linkText:{defaultValue:{value:"View post on LinkedIn"},description:"",name:"linkText",required:!1,type:{name:"string"}},placeholderImageUrl:{defaultValue:null,description:"",name:"placeholderImageUrl",required:!1,type:{name:"string"}},placeholderSpinner:{defaultValue:null,description:"",name:"placeholderSpinner",required:!1,type:{name:"ReactNode"}},placeholderSpinnerDisabled:{defaultValue:{value:"false"},description:"",name:"placeholderSpinnerDisabled",required:!1,type:{name:"boolean"}},placeholderProps:{defaultValue:null,description:"",name:"placeholderProps",required:!1,type:{name:"PlaceholderEmbedProps"}},embedPlaceholder:{defaultValue:null,description:"",name:"embedPlaceholder",required:!1,type:{name:"ReactNode"}},placeholderDisabled:{defaultValue:{value:"false"},description:"",name:"placeholderDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/embeds/LinkedInEmbed.tsx#LinkedInEmbed"]={docgenInfo:LinkedInEmbed.__docgenInfo,name:"LinkedInEmbed",path:"src/components/embeds/LinkedInEmbed.tsx#LinkedInEmbed"})}catch(__react_docgen_typescript_loader_error){}var Templates=__webpack_require__("./src/stories/Templates.tsx");const LinkedInEmbed_stories={title:"Embeds/LinkedInEmbed",component:LinkedInEmbed,parameters:{options:{showPanel:!1}}},url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384",postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7",MainExample={args:{url,postUrl,width:325,height:570},decorators:[Templates.YJ]},Size250x570AtMinWidth={args:{url,postUrl,width:250,height:570},decorators:[Templates.Kg]},Size400x570={args:{url,postUrl,width:400,height:570},decorators:[Templates.Kg]},Size600x650={args:{url,postUrl,width:600,height:650},decorators:[Templates.Kg]},Size150x570AtUnderMin={args:{url,postUrl,width:150,height:570},decorators:[Templates.Kg]},Width100Percent={args:{url,postUrl,width:"100%",height:570},decorators:[Templates.Kg]},UrlOnly={args:{url,postUrl},decorators:[Templates.Kg]},WithPlaceholderImage={args:{url,postUrl,width:325,height:570,placeholderImageUrl:"https://placekitten.com/504/325"},decorators:[Templates.Kg]},CustomPlaceholder={args:{url,postUrl,width:325,height:570,embedPlaceholder:(0,jsx_runtime.jsx)("div",{style:{width:325,padding:"150px 0",backgroundColor:"lightsteelblue",textAlign:"center"},children:"Custom Placeholder!"})},decorators:[Templates.Kg]},CustomPlaceholderLinkText={args:{url,postUrl,width:325,height:570,linkText:"Custom link text"},decorators:[Templates.Kg]},PlaceholderSpinnerDisabled={args:{url,postUrl,width:325,height:570,placeholderSpinnerDisabled:!0},decorators:[Templates.Kg]},PlaceholderDisabled={args:{url,postUrl,width:325,height:570,placeholderDisabled:!0},decorators:[Templates.Kg]};MainExample.parameters={...MainExample.parameters,docs:{...MainExample.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 325,\n    height: 570\n  },\n  decorators: [MainExampleTemplate]\n}",...MainExample.parameters?.docs?.source}}},Size250x570AtMinWidth.parameters={...Size250x570AtMinWidth.parameters,docs:{...Size250x570AtMinWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 250,\n    height: 570\n  },\n  decorators: [ToggledOffTemplate]\n}",...Size250x570AtMinWidth.parameters?.docs?.source}}},Size400x570.parameters={...Size400x570.parameters,docs:{...Size400x570.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 400,\n    height: 570\n  },\n  decorators: [ToggledOffTemplate]\n}",...Size400x570.parameters?.docs?.source}}},Size600x650.parameters={...Size600x650.parameters,docs:{...Size600x650.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 600,\n    height: 650\n  },\n  decorators: [ToggledOffTemplate]\n}",...Size600x650.parameters?.docs?.source}}},Size150x570AtUnderMin.parameters={...Size150x570AtUnderMin.parameters,docs:{...Size150x570AtUnderMin.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 150,\n    height: 570\n  },\n  decorators: [ToggledOffTemplate]\n}",...Size150x570AtUnderMin.parameters?.docs?.source}}},Width100Percent.parameters={...Width100Percent.parameters,docs:{...Width100Percent.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: '100%',\n    height: 570\n  },\n  decorators: [ToggledOffTemplate]\n}",...Width100Percent.parameters?.docs?.source}}},UrlOnly.parameters={...UrlOnly.parameters,docs:{...UrlOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl\n  },\n  decorators: [ToggledOffTemplate]\n}",...UrlOnly.parameters?.docs?.source}}},WithPlaceholderImage.parameters={...WithPlaceholderImage.parameters,docs:{...WithPlaceholderImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 325,\n    height: 570,\n    placeholderImageUrl\n  },\n  decorators: [ToggledOffTemplate]\n}",...WithPlaceholderImage.parameters?.docs?.source}}},CustomPlaceholder.parameters={...CustomPlaceholder.parameters,docs:{...CustomPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 325,\n    height: 570,\n    embedPlaceholder: <div style={{\n      width: 325,\n      padding: '150px 0',\n      backgroundColor: 'lightsteelblue',\n      textAlign: 'center'\n    }}>\n        Custom Placeholder!\n      </div>\n  },\n  decorators: [ToggledOffTemplate]\n}",...CustomPlaceholder.parameters?.docs?.source}}},CustomPlaceholderLinkText.parameters={...CustomPlaceholderLinkText.parameters,docs:{...CustomPlaceholderLinkText.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 325,\n    height: 570,\n    linkText: 'Custom link text'\n  },\n  decorators: [ToggledOffTemplate]\n}",...CustomPlaceholderLinkText.parameters?.docs?.source}}},PlaceholderSpinnerDisabled.parameters={...PlaceholderSpinnerDisabled.parameters,docs:{...PlaceholderSpinnerDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 325,\n    height: 570,\n    placeholderSpinnerDisabled: true\n  },\n  decorators: [ToggledOffTemplate]\n}",...PlaceholderSpinnerDisabled.parameters?.docs?.source}}},PlaceholderDisabled.parameters={...PlaceholderDisabled.parameters,docs:{...PlaceholderDisabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    url,\n    postUrl,\n    width: 325,\n    height: 570,\n    placeholderDisabled: true\n  },\n  decorators: [ToggledOffTemplate]\n}",...PlaceholderDisabled.parameters?.docs?.source}}};const __namedExportsOrder=["MainExample","Size250x570AtMinWidth","Size400x570","Size600x650","Size150x570AtUnderMin","Width100Percent","UrlOnly","WithPlaceholderImage","CustomPlaceholder","CustomPlaceholderLinkText","PlaceholderSpinnerDisabled","PlaceholderDisabled"]},"./src/components/embeds/EmbedStyle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>EmbedStyle});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const EmbedStyle=_ref=>{let{...styleProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style",{...styleProps,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(styleProps.className),style:{...styleProps.style},children:"\n        .rsme-embed .rsme-d-none {\n          display: none;\n        }\n    \n        .rsme-embed .twitter-tweet {\n          margin: 0 !important;\n        }\n    \n        .rsme-embed blockquote {\n          margin: 0 !important;\n          padding: 0 !important;\n        }\n\n        .rsme-embed.rsme-facebook-embed .fb-post iframe {\n          width: 100% !important;\n        }\n\n        .rsme-embed.rsme-facebook-embed .fb-post span {\n          width: 100% !important;\n        }\n      "})};EmbedStyle.displayName="EmbedStyle";try{EmbedStyle.displayName="EmbedStyle",EmbedStyle.__docgenInfo={description:"",displayName:"EmbedStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/embeds/EmbedStyle.tsx#EmbedStyle"]={docgenInfo:EmbedStyle.__docgenInfo,name:"EmbedStyle",path:"src/components/embeds/EmbedStyle.tsx#EmbedStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/placeholder/PlaceholderEmbed.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>PlaceholderEmbed});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),EmbedStyle=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/embeds/EmbedStyle.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BorderSpinner=_ref=>{let{...divProps}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("style",{children:"\n        .rsme-spinner {\n          border: 3px solid rgba(0,0,0,0.75);\n          border-right-color: transparent;\n          border-radius: 50%;\n          animation: rsme-spin 1s linear infinite;\n        }\n        @keyframes rsme-spin {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }  \n      "}),(0,jsx_runtime.jsx)("div",{...divProps,className:classnames_default()("rsme-spinner",divProps.className),style:{width:10,height:10,...divProps.style}})]})};try{BorderSpinner.displayName="BorderSpinner",BorderSpinner.__docgenInfo={description:"",displayName:"BorderSpinner",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/BorderSpinner.tsx#BorderSpinner"]={docgenInfo:BorderSpinner.__docgenInfo,name:"BorderSpinner",path:"src/components/placeholder/parts/BorderSpinner.tsx#BorderSpinner"})}catch(__react_docgen_typescript_loader_error){}const EngagementIconsPlaceholder=_ref=>{let{...divProps}=_ref;return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()(divProps.className),style:{display:"flex",alignItems:"center",columnGap:14,...divProps.style},children:[(0,jsx_runtime.jsx)(HeartIcon,{}),(0,jsx_runtime.jsx)(ChatBubbleIcon,{}),(0,jsx_runtime.jsx)(ShareArrowIcon,{})]})};EngagementIconsPlaceholder.displayName="EngagementIconsPlaceholder";const HeartIcon=props=>(0,jsx_runtime.jsxs)("div",{...props,children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",height:"12.5px",transform:"rotate(-45deg) translateX(3px) translateY(1px)",width:"12.5px",flexGrow:0,marginRight:"6px",marginLeft:"2px"}}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})]});HeartIcon.displayName="HeartIcon";const ChatBubbleIcon=props=>(0,jsx_runtime.jsxs)("div",{...props,children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"20px",width:"20px"}}),(0,jsx_runtime.jsx)("div",{style:{width:0,height:0,borderTop:"2px solid transparent",borderLeft:"6px solid #f4f4f4",borderBottom:"2px solid transparent",transform:"translateX(16px) translateY(-4px) rotate(30deg)"}})]});ChatBubbleIcon.displayName="ChatBubbleIcon";const ShareArrowIcon=props=>(0,jsx_runtime.jsx)("div",{...props,style:{height:25,width:25,transform:"translateX(0px) translateY(-2px)"},children:(0,jsx_runtime.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:[(0,jsx_runtime.jsx)("path",{style:{fill:"#F4F4F4"},d:"M295.204,180.593C132.168,180.593,0,312.759,0,475.796\nc51.398-130.047,184.869-203.22,317.483-183.603L295.204,180.593z"}),(0,jsx_runtime.jsx)("path",{style:{fill:"#F4F4F4"},d:"M512,253L295.204,36.204v217.818C159.946,249.655,34.992,339.262,0,475.794\nc59.905-109.171,178.724-165.463,295.204-151.033v145.035L512,253z"})]})});ShareArrowIcon.displayName="ShareArrowIcon";try{EngagementIconsPlaceholder.displayName="EngagementIconsPlaceholder",EngagementIconsPlaceholder.__docgenInfo={description:"",displayName:"EngagementIconsPlaceholder",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#EngagementIconsPlaceholder"]={docgenInfo:EngagementIconsPlaceholder.__docgenInfo,name:"EngagementIconsPlaceholder",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#EngagementIconsPlaceholder"})}catch(__react_docgen_typescript_loader_error){}try{HeartIcon.displayName="HeartIcon",HeartIcon.__docgenInfo={description:"",displayName:"HeartIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#HeartIcon"]={docgenInfo:HeartIcon.__docgenInfo,name:"HeartIcon",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#HeartIcon"})}catch(__react_docgen_typescript_loader_error){}try{ChatBubbleIcon.displayName="ChatBubbleIcon",ChatBubbleIcon.__docgenInfo={description:"",displayName:"ChatBubbleIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ChatBubbleIcon"]={docgenInfo:ChatBubbleIcon.__docgenInfo,name:"ChatBubbleIcon",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ChatBubbleIcon"})}catch(__react_docgen_typescript_loader_error){}try{ShareArrowIcon.displayName="ShareArrowIcon",ShareArrowIcon.__docgenInfo={description:"",displayName:"ShareArrowIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ShareArrowIcon"]={docgenInfo:ShareArrowIcon.__docgenInfo,name:"ShareArrowIcon",path:"src/components/placeholder/parts/EngagementIconsPlaceholder.tsx#ShareArrowIcon"})}catch(__react_docgen_typescript_loader_error){}const ProfilePlaceholder=_ref=>{let{...divProps}=_ref;return(0,jsx_runtime.jsx)("div",{...divProps,className:classnames_default()(divProps.className),style:{...divProps.style},children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",columnGap:14},children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",width:40,height:40}}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",rowGap:6},children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,width:100,height:14}}),(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,width:60,height:14}})]})]})})};ProfilePlaceholder.displayName="ProfilePlaceholder";try{ProfilePlaceholder.displayName="ProfilePlaceholder",ProfilePlaceholder.__docgenInfo={description:"",displayName:"ProfilePlaceholder",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/parts/ProfilePlaceholder.tsx#ProfilePlaceholder"]={docgenInfo:ProfilePlaceholder.__docgenInfo,name:"ProfilePlaceholder",path:"src/components/placeholder/parts/ProfilePlaceholder.tsx#ProfilePlaceholder"})}catch(__react_docgen_typescript_loader_error){}const PlaceholderEmbed=_ref=>{let{url,linkText="View post",imageUrl,spinner=(0,jsx_runtime.jsx)(BorderSpinner,{}),spinnerDisabled,...divProps}=_ref;return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()(divProps.className),style:{overflow:"hidden",border:"1px solid #dee2e6",backgroundColor:"#ffffff",borderRadius:0,boxSizing:"border-box",position:"relative",...divProps.style},children:[(0,jsx_runtime.jsx)(EmbedStyle.e,{}),(0,jsx_runtime.jsxs)("a",{href:url,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:[!imageUrl&&(0,jsx_runtime.jsx)("div",{style:{position:"absolute",top:0,left:0,display:"flex",justifyContent:"space-between",alignItems:"start",paddingLeft:16,paddingRight:16,paddingTop:16,paddingBottom:16,zIndex:2,backgroundColor:"#ffffff"},children:(0,jsx_runtime.jsx)(ProfilePlaceholder,{})}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:imageUrl?"start":"center",height:"100%",width:"100%"},children:[!imageUrl&&(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",rowGap:16,zIndex:3,padding:8,backgroundColor:"#ffffff"},children:[!spinnerDisabled&&spinner,!!linkText&&(0,jsx_runtime.jsx)("div",{style:{color:"#000000",fontFamily:"Arial,sans-serif",fontSize:"14px",fontStyle:"normal",fontWeight:550,lineHeight:"18px",textAlign:"center"},children:linkText})]}),imageUrl&&(void 0!==divProps.style?.height?(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"100%",background:`url("${imageUrl}")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",marginBottom:"40"}}):(0,jsx_runtime.jsx)("div",{style:{width:"100%",marginBottom:40},children:(0,jsx_runtime.jsx)("img",{src:imageUrl,style:{width:"100%"}})}))]}),(0,jsx_runtime.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,height:40,width:"100%",backgroundColor:"#ffffff",zIndex:1},children:[!imageUrl&&(0,jsx_runtime.jsx)(EngagementIconsPlaceholder,{style:{marginLeft:16}}),imageUrl&&(0,jsx_runtime.jsxs)("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"space-between",columnGap:16},children:[(0,jsx_runtime.jsx)("div",{style:{color:"#0095f6",fontWeight:600,fontFamily:"Arial,sans-serif",fontSize:"14px",fontStyle:"normal",whiteSpace:"nowrap",marginLeft:16},children:linkText}),!spinnerDisabled&&(0,jsx_runtime.jsx)("div",{style:{marginRight:16},children:spinner})]})]})]})]})};PlaceholderEmbed.displayName="PlaceholderEmbed";try{PlaceholderEmbed.displayName="PlaceholderEmbed",PlaceholderEmbed.__docgenInfo={description:"",displayName:"PlaceholderEmbed",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},linkText:{defaultValue:{value:"View post"},description:"",name:"linkText",required:!1,type:{name:"string"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},spinner:{defaultValue:{value:"<BorderSpinner />"},description:"",name:"spinner",required:!1,type:{name:"ReactNode"}},spinnerDisabled:{defaultValue:null,description:"",name:"spinnerDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/placeholder/PlaceholderEmbed.tsx#PlaceholderEmbed"]={docgenInfo:PlaceholderEmbed.__docgenInfo,name:"PlaceholderEmbed",path:"src/components/placeholder/PlaceholderEmbed.tsx#PlaceholderEmbed"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Templates.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{YJ:()=>MainExampleTemplate,Kg:()=>ToggledOffTemplate,iU:()=>ToggledOnTemplate});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stories_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stories_button.c,options);stories_button.c&&stories_button.c.locals&&stories_button.c.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const EmbedToggler=_ref=>{let{defaultToggledOn=!1,...divProps}=_ref;const[show,setShow]=react.useState(defaultToggledOn);return(0,jsx_runtime.jsxs)("div",{...divProps,className:classnames_default()(divProps.className),style:{...divProps.style},children:[(0,jsx_runtime.jsx)("div",{className:"button",onClick:()=>setShow(!show),style:{marginBottom:"5px"},children:show?"Hide Embed":"Show Embed"}),(0,jsx_runtime.jsx)("div",{children:show&&divProps.children})]})};EmbedToggler.displayName="EmbedToggler";try{EmbedToggler.displayName="EmbedToggler",EmbedToggler.__docgenInfo={description:"",displayName:"EmbedToggler",props:{defaultToggledOn:{defaultValue:{value:"false"},description:"",name:"defaultToggledOn",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/EmbedToggler.tsx#EmbedToggler"]={docgenInfo:EmbedToggler.__docgenInfo,name:"EmbedToggler",path:"src/stories/EmbedToggler.tsx#EmbedToggler"})}catch(__react_docgen_typescript_loader_error){}const MainExampleTemplate=Child=>(0,jsx_runtime.jsx)(EmbedToggler,{defaultToggledOn:!0,children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Child,{})})});MainExampleTemplate.displayName="MainExampleTemplate";const ToggledOffTemplate=Child=>(0,jsx_runtime.jsx)(EmbedToggler,{defaultToggledOn:"undefined"!=typeof window&&window.location.href.includes("localhost"),children:(0,jsx_runtime.jsx)(Child,{})});ToggledOffTemplate.displayName="ToggledOffTemplate";const ToggledOnTemplate=Child=>(0,jsx_runtime.jsx)(EmbedToggler,{defaultToggledOn:!0,children:(0,jsx_runtime.jsx)(Child,{})});ToggledOnTemplate.displayName="ToggledOnTemplate";try{MainExampleTemplate.displayName="MainExampleTemplate",MainExampleTemplate.__docgenInfo={description:"",displayName:"MainExampleTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Templates.tsx#MainExampleTemplate"]={docgenInfo:MainExampleTemplate.__docgenInfo,name:"MainExampleTemplate",path:"src/stories/Templates.tsx#MainExampleTemplate"})}catch(__react_docgen_typescript_loader_error){}try{ToggledOffTemplate.displayName="ToggledOffTemplate",ToggledOffTemplate.__docgenInfo={description:"",displayName:"ToggledOffTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Templates.tsx#ToggledOffTemplate"]={docgenInfo:ToggledOffTemplate.__docgenInfo,name:"ToggledOffTemplate",path:"src/stories/Templates.tsx#ToggledOffTemplate"})}catch(__react_docgen_typescript_loader_error){}try{ToggledOnTemplate.displayName="ToggledOnTemplate",ToggledOnTemplate.__docgenInfo={description:"",displayName:"ToggledOnTemplate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Templates.tsx#ToggledOnTemplate"]={docgenInfo:ToggledOnTemplate.__docgenInfo,name:"ToggledOnTemplate",path:"src/stories/Templates.tsx#ToggledOnTemplate"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button {\n  border: solid 1px rgb(182, 182, 182);\n  background-color: white;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 8px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: rgb(226, 226, 226);\n  cursor: pointer;\n}\n\n.button:active {\n  background-color: rgb(192, 192, 192);\n  box-shadow: inset 0 0 5px #4b4b4b;\n  cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/stories/button.css"],names:[],mappings:"AAAA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,6EAA6E;EAC7E,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,iCAAiC;EACjC,eAAe;AACjB",sourcesContent:[".button {\n  border: solid 1px rgb(182, 182, 182);\n  background-color: white;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 8px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: rgb(226, 226, 226);\n  cursor: pointer;\n}\n\n.button:active {\n  background-color: rgb(192, 192, 192);\n  box-shadow: inset 0 0 5px #4b4b4b;\n  cursor: pointer;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);