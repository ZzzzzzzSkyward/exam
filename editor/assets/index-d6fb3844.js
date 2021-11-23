var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))a.call(t,n)&&s(e,n,t[n]);return e},l=(e,t,n)=>(s(e,"symbol"!=typeof t?t+"":t,n),n);import{d,e as c,m as p,c as u,K as h,o as m,a as g,I as f,r as b,A as y,b as v,V as w,f as x,g as k,t as M,h as C,i as _,j as N,k as T,s as A,l as L,n as S,E as O,p as j,q as D,u as q,v as E,w as z,x as $,y as H,z as P,B,C as R,D as V,F as W,G as I,H as U,J as K,L as Q,M as F,N as J}from"./vendor-519066ea.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();let G={h1:"looks_one",h2:"looks_two",h3:"looks_3",loading:"hourglass_empty",quote:"format_quote",code:"code",table:"table_chart",divider:"horizontal_rule",image:"image",brokenImage:"broken_image",bulletList:"format_list_bulleted",orderedList:"format_list_numbered",taskList:"checklist",bold:"format_bold",italic:"format_italic",inlineCode:"code",strikeThrough:"strikethrough_s",link:"link",leftArrow:"chevron_left",rightArrow:"chevron_right",upArrow:"expand_less",downArrow:"expand_more",alignLeft:"format_align_left",alignRight:"format_align_right",alignCenter:"format_align_center",delete:"delete",select:"select_all",unchecked:"check_box_outline_blank",checked:"check_box"};const X=()=>({icon:e=>{const t=document.createElement("span");return t.className="icon material-icons material-icons-outlined",t.textContent=G[e],t}});var Z=(e,t)=>{for(const[n,o]of t)e[n]=o;return e};const Y=d({name:"Monaco",components:{},props:{editable:{type:Boolean,default:!1},type:{type:String,default:"undefined"},diff:Boolean,content:String,language:{type:String,default:"html"},options:Object,scroll:{type:Boolean,default:!0},size:String,resizable:{type:Boolean,default:!0},model:Object},setup:function(e){let t=r({},e);"edit"===t.type&&(t.editable=!0),console.log(t.editable?"editable":"ineditable");let n={editor:null,listeners:[],loading:!0,prevline:0,theme:"vs",beyond:!1,round:!1,margin:!0,minimap:!1,model:t.model||null,cursor:"line",blink:"smooth"},o=r(r({preview:!1,ligature:!0,tab:!1,resizable:!1,menu:!1,accelerate:!1,editable:!1,lightbulb:!1},n),t);return"show"===t.type?o:r(r({beyond:!1,round:!1,ligature:!1,accelerate:!0,resizable:!0,menu:!0,number:!0,scroll:!1,preview:!0,cursor:"line",tab:!0,tabText:"onlySnippets",lightbulb:!0,font:"Monaco",size:"10px"},n),t)},methods:{lang(e){let t=this.editor.getModel();c.setModelLanguage(t,e)},line(){return this.editor.getModel().getLineCount()},height(){return this.editor.getContentHeight()},sz(e){this.update({fontSize:e})},resize(e,t){e&&(this.$el.style.width=e+"px"),t&&(this.$el.style.height=t+"px")},async finish(){this.$el.classList.remove("loading"),this.loading=!1,this.listeners.push((()=>{let e=this.line();e!==this.prevline&&e>10&&e<100&&(this.resize(null,this.height()+"px"),this.prevline=e)}))},bind(e,t){"string"==typeof e&&(e=[e]);for(let n of e){n=n.toLowerCase();let e=h;e.CtrlCmd,e.CtrlCmd,e.AltCmd,e.Shift,e.US_OPEN_SQUARE_BRACKET,e.US_EQUAL,e.US_MINUS}if("unfoldAll"===t)t="unfondRecursively";t="editor."+t,this.editor.addCommand(key,(function(){editor.trigger("",t)}))},update(e){this.editor.updateOptions(e)},size(e){this.update({fontSize:e})},edit(e){this.update({readOnly:!e})},text(e){if(void 0===e)return this.editor.getValue();this.editor.setValue(e)},getSelectionText(e,t,n,o,i){let a="",s=0,r=null,l=null;return t<o?e.getValue().split("").map(((e,a)=>{1===t?(r=n-1,"\n"===e&&(s+=1,s===o-1&&(l=a+i))):"\n"===e&&(s+=1,s===t-1&&(r=a+n),s===o-1&&(l=a+i))})):t>o?e.getValue().split("").map(((e,a)=>{1===o?(r=i-1,"\n"===e&&(s+=1,s===t-1&&(l=a+n))):"\n"===e&&(s+=1,s===o-1&&(r=a+i),s===t-1&&(l=a+n))})):t===o&&e.getValue().split("").map(((e,t)=>{1===o?(r=n<i?n-1:i-1,l=n>i?n-1:i-1):"\n"===e&&(s+=1,s===o-1&&(r=n<i?n+t:i+t,l=n>i?n+t:i+t))})),a=e.getValue().slice(r,l),a},them(e){"dark"===e?e="vs-dark":"light"===e?e="vs":"transparent"===e&&document.styleSheets[0]&&document.styleSheets[0].addRule(".monaco-editor canvas","opacity:0;"),this.update({theme:e})},async loadTheme(e,t,n){return await fetch(t).then((e=>e.json())).then((t=>{c.defineTheme(e,t),n&&this.them(e)})),this},changed(e){this.attention()},attention(){let e=this.text();for(let t of this.listeners)t(e)},select(){arguments.length&&console.log("select returns selectedText without param.");let e=this.editor.getSelection();return this.getSelectionText(this.editor,e.startLineNumber,e.startColumn,e.endLineNumber,e.endColumn)},async install(){console.log("testing monaco."),this.generate()},generate(){this.loadTheme("transparent","assets/transparent.json",1),console.log("generating monaco.");let e=this;this&&(this.editor=c[e.diff?"createDiffEditor":"create"](this.$el,{value:e.content,language:e.language,roundedSelection:e.round,scrollBeyondLastLine:e.beyond,readOnly:!e.editable,fontLigatures:e.ligature,automaticLayout:e.resizable,contextmenu:e.menu,cursorBlinking:e.blink,cursorStyle:e.cursor,autoClosingBrackets:!0,dimension:e.height?{height:e.height,width:e.width}:null,disableLayerHinting:e.accelerate,scrollbar:{alwaysConsumeMouseWheel:!e.scroll},suggest:{preview:e.preview,shareSuggestSelections:!0},mouseWheelZoom:!0,tabCompletion:e.tab,lineNumbers:e.number,theme:e.theme,wordWrap:"on",foldingStrategy:"indentation",glyphMargin:e.margin,fontFamily:e.font,minimap:{enabled:e.minimap},lightbulb:{enabled:e.lightbulb},fontSize:e.size||"10px"})),window.editor=this,this.model&&this.editor.setModel(this.model,this.language),this.editor.onDidChangeModelContent(this.changed),this.editor.colorObj=new ee(this.editor),this.finish()}},mounted:async function(){this.install()},beforeDestroy(){this.editor&&this.editor.dispose()}});class ee{constructor(e){l(this,"defaultColours",["rgba(104,208,254,1)","rgba(255,255,64,1)","rgba(255,127,255,1)"]),l(this,"defaultDebounceDelay",200),this.oldDecorators=[];var t=this.defaultColours.length,n="";this.classNames=[];for(var o=0;o<t;o++){n+=".bracket.bracket-color"+o+" {\ncolor: "+this.defaultColours[o]+"; }\n",this.classNames.push("bracket bracket-color"+o)}if(n){let t=e._domElement;var i=document.createElement("style");i.innerHTML=n,t&&t.appendChild(i),this.styleSheet=i}this.debounce=this.defaultDebounceDelay,this.editor=e,this.applyWithDebounce(),e.onDidChangeModelContent((()=>this.applyWithDebounce(e)))}applyWithDebounce(e){let t=this||e.colorObj;this.debounceTimer||(this.debounceTimer=window.setTimeout((function(){t.apply(),t.debounceTimer=null}),this.debounce))}apply(){if(this.oldModel&&(this.oldDecorators=this.oldModel.deltaDecorations(this.oldDecorators,[])),this.editor){var e=this.editor.getModel();if(e&&!(e.getLineCount()>1e5)){for(var t=[],n=this.editor.getValue(),o=/[\[\{\(]/g,i=o.exec(n),a=[];i;){var s=e.getPositionAt(i.index);let l=e.matchBracket(s);if(null==l){i=o.exec(n);continue}let d=a.length,p=a[d-1];for(;0!=d&&(p&&l[0].startLineNumber>p.endLineNumber||l[0].startLineNumber==p.endLineNumber&&l[0].startColumn>=p.endColumn);)a.pop(),d=a.length,p=a[d-1];a.push(l[1]);let u=this.classNames[d%this.classNames.length];for(let e=0;e<l.length;e++){var r={range:l[e],options:{inlineClassName:u,stickiness:c.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges}};t.push(r)}i=o.exec(n)}this.oldModel=e,this.oldDecorators=e.deltaDecorations(this.oldDecorators,t)}}}}const te=["language","type","options","diff","content","size","model"];var ne=Z(Y,[["render",function(e,t,n,o,i,a){return m(),u("div",{class:"monaco-container loading",language:e.language,type:e.type,options:e.options,diff:e.diff,content:e.content,size:e.size,model:e.model},null,8,te)}]]);class oe{constructor(){this.dom=null,this.content="",this.mounted=!1,this.parent=document.createElement("div"),this.mount()}mount(){if(!this.mounted)return this.app=v({components:{Monaco:ne},date(){return{content:this.content}},template:"<Monaco :content='content' type='show' ref='editor' size='20px'/>"}).mount(this.parent),this.mounted=!0,this}get(){return this.app.$refs.editor.text()}set(e){return this.app.$refs.editor.text(e),this.app.$refs.editor.resize(null,this.app.$refs.editor.height()),this}}g((()=>({id:"codes",type:"textDirective",schema:()=>({inline:!1,attrs:{data:""},group:"code",marks:"",parseDOM:[{tag:"codes",getAttrs:e=>{if(!(e instanceof HTMLElement))throw new Error;return{data:e.getAttribute("innerText")}}}],toDOM(e){console.log(e,this,arguments),window.nd=e;let t=document.createElement("pre");return t.innerHTML="1",t},parseMarkdown:{match:e=>"textDirective"===e.type&&"codes"===e.name,runner:(e,t,n)=>{console.log("parsemd",globalThis),e.addNode(n,{data:t.innerText})}},toMarkdown:{match:e=>"codes"===e.type.name,runner:(e,t)=>{console.log("tomd",globalThis),e.addNode("textDirective",void 0,void 0,{name:"codes",attributes:{data:t.attrs.data}})}}}),inputRules:e=>[new f(/````([^`]*)/,((t,n,o,i)=>{const{tr:a}=t;return n[0]&&a.replaceWith(o,i,e.create({data:n[1]})),a}))],remarkPlugins:()=>[b]}))),g((e=>({id:"codeeditor",schema:()=>({group:"block",inline:!1,selectable:!1,marks:"",attrs:{content:{default:""}},parseDOM:[{tag:'div[data-type="codeeditor"]',getAttrs:e=>{if(!(e instanceof HTMLElement))throw new Error;return{content:e.editor.get()}}}],toDOM:e=>{console.log("to dom",e);let t=document.createElement("div");t.dataset.type="codeeditor",e.attrs.className&&t.classList.add(e.attrs.className),t.classList.add("monaco-container");let n=new oe;return n.content=e.attrs.content,n.mount(t),t.editor=n,{dom:t}},parseMarkdown:{match:({type:e})=>"codeeditor"===e,runner:(e,t,n)=>{globalThis.parent=globalThis.parent||document.createElement("div"),console.log("parse md",globalThis),globalThis.content=t.value,globalThis.editor.content=globalThis.content,globalThis.editor.mount(globalThis.parent),e.addNode(n,{html:t.value})}},toMarkdown:{match:e=>"codeeditor"===e.type.name,runner:(e,t)=>(console.log("to md"),e.addNode("code",void 0,t.value))}}),inputRules:e=>[new f(/````([^`]*)/,((t,n,o,i)=>{const{tr:a}=t;return n[0]&&a.replaceWith(o,i,e.create({data:n[1]})),a})),new f(/^(\/code)$/,((e,t,n,o)=>e.tr))],remarkPlugins:()=>[],prosePlugins:()=>[]})));const ie=g((e=>({id:"fence2",type:"code",schema:()=>({group:"block",inline:!1,selectable:!1,marks:"",code:!0,content:"text*",defining:!0,attrs:{content:{default:""}},parseDOM:[{tag:'div[data-type="codeeditor"]',getAttrs:e=>{if(!(e instanceof HTMLElement))throw new Error;return{content:e.editor.get()}}}],toDOM:e=>{console.log(e);let t=new oe;t.set(e.textContent);let n=t.parent;return n.dataset.type="codeeditor",e.attrs.className&&n.classList.add(e.attrs.className),n.classList.add("monaco-container"),{dom:n}},parseMarkdown:{match:({type:e})=>"code"===e,runner:(e,t,n)=>{console.log("parse md",t,n);const o=t.lang,i=t.value;e.addNode(n,{language:o},i)}},toMarkdown:{match:e=>"fence2"===e.type.name,runner:(e,t)=>(console.log("to md"),e.addNode("code",void 0,t.value,{language:t.attrs.lang}))}})})));var ae=y.create([ie()]);let se={openImage:e=>"data:image/png;base64,"+window.btoa(e),uploader:async(e,t)=>{const n=[];for(let o=0;o<e.length;o++){const t=e.item(o);t&&(t.type.includes("image")&&n.push(t))}return await Promise.all(n.map((async e=>{const n=await se.openImage(e),o=e.name;return t.nodes.image.createAndFill({src:n,alt:o})})))}};var re=Z(d({name:"Milkdown",components:{VueEditor:w},props:{text:{type:String,default:'# Milkdown指南\n\n## 支持Markdown语法\n\n| Action | Key         |\n| :----- | :---------- |\n| 常规文本   | Mod-Alt-0   |\n| H1     | Mod-Alt-1   |\n| H2     | Mod-Alt-2   |\n| H3     | Mod-Alt-3   |\n| H4     | Mod-Alt-4   |\n| H5     | Mod-Alt-5   |\n| H6     | Mod-Alt-6   |\n| 代码块    | Mod-Alt-c   |\n| 删除换行   | Shift-Enter |\n\n## 支持TeX语法\n\n`$`以召唤math插件，由KaTeX渲染。\n\n输入`$\\pi`就可以得到$\\pi$。\n\n## 快捷键\n\n请去<https://milkdown.dev/#/zh-hans/keyboard-shortcuts>查看。\n\n## 剪贴板\n\n可以复制粘贴markdown语言，其他不行。\n\n## emoji~~😅~~\n\n支持一些emoji，输入`:`以选择，输入`:emoji:`以打开面板。\n\n## 图表\n\n输入` ```mermaid `以打开\n\n```mermaid\npie\n    title Top 5 Languages\n    "Python" : 20\n    "Java" : 20\n    "C" : 20\n    "C++" :  20\n\t"Javascript":10\n```\n\n访问<https://mermaid-js.github.io/mermaid/#/>查看。\n\n'},json:{type:Object,default:null},editable:{type:Boolean,default:!0}},setup(e){console.log(e);let t=[x,k],n=[M,C,_,N,T,A,L,S.headless()],o=[S.headless(),ae],i=O.make().config((t=>{t.set(j,{editable:()=>!!e.editable}),t.set(D,e.json?{type:"json",value:e.json}:e.text)}));if(i.use(q({slots:X})),e.editable)for(let r of n)i.use(r);else for(let r of o)i.use(r);for(let r of t)i.use(r);let a={markdown:[],doc:[console.log]};e.editable&&(i.use(E.configure(z,{uploader:se.uploader})),i.config((function(e){e.set($,a)})).use(H));let s=P((e=>i.config((t=>{t.set(B,e)}))));return r({editor:i,ls:a,editorf:s,listeners:[]},e)},mounted(){if(window.milkdown=this,this.ls.markdown.push(this.attention),this.doc){let e=this;this.bind((function(t){e.$emit("change",t)}))}},emits:["change"],methods:{async md(){return this.editor.action((e=>{const t=e.get(R);return e.get(V)(t.state.doc)}))},bind(e){this.listeners.push(e)},attention(e,t){if("markdown"===t){this.markdown=e();for(let e of this.listeners)e(this.markdown)}else{this.data=e();for(let e of this.listeners)e(this.data)}},edit(e){0==arguments.length&&(e=this.editable),this.editor.config((t=>{t.set(j,{editable:()=>e})})),this.editable=!this.editable}}}),[["render",function(e,t,n,o,i,a){const s=W("VueEditor");return m(),I(s,{editor:e.editorf,ref:"ve"},null,8,["editor"])}]]),le=d({props:{paper:Object},components:{Milkdown:re,Monaco:ne,plain:{template:"<div>{{data.content}}</div>",props:{data:Object,index:Number},data:()=>({})},examTitle:{template:"\n            <div class='paper-title'>\n            {{data.content}}\n            </div>",props:{data:Object,index:Number},data:()=>({})},questionSingle:{template:"\n            <div class='paper-question question-single'>\n            <div class='paper-question-content'>{{data.content}}</div>\n            <div class='paper-question-answer'>\n            </div>\n            </div>\n            ",props:{data:Object,index:Number}},questionMultiple:{template:"\n            <div class='paper-question question-multiple'>\n            <div class='paper-question-content'>{{data.content}}</div>\n            <div class='paper-question-answer'>\n            </div>\n            </div>\n            ",props:{data:Object,index:Number}},questionCode:{components:{Monaco:ne,Milkdown:re},template:"\n            <div class='paper-question question-code'>\n            <Milkdown :json='data.content' :editable='false' />\n            <div class='paper-question-answer'>\n            <div class='paper-question-code'>答题区域</div>\n            <Monaco v-if=\"!data.disableCodeArea\" :language=\"data.language\" :type=\"'edit'\"/>\n            </div>\n            </div>\n            ",props:{data:Object,index:Number},methods:{renderHTML:e=>marked.parse(e)}}},data:()=>({questions:[],ComponentMapping:{plain:"plain",title:"examTitle",code:"questionCode"},node:[]}),mounted(){window.renderer=this,this.paper?this.Render():console.log("no paper data.")},computed:{},methods:{chooseComponent(e){let t=this.ComponentMapping,n=e.type,o=e.subtype;if(console.log(e,n,o),void 0!==t[n])return t[n];if("select"===n){if("single"===o)return"questionSingle";if("multiple"===o)return"questionMultiple"}return"plain"},Render(){console.log("start rendering paper."),this.renderPaper(),console.log("paper rendering finished.")},update(e,t){this.paper[e].node&&this.$el.removeChild(this.paper[e].node),this.paper[e]=t},renderPaper(){if(this.paper&&this.paper.length){for(let i of this.paper)this.questions.push((e=r({},i),o={type:this.chooseComponent(i)},t(e,n(o))));var e,o;this.renderQuestions()}},renderQuestions(){for(let e of this.questions);}}});const de={class:"paper transition"};var ce=Z(le,[["render",function(e,t,n,o,i,a){return m(),u("div",de,[(m(!0),u(U,null,K(e.questions,((e,t)=>(m(),I(Q(e.type),{data:e,index:t},null,8,["data","index"])))),256))])}]]);const pe={class:"main"};v({setup(e){let t=[{type:"title",content:"一个考试标题"},{type:"select",subtype:"single",content:"一道单选题",choice:["**2x+1**","$$\\pi$$","0.3","<pre>3\n</pre>"]},{type:"select",subtype:"multiple",content:"一道多选题",choice:["3","4","5"]},{type:"code",title:"11:生日礼物",language:"c++",content:{type:"doc",content:[{type:"heading",attrs:{level:1,id:""},content:[{type:"text",text:"11:生日礼物"}]},{type:"paragraph",content:[{type:"text",text:"ftiasch 18岁生日的时候，lqp18_31给她看了一个神奇的序列 "},{type:"math_inline",attrs:{value:"A_1, A_2, ..., A_N"}},{type:"text",text:". 她被允许选择不超过"},{type:"math_inline",attrs:{value:"\\text{M}"}},{type:"text",text:"个连续的部分作为自己的生日礼物。"}]},{type:"paragraph",content:[{type:"text",text:"自然地，ftiasch想要知道选择元素之和的最大值。你能帮助她吗？"}]},{type:"heading",attrs:{level:2,id:""},content:[{type:"text",text:"输入"}]},{type:"paragraph",content:[{type:"text",text:"第1行，两个整数 N (1 ≤ N ≤ 105) 和 M (0 ≤ M ≤ 105), 序列的长度和可以选择的部分。"}]},{type:"paragraph",content:[{type:"text",text:"第2行， N 个整数 A1, A2, ..., AN (0 ≤ |Ai| ≤ 104), 序列。"}]},{type:"heading",attrs:{level:2,id:""},content:[{type:"text",text:"输出"}]},{type:"paragraph",content:[{type:"text",text:"一个整数，最大的和。"}]},{type:"heading",attrs:{level:2,id:""},content:[{type:"text",text:"样例输入"}]},{type:"fence2",attrs:{language:"",fold:!0},content:[{type:"text",text:"5 2\n2 -3 2 -1 2"}]},{type:"heading",attrs:{level:2,id:""},content:[{type:"text",text:"样例输出"}]},{type:"fence2",attrs:{language:"",fold:!0},content:[{type:"text",text:"5"}]}]},disableCodeArea:!1}];return(e,n)=>{const o=W("QuestionFramework"),i=W("Monaco"),a=W("timer");return m(),u("div",pe,[F(o),F(i,{language:"markdown",size:"20px",type:"edit"}),F(a,{time:100}),F(ce,{paper:J(t)},null,8,["paper"])])}}}).mount("#app");