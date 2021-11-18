<template>
  <div class="tiptap question-framwork" :id="id" ref="tp">
    <div class="question-item  question-title">标题Title</div>
    <div v-if="title" class="question-input question-input-title">
      <editor-content :editor="title" />
    </div>
    <div class="question-item">题型Type</div>
    <div v-if="type" class="question-input question-input-type">
      <editor-content :editor="type" />
    </div>
    <div class="question-item">标签Tag</div>
    <div v-if="tag" class="question-input question-input-type">
      <editor-content :editor="tag" />
    </div>
    <div class="question-item">内容Content</div>
    <div v-if="content" class="question-input question-input-content">
      <Milkdown :text="content" />
    </div>
    <div class="question-item">输出Output</div>
    <div class="output">
      <code>{{ json }}</code>
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
import  Milkdown  from "./Milkdown.vue";

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
    name:"TipTap",
  components: {
    EditorContent,
    Milkdown
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
      content: "<p>No matter what you do, this will be a single paragraph.",
    });

    this.type = new Editor({
      extensions: [
        TaskListDocument,
        Paragraph,
        Text,
        TaskList,
        CustomTaskItem,
        Collaboration.configure({
          document: this.ydoc,
          field: "type",
        }),
      ],
      content: `
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">And this</li>
          <li data-type="taskItem" data-checked="false">is a task list</li>
          <li data-type="taskItem" data-checked="false">and only a task list.</li>
        </ul>
      `,
    });

    /*this.content = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        Collaboration.configure({
          document: this.ydoc,
          field: "content",
        }),
      ],
      content: `
        <p>
          <strong>Lengthy text</strong>
        </p>
        <p>
          This can be lengthy text.
        </p>
      `,
    });*/
    this.content="...";
  },

  computed: {
    json() {
      return {
        title: yDocToProsemirrorJSON(this.ydoc, "title"),
        type: yDocToProsemirrorJSON(this.ydoc, "type"),
        content: yDocToProsemirrorJSON(this.ydoc, "content"),
      };
    },
  },

  beforeUnmount() {
    this.title.destroy();
    this.type.destroy();
    this.content.destroy();
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

.question-item {
  color: #868e96;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7rem;
  letter-spacing: 1px;
}

.question-input {
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: 1px solid #e9ecef;
  transition: 0.1s all ease-in-out;

  &:hover {
    border-color: #68cef8;
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
