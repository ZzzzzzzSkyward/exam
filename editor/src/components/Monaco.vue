<template>
  <div class="monaco-container loading" :language="language" :type="type" :options="options" :diff="diff" :content="content" :size="size"></div>
</template>

<script>
import { defineComponent } from "vue";
function loadjs(src, isModule) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = isModule ? "module" : "text/javascript";
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
  });
}
export default defineComponent({
  name: "Monaco",
  components: {},
  props: {
    editable: { type: Boolean, default: true },
    type:{type:String,default:"undefined"},
    diff: Boolean,
    content: String,
    language: { type: String, default: "html" },
    options: Object,
    size:String
  },
  setup: function (props) {
    console.log(props.editable ? "editable" : "ineditable");
    if(props.type==="undefined") props.type=props.editable?"edit":"show";
    let globalConfig={
    editor: null,
      listeners:[],
      loading: true,
      prevline:0,
      theme: "vs",
    };
    let illustrationConfig={
        preview:false,
        tab:false,
        minimap:false,
        lightbulb:false,
        margin:false,
        ...globalConfig,
        ...props
    };
    return props.type==="show"?illustrationConfig:
    {
      beyond: false,
      round: false,
      number: true,
      preview: true,
      cursor: "line",
      tab: true,
      tabText:"onlySnippets",
      margin: true,
      minimap: true,
      lightbulb: true,
      font: "",
      size: "10px",
      ...globalConfig,
      ...props,
    };
  },
  methods: {
    lang(lg) {
      let original = this.editor.getModel();
      monaco.editor.setModelLanguage(original, lg);
    },
    line(){return  this.editor.getModel().getLineCount();},
    height(){return  this.editor.getContentHeight();},
    sz(s){
      this.update({fontSize:s});
    },
    resize(w,h){
    if(w) this.$el.style.width=w;
    if(h) this.$el.style.height=h;
    },
    finish(){
      this.$el.classList["remove"]("loading");
      this.loading =false;
      window.milkdown.bind(this.text);
      this.listeners.push(
      ()=>{
      let line=this.line();
      if(line===this.prevline)return;
      else if(line>10&&line<100){this.resize(null,this.height()+"px");this.prevline=line;}
      }
      )
    },
    bind(keys, action) {
      if (typeof keys === "string") keys = [keys];
      let result = 0,
        t = 0;
      for (let key of keys) {
        key = key.toLowerCase();
        let k = monaco.KeyMod;
        let dict = {
          control: k.CtrlCmd,
          ctrl: k.CtrlCmd,
          alt: k.AltCmd,
          shift: k.Shift,
          "[": k.US_OPEN_SQUARE_BRACKET,
          "=": k.US_EQUAL,
          "-": k.US_MINUS,
        };
        if (dict.hasOwnProperty(key)) t = dict[key];
        else t = k[key];
        result |= t;
      }
      switch (action) {
        case "unfoldAll":
          action = "unfondRecursively";
          break;
      }
      action = "editor." + action;
      this.editor.addCommand(key, function () {
        editor.trigger("", action);
      });
    },
    update(s) {
      this.editor.updateOptions(s);
    },
    size(sz) {
      this.update({ fontSize: sz });
    },
    edit(bool) {
      this.update({ readOnly: !bool });
    },
    text(t) {
      if (t !== undefined) this.editor.setValue(t);
      else return this.editor.getValue();
    },
    getSelectionText(
      monacoEditor,
      startLineNumber,
      startColumn,
      endLineNumber,
      endColumn
    ) {
      let currentText = ""; //选中文字的内容
      let num = 0; //累计回车的数量
      let startIndex = null; //截取编辑器内容的起始下标
      let endIndex = null; //截取编辑器内容的结束下标
      if (startLineNumber < endLineNumber) {
        //当起始行<结束行（方向：从上到下，从左到右）
        monacoEditor
          .getValue()
          .split("")
          .map((item, index) => {
            if (startLineNumber === 1) {
              //判断起始行当前行数，为1 则前面没有回车
              startIndex = startColumn - 1; //获取起始下标
              if (item === "\n") {
                num += 1; //累计回车数量（针对于结束行）
                if (num === endLineNumber - 1) {
                  //获取结束行最近的回车的下标+结束行的结束列
                  endIndex = index + endColumn;
                }
              }
            } else {
              //判断起始行当前行数，大于1 则前面有回车
              if (item === "\n") {
                //累计回车数量
                num += 1;
                if (num === startLineNumber - 1) {
                  //获取起始行最近的回车的下标+起始行的起始列
                  startIndex = index + startColumn;
                }
                if (num === endLineNumber - 1) {
                  //获取结束行最近的回车的下标+结束行的结束列
                  endIndex = index + endColumn;
                }
              }
            }
          });
      } else if (startLineNumber > endLineNumber) {
        //当起始行>结束行（方向：从下到上，从右到左）
        monacoEditor
          .getValue()
          .split("")
          .map((item, index) => {
            if (endLineNumber === 1) {
              //判断结束行当前行数，为1 则前面没有回车
              startIndex = endColumn - 1; //获取起始下标
              if (item === "\n") {
                num += 1; //累计回车数量（针对于起始行）
                if (num === startLineNumber - 1) {
                  //获取结束下标：起始行最近的回车的下标+起始行的起始列
                  endIndex = index + startColumn;
                }
              }
            } else {
              //判断结束行当前行数，大于1 则前面有回车
              if (item === "\n") {
                //累计回车数量
                num += 1;
                if (num === endLineNumber - 1) {
                  //获取结束行最近的回车的下标+结束行的结束列
                  startIndex = index + endColumn;
                }
                if (num === startLineNumber - 1) {
                  //获取起始行最近的回车的下标+起始行的起始列
                  endIndex = index + startColumn;
                }
              }
            }
          });
      } else if (startLineNumber === endLineNumber) {
        //当起始行=结束行（方向：从左到右，从右到左）
        monacoEditor
          .getValue()
          .split("")
          .map((item, index) => {
            if (endLineNumber === 1) {
              startIndex = startColumn < endColumn ? startColumn - 1 : endColumn - 1;
              endIndex = startColumn > endColumn ? startColumn - 1 : endColumn - 1;
            } else {
              if (item === "\n") {
                num += 1;
                if (num === endLineNumber - 1) {
                  startIndex =
                    startColumn < endColumn ? startColumn + index : endColumn + index;
                  endIndex =
                    startColumn > endColumn ? startColumn + index : endColumn + index;
                }
              }
            }
          });
      }
      currentText = monacoEditor.getValue().slice(startIndex, endIndex);
      return currentText;
    },
    theme(t) {
      if (t === "dark") t = "vs-dark";
      else if (t === "light") t = "vs";
      this.update({ theme: t });
    },
    changed(e){
        console.log("monaco changed",e);
        this.attention();
    },
    attention(){
        let t=this.text();
        for(let i of this.listeners) i(t);
    },
    select() {
      if (arguments.length) {
        console.log("select returns selectedText without param.");
      }
      let selection = this.editor.getSelection();
      return this.getSelectionText(
        this.editor,
        selection.startLineNumber,
        selection.startColumn,
        selection.endLineNumber,
        selection.endColumn
      );
    },
    async install() {
      console.log(arguments, this);
      console.log("installing monaco.");
      await loadjs("src/assets/require.js");
      require.config({ paths: { vs: "src/assets/vs" } });
      let that = this;
      require(["vs/editor/editor.main"], function () {
        that.generate();
      });
    },
    generate() {
      console.log(arguments, this);
      let props = this;
      if (this)
        this.editor = monaco.editor[props.diff ? "createDiffEditor" : "create"](
          this.$el,
          {
            value: props.content,
            language: props.language,
            roundedSelection: props.round,
            scrollBeyondLastLine: props.beyond,
            readOnly: !props.editable,
            automaticLayout: true,
            autoClosingBrackets: true,
            suggest: {
              preview: props.preview,
              shareSuggestSelections: true,
            },
            mouseWheelZoom: true,
            tabCompletion: props.tab,
            lineNumbers: props.number,
            theme: props.theme,
            wordWrap: "on",
            foldingStrategy: "indentation", // 代码可分小段折叠
            glyphMargin: props.margin,
            fontFamily: props.font,
            minimap: {
              enabled: props.minimap,
            },
            lightbulb: {
              enabled: props.lightbulb,
            },
            fontSize: props.size || "10px",
          }
        );
      window.editor = this;
      this.editor.onDidChangeModelContent(this.changed);
      this.finish();
    },
  },
  mounted: async function () {
    let props = this;
    console.log(this);
    try {
      monaco;
    } catch (e) {
      await this.install();
    }
  },
  beforeDestroy() {
    if(this.editor) this.editor.dispose();
  },
}
);
</script>
<style lang="css">
@keyframes loading {
  from {
    background-position-x: 0%;
  }

  to {
    background-position-x: 100%;
  }
}
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity:0;
  }
}
.monaco-container.loading {
  background-image: repeating-linear-gradient( -45deg, #737373 0%, #777575 2%, transparent 2%, transparent 4.18% );
  animation: loading 10s linear infinite,fade 5s linear alternate infinite;
	background-size: 50% 100%;
}
.monaco-container {
  height: 100%;
  .editor-container {
    height: calc(100% - 37px);
  }
}
</style>
