var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,s=(e,s)=>{for(var a in s||(s={}))n.call(s,a)&&i(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&i(e,a,s[a]);return e},a=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);import{d as l,V as r,D as d,E as c,e as u,a as h,t as m,g,c as p,h as f,i as y,s as b,m as v,b as w,f as k,j as C,u as _,k as x,l as L,n as M,o as S,p as T,r as q,q as A,v as N,w as j,x as z,y as O,z as D,A as E,T as I,B as P,C as V,P as B,F as H,G as R,H as $,I as K,J as W,K as U,L as F,M as J,N as Q,O as G}from"./vendor-2cf2331a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();let X={h1:"looks_one",h2:"looks_two",h3:"looks_3",loading:"hourglass_empty",quote:"format_quote",code:"code",table:"table_chart",divider:"horizontal_rule",image:"image",brokenImage:"broken_image",bulletList:"format_list_bulleted",orderedList:"format_list_numbered",taskList:"checklist",bold:"format_bold",italic:"format_italic",inlineCode:"code",strikeThrough:"strikethrough_s",link:"link",leftArrow:"chevron_left",rightArrow:"chevron_right",upArrow:"expand_less",downArrow:"expand_more",alignLeft:"format_align_left",alignRight:"format_align_right",alignCenter:"format_align_center",delete:"delete",select:"select_all",unchecked:"check_box_outline_blank",checked:"check_box"};const Z=()=>({icon:e=>{const t=document.createElement("span");return t.className="icon material-icons material-icons-outlined",t.textContent=X[e],t}});var Y=(e,t)=>{for(const[n,o]of t)e[n]=o;return e};let ee={openImage:e=>"data:image/png;base64,"+window.btoa(e),uploader:async(e,t)=>{const n=[];for(let o=0;o<e.length;o++){const t=e.item(o);t&&(t.type.includes("image")&&n.push(t))}return await Promise.all(n.map((async e=>{const n=await ee.openImage(e),o=e.name;return t.nodes.image.createAndFill({src:n,alt:o})})))}};var te=Y(l({name:"Milkdown",components:{VueEditor:r},props:{text:{type:String,default:'# Milkdown指南\n\n## 支持Markdown语法\n\n| Action | Key         |\n| :----- | :---------- |\n| 常规文本   | Mod-Alt-0   |\n| H1     | Mod-Alt-1   |\n| H2     | Mod-Alt-2   |\n| H3     | Mod-Alt-3   |\n| H4     | Mod-Alt-4   |\n| H5     | Mod-Alt-5   |\n| H6     | Mod-Alt-6   |\n| 代码块    | Mod-Alt-c   |\n| 删除换行   | Shift-Enter |\n\n## 支持TeX语法\n\n`$`以召唤math插件，由KaTeX渲染。\n\n输入`$\\pi`就可以得到$\\pi$。\n\n## 快捷键\n\n请去<https://milkdown.dev/#/zh-hans/keyboard-shortcuts>查看。\n\n## 剪贴板\n\n可以复制粘贴markdown语言，其他不行。\n\n## emoji~~😅~~\n\n支持一些emoji，输入`:`以选择，输入`:emoji:`以打开面板。\n\n## 图表\n\n输入` ```mermaid `以打开\n\n```mermaid\npie\n    title Top 5 Languages\n    "Python" : 20\n    "Java" : 20\n    "C" : 20\n    "C++" :  20\n\t"Javascript":10\n```\n\n访问<https://mermaid-js.github.io/mermaid/#/>查看。\n\n'},editable:{type:Boolean,default:!0},doc:d},setup(e){console.log(e);let t=c.make().config((t=>{t.set(u,{editable:()=>e.editable}),t.set(h,e.text)})).use(m({slots:Z})).use(g).use(p.headless()).use(f).use(y).use(b).use(v).use(w).use(k).use(C).use(_.configure(x,{uploader:ee.uploader})).use(L),n={markdown:[],doc:[console.log]};t.config((function(e){e.set(M,n)})).use(S);let o=T((e=>t.config((t=>{t.set(q,e)}))));return s({editor:t,ls:n,editorf:o,listeners:[]},e)},mounted(){if(window.milkdown=this,this.ls.markdown.push(this.attention),this.doc){let e=this;this.bind((function(t){e.$emit("change",t)}))}},emits:["change"],methods:{async md(){return this.editor.action((e=>{const t=e.get(A);return e.get(N)(t.state.doc)}))},bind(e){this.listeners.push(e)},attention(e,t){if("markdown"===t){this.markdown=e();for(let e of this.listeners)e(this.markdown)}else{this.data=e();for(let e of this.listeners)e(this.data)}},edit(e){0==arguments.length&&(e=this.editable),this.editor.config((t=>{t.set(u,{editable:()=>e})})),this.editable=!this.editable}}}),[["render",function(e,t,n,o,i,s){const a=j("VueEditor");return O(),z(a,{editor:e.editorf,ref:"ve"},null,8,["editor"])}]]);function ne(e,t){return-1!==e.lastIndexOf(".json")?fetch(e).then((e=>e.json())):new Promise(((n,o)=>{let i=document.createElement("script");i.type=t?"module":"text/javascript",i.src=e,document.body.appendChild(i),i.onload=()=>{n()},i.onerror=()=>{o()}}))}const oe=l({name:"Monaco",components:{},props:{editable:{type:Boolean,default:!1},type:{type:String,default:"undefined"},diff:Boolean,content:String,language:{type:String,default:"html"},options:Object,scroll:{type:Boolean,default:!0},size:String,resizable:{type:Boolean,default:!0},model:Object},setup:function(e){let t=s({},e);"edit"===t.type&&(t.editable=!0),console.log(t.editable?"editable":"ineditable");let n={editor:null,listeners:[],loading:!0,prevline:0,theme:"vs",beyond:!1,round:!1,margin:!0,model:t.model||null,cursor:"line",blink:"smooth"},o=s(s({preview:!1,ligature:!0,tab:!1,resizable:!1,minimap:!1,menu:!1,accelerate:!1,editable:!1,lightbulb:!1},n),t);return"show"===t.type?o:s(s({beyond:!1,round:!1,ligature:!1,accelerate:!0,resizable:!0,menu:!0,number:!0,scroll:!1,preview:!0,cursor:"line",tab:!0,tabText:"onlySnippets",minimap:!0,lightbulb:!0,font:"Monaco",size:"10px"},n),t)},methods:{lang(e){let t=this.editor.getModel();monaco.editor.setModelLanguage(t,e)},line(){return this.editor.getModel().getLineCount()},height(){return this.editor.getContentHeight()},sz(e){this.update({fontSize:e})},resize(e,t){e&&(this.$el.style.width=e),t&&(this.$el.style.height=t)},async finish(){this.$el.classList.remove("loading"),this.loading=!1;let e=await ne("src/assets/Textmate.json");e&&(monaco.editor.defineTheme("Textmate",e),this.them("Textmate")),window.milkdown.bind(this.text),this.listeners.push((()=>{let e=this.line();e!==this.prevline&&e>10&&e<100&&(this.resize(null,this.height()+"px"),this.prevline=e)}))},bind(e,t){"string"==typeof e&&(e=[e]);for(let n of e){n=n.toLowerCase();let e=monaco.KeyMod;e.CtrlCmd,e.CtrlCmd,e.AltCmd,e.Shift,e.US_OPEN_SQUARE_BRACKET,e.US_EQUAL,e.US_MINUS}if("unfoldAll"===t)t="unfondRecursively";t="editor."+t,this.editor.addCommand(key,(function(){editor.trigger("",t)}))},update(e){this.editor.updateOptions(e)},size(e){this.update({fontSize:e})},edit(e){this.update({readOnly:!e})},text(e){if(void 0===e)return this.editor.getValue();this.editor.setValue(e)},getSelectionText(e,t,n,o,i){let s="",a=0,l=null,r=null;return t<o?e.getValue().split("").map(((e,s)=>{1===t?(l=n-1,"\n"===e&&(a+=1,a===o-1&&(r=s+i))):"\n"===e&&(a+=1,a===t-1&&(l=s+n),a===o-1&&(r=s+i))})):t>o?e.getValue().split("").map(((e,s)=>{1===o?(l=i-1,"\n"===e&&(a+=1,a===t-1&&(r=s+n))):"\n"===e&&(a+=1,a===o-1&&(l=s+i),a===t-1&&(r=s+n))})):t===o&&e.getValue().split("").map(((e,t)=>{1===o?(l=n<i?n-1:i-1,r=n>i?n-1:i-1):"\n"===e&&(a+=1,a===o-1&&(l=n<i?n+t:i+t,r=n>i?n+t:i+t))})),s=e.getValue().slice(l,r),s},them(e){"dark"===e?e="vs-dark":"light"===e?e="vs":"transparent"===e&&document.styleSheets[0]&&document.styleSheets[0].addRule("canvas","opacity:0;"),this.update({theme:e})},async loadTheme(e,t,n){return await fetch(t).then((e=>e.json())).then((t=>{monaco.editor.defineTheme(e,t),n&&this.them(e)})),this},changed(e){this.attention()},attention(){let e=this.text();for(let t of this.listeners)t(e)},select(){arguments.length&&console.log("select returns selectedText without param.");let e=this.editor.getSelection();return this.getSelectionText(this.editor,e.startLineNumber,e.startColumn,e.endLineNumber,e.endColumn)},async install(){console.log("installing monaco.");try{require}catch(t){await ne("src/assets/require.js")}require.config({paths:{vs:"src/assets/vs"}});let e=this;require(["vs/editor/editor.main"],(function(){!async function(e,n){if(!e||!n)return void console.log("language and dict needed","sample of dict:{token1:{suggestion1:val,...},...");const o=await fetch("src/assets/python-token.json").then((e=>e.json()));function i(e,t){t=null==t&&"boolean"==typeof t&&t;var n=monaco.languages.CompletionItemKind,o="Variable";switch((typeof e).toLowerCase()){case"object":o="Class";case"function":o=t?"Method":"Function";default:o=t?"Property":"Variable"}return n[o]}"python"===e&&monaco.languages.registerCompletionItemProvider("python",{provideCompletionItems:function(e,t,n){let i=new Set;var s=e.getValueInRange({startLineNumber:t.lineNumber,startColumn:0,endLineNumber:t.lineNumber,endColumn:t.column}).replace("\t","").trim().split(/[. &%/^!|=:+-/*//()]/);console.log(s);var a=s[s.length-1];for(let c in o)o[c].indexOf(a)>=0&&i.add(o[c]);let l,r=new RegExp("([a-zA-Z_.]\\w*)","g"),d=e.getValue();for(;null!==(l=r.exec(d));)i.add(l[0]);return i.size?{suggestions:Array.from(i).map((e=>({label:e,insertText:e,kind:monaco.languages.CompletionItemKind.Variable})))}:null}}),monaco.languages.registerCompletionItemProvider(e,{triggerCharacters:[".","("],provideCompletionItems:function(e,o,s){var a=e.getValueInRange({startLineNumber:o.lineNumber,startColumn:0,endLineNumber:o.lineNumber,endColumn:o.column}).replace("\t","").split(" "),l=a[a.length-1],r="."==l.charAt(l.length-1),d=[],c=n||{},u="";if(r){var h=l.substring(0,l.length-1).split(".");c=n[h[0]],u=h[0];for(var m=1;m<h.length;m++){if(!c.hasOwnProperty(h[m]))return null;u+="."+h[m],c=c[h[m]]}u+="."}for(var g in c)if(c.hasOwnProperty(g)&&!g.startsWith("__")){var p="";try{p=c[g].__proto__.constructor.name}catch(t){p=typeof c[g]}var f={label:u+g,kind:i(c[g],r),detail:p,insertText:g};"function"==f.detail.toLowerCase()&&(f.insertText+="(",f.documentation=c[g].toString().split("{")[0]),d.push(f)}return d.length?{suggestions:d}:null}})}("python",{Person:{name:"",age:0}}),e.generate(),e.loadTheme("transparent","assets/transparent.json",1)}))},generate(){console.log("generating monaco.");let e=this;this&&(this.editor=monaco.editor[e.diff?"createDiffEditor":"create"](this.$el,{value:e.content,language:e.language,roundedSelection:e.round,scrollBeyondLastLine:e.beyond,readOnly:!e.editable,fontLigatures:e.ligature,automaticLayout:e.resizable,contextmenu:e.menu,cursorBlinking:e.blink,cursorStyle:e.cursor,autoClosingBrackets:!0,dimension:e.height?{height:e.height,width:e.width}:null,disableLayerHinting:e.accelerate,scrollbar:{alwaysConsumeMouseWheel:!e.scroll},suggest:{preview:e.preview,shareSuggestSelections:!0},mouseWheelZoom:!0,tabCompletion:e.tab,lineNumbers:e.number,theme:e.theme,wordWrap:"on",foldingStrategy:"indentation",glyphMargin:e.margin,fontFamily:e.font,minimap:{enabled:e.minimap},lightbulb:{enabled:e.lightbulb},fontSize:e.size||"10px"})),window.editor=this,this.model&&this.editor.setModel(this.model,this.language),this.editor.onDidChangeModelContent(this.changed),this.editor.colorObj=new ie(this.editor),this.finish()}},mounted:async function(){try{monaco}catch(e){await this.install()}},beforeDestroy(){this.editor&&this.editor.dispose()}});class ie{constructor(e){a(this,"defaultColours",["rgba(104,208,254,1)","rgba(255,255,64,1)","rgba(255,127,255,1)"]),a(this,"defaultDebounceDelay",200),this.oldDecorators=[];var t=this.defaultColours.length,n="";this.classNames=[];for(var o=0;o<t;o++){n+=".bracket.bracket-color"+o+" {\ncolor: "+this.defaultColours[o]+"; }\n",this.classNames.push("bracket bracket-color"+o)}if(n){let t=e._domElement;var i=document.createElement("style");i.innerHTML=n,t&&t.appendChild(i),this.styleSheet=i}this.debounce=this.defaultDebounceDelay,this.editor=e,this.applyWithDebounce(),e.onDidChangeModelContent((()=>this.applyWithDebounce(e)))}applyWithDebounce(e){let t=this||e.colorObj;this.debounceTimer||(this.debounceTimer=window.setTimeout((function(){t.apply(),t.debounceTimer=null}),this.debounce))}apply(){if(this.oldModel&&(this.oldDecorators=this.oldModel.deltaDecorations(this.oldDecorators,[])),this.editor){var e=this.editor.getModel();if(e&&!(e.getLineCount()>1e5)){for(var t=[],n=this.editor.getValue(),o=/[\[\{\(]/g,i=o.exec(n),s=[];i;){var a=e.getPositionAt(i.index);let r=e.matchBracket(a);if(null==r){i=o.exec(n);continue}let d=s.length,c=s[d-1];for(;0!=d&&(c&&r[0].startLineNumber>c.endLineNumber||r[0].startLineNumber==c.endLineNumber&&r[0].startColumn>=c.endColumn);)s.pop(),d=s.length,c=s[d-1];s.push(r[1]);let u=this.classNames[d%this.classNames.length];for(let e=0;e<r.length;e++){var l={range:r[e],options:{inlineClassName:u,stickiness:monaco.editor.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges}};t.push(l)}i=o.exec(n)}this.oldModel=e,this.oldDecorators=e.deltaDecorations(this.oldDecorators,t)}}}}const se=["language","type","options","diff","content","size","model"];var ae=Y(oe,[["render",function(e,t,n,o,i,s){return O(),D("div",{class:"monaco-container loading",language:e.language,type:e.type,options:e.options,diff:e.diff,content:e.content,size:e.size,model:e.model},null,8,se)}]]);const le=E.extend({content:"paragraph"}),re=E.extend({content:"taskList"}),de=I.extend({content:"text*"}),ce=l({name:"QuestionFramework",components:{EditorContent:P,Milkdown:te},data:()=>({title:null,type:null,content:null,ydoc:new d}),mounted(){this.title=new V({extensions:[le,B,H,R.configure({document:this.ydoc,field:"title"})],content:"<p>"}),this.tags=new V({extensions:[re,B,H,$,de,R.configure({document:this.ydoc,field:"tags"})],content:'\n        <ul data-type="taskList">\n          <li data-type="taskItem" data-checked="true">tags</li>\n        </ul>\n      '}),this.type=new V({extensions:[E,B,H,K,R.configure({document:this.ydoc,field:"type"})],content:"\n        <p>type=</p>\n      "}),this.content="..."},methods:{change(e){this.content=e},set(e,t){this[e].setContent(t)}},computed:{json(){return{title:W(this.ydoc,"title"),type:W(this.ydoc,"type"),tags:W(this.ydoc,"tags"),content:{content:this.content,type:"content"}}}},beforeUnmount(){this.title.destroy(),this.type.destroy(),this.tag.destroy(),this.provider.destroy()}}),ue={class:"tiptap question-framwork",ref:"tp"},he={class:"question-item"},me=U("div",{class:"question-title"},"标题Title",-1),ge={key:0,class:"question-input question-input-title"},pe={class:"question-item"},fe=U("div",{class:"question-title"},"标签Tag",-1),ye={key:0,class:"question-input question-input-tag"},be={class:"question-item"},ve=U("div",{class:"question-title"},"题型Type",-1),we={key:0,class:"question-input question-input-type"},ke={class:"question-item"},Ce=U("div",{class:"question-title"},"内容Content",-1),_e={key:0,class:"question-input question-input-content"},xe={class:"question-item"},Le=U("div",{class:"question-title"},"输出Output",-1),Me={class:"output"};var Se=Y(ce,[["render",function(e,t,n,o,i,s){const a=j("editor-content"),l=j("Milkdown");return O(),D("div",ue,[U("div",he,[me,e.title?(O(),D("div",ge,[F(a,{editor:e.title},null,8,["editor"])])):J("",!0)]),U("div",pe,[fe,e.tags?(O(),D("div",ye,[F(a,{editor:e.tags},null,8,["editor"])])):J("",!0)]),U("div",be,[ve,e.type?(O(),D("div",we,[F(a,{editor:e.type},null,8,["editor"])])):J("",!0)]),U("div",ke,[Ce,e.content?(O(),D("div",_e,[F(l,{onChange:e.change},null,8,["onChange"])])):J("",!0)]),U("div",xe,[Le,U("div",Me,[U("code",null,Q(e.json),1)])])],512)}]]);const Te={class:"main"};G({setup:e=>(e,t)=>(O(),D("div",Te,[F(Se),F(ae,{language:"markdown",size:"20px",type:"edit"})]))}).mount("#app");
