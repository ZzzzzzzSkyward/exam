<template>
  <div class="tiptap question-framwork" ref="tp">
    <div class="question-item">
      <div class="question-title">标题Title</div>
      <div v-if="title" class="question-input question-input-title">
        <editor-content :editor="title" />
      </div>
    </div>
    <div class="question-item">
      <div class="question-title">标签Tag</div>
      <div v-if="tags" class="question-input question-input-tag">
        <editor-content :editor="tags" />
      </div>
    </div>
    <div class="question-item">
      <div class="question-title">题型Type</div>
      <div v-if="type" class="question-input question-input-type">
        <editor-content :editor="type" />
      </div>
    </div>
    <div class="question-item">
      <div class="question-title">内容Content</div>
      <div v-if="content" class="question-input question-input-content">
        <Milkdown  @change="change" />
      </div>
    </div>
    <div class="question-item">
      <div class="question-title">输出Output</div>
      <div class="output">
        <code>{{ json }}</code>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Editor, EditorContent } from "@tiptap/vue-3";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Collaboration from "@tiptap/extension-collaboration";
import * as Y from "yjs";
import { yDocToProsemirrorJSON } from "y-prosemirror";
import Milkdown from "./Milkdown.vue";

const ParagraphDocument = Document.extend({
  content: "paragraph",
});

const TaskListDocument = Document.extend({
  content: "taskList",
});

const CustomTaskItem = TaskItem.extend({
  content: "text*",
});

export default defineComponent({
  name: "QuestionFramework",
  components: {
    EditorContent,
    Milkdown,
  },

  data() {
    return {
      title: null,
      type: null,
      content: null,
      ydoc: new Y.Doc(),
    };
  },

  mounted() {
    this.title = new Editor({
      extensions: [
        ParagraphDocument,
        Paragraph,
        Text,
        Collaboration.configure({
          document: this.ydoc,
          field: "title",
        }),
      ],
      content: "<p>",
    });

    this.tags = new Editor({
      extensions: [
        TaskListDocument,
        Paragraph,
        Text,
        TaskList,
        CustomTaskItem,
        Collaboration.configure({
          document: this.ydoc,
          field: "tags",
        }),
      ],
      content: `
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">tags</li>
        </ul>
      `,
    });

    this.type = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        Collaboration.configure({
          document: this.ydoc,
          field: "type",
        }),
      ],
      content: `
        <p>type=</p>
      `,
    });
    this.content = "...";
  },
  methods: {
    change(data) {
      this.content = data;
    },
    set(target, value) {
      //json or html
      /* {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Example Text"
            }
          ]
        }
      ]
    }
    */
      this[target].setContent(value);
    },
  },
  computed: {
    json() {
      return {
        title: yDocToProsemirrorJSON(this.ydoc, "title"),
        type: yDocToProsemirrorJSON(this.ydoc, "type"),
        tags: yDocToProsemirrorJSON(this.ydoc, "tags"),
        content: { content: this.content, type: "content" },
      };
    },
  },

  beforeUnmount() {
    this.title.destroy();
    this.type.destroy();
    this.tag.destroy();
    this.provider.destroy();
  },
});
</script>

<style lang="scss">
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }
  }
}

.question-title {
  color: #868e96;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
}
.question-input-title{
  font-size: 2em;
}
.question-item {
  margin: 0 0 1rem;
  padding: 0 1rem;
  border-radius: 5px;
  border: 1px solid #e9ecef;
  transition: 0.1s all ease-in-out;
  --hover-color: var(--pku-red);
  &:hover {
    border-color: var(--hover-color);
  }

  &--title {
    font-size: 1.5rem;
  }

  &--json {
    background: #0d0d0d;
    color: #fff;
    font-size: 0.8rem;
  }
}
.question-item  p{
  margin:0.1em;
}
.question-item div:focus-visible {
  outline:transparent;
}
.question-item div:focus {
  border-color:var(--hover-color);
}
pre {
  font-family: Monaco, monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

  code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 0.8rem;
  }
}
</style>
