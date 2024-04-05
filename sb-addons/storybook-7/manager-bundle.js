try{
(()=>{var g=__STORYBOOK_API__,{ActiveTabs:T,Consumer:f,ManagerContext:S,Provider:_,addons:r,combineParameters:v,controlOrMetaKey:O,controlOrMetaSymbol:w,eventMatchesShortcut:x,eventToShortcut:M,isMacLike:P,isShortcutTaken:A,keyToSymbol:C,merge:I,mockChannel:j,optionOrAltSymbol:R,shortcutMatchesShortcut:B,shortcutToHumanString:G,types:E,useAddonState:K,useArgTypes:Y,useArgs:H,useChannel:D,useGlobalTypes:N,useGlobals:J,useParameter:L,useSharedState:V,useStoryPrepared:q,useStorybookApi:F,useStorybookState:U}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:oe,background:re,color:se,convert:ie,create:s,createCache:ae,createGlobal:ne,createReset:ce,css:le,darken:pe,ensure:de,ignoreSsrWarning:me,isPropValid:ue,jsx:be,keyframes:he,lighten:ke,styled:ye,themes:ge,typography:Te,useTheme:fe,withTheme:Se}=__STORYBOOK_THEMING__;var i={name:"react-social-media-embed",version:"2.5.13",coreVersion:"3.0.9",author:"Justin Mahar <contact@justinmahar.com>",description:"Easily embed social media posts from Facebook, Instagram, LinkedIn, Pinterest, TikTok, X (Twitter), and YouTube in React.",homepage:"https://justinmahar.github.io/react-social-media-embed/",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"rm -rf ./dist && tsc",test:"npm run build",start:"npm run storybook",storybook:"storybook dev -p 6006","build-storybook":"storybook build",preship:'npm run build && git diff-index HEAD && npm version patch -m "Build, version, and publish."',ship:"npm publish --access public",postship:"git push",update:"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks && echo '' && echo ' \u2192 Be sure to run `npm i` to install new dependencies.' && echo ''"},license:"MIT",repository:{type:"git",url:"git+https://github.com/justinmahar/react-social-media-embed.git"},bugs:{url:"https://github.com/justinmahar/react-social-media-embed/issues"},keywords:["react","social","media","embed","post","ig","instagram","fb","facebook","tiktok","linkedin","pinterest","pin","twitter","tweet","video","x","youtube","yt"],peerDependencies:{react:"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0","react-dom":"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0"},devDependencies:{"@storybook/addon-docs":"^7.6.12","@storybook/addon-essentials":"^7.6.12","@storybook/addon-viewport":"^7.6.12","@storybook/blocks":"^7.6.12","@storybook/react":"^7.6.12","@storybook/react-webpack5":"^7.6.12","@types/react":"^18.2.53","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-storybook":"^0.6.15",lockblocks:"^1.1.8",prettier:"^3.2.5",react:"^18.2.0","react-dom":"^18.2.0","react-markdown":"^8.0.3","react-spinners":"^0.12.0","remark-gfm":"^3.0.1","replace-in-file":"^7.1.0",storybook:"^7.6.12",typescript:"^5.3.3",webpack:"^5.90.1","react-html-props":"^2.0.3"},dependencies:{"@types/youtube-player":"^5.5.5",classnames:"^2.5.1","react-html-props":"^2.0.3","react-sub-unsub":"^2.2.1","react-twitter-embed":"^4.0.4","react-youtube":"^10.1.0"}};var c="React Social Media Embed",l=i.homepage,p="light",d=void 0,a=s({base:p,brandTitle:c,brandUrl:l,brandImage:d});r.setConfig({theme:a});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
