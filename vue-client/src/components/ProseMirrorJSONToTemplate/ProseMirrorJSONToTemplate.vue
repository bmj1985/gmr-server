<template>
  <editor-content :editor="editor" class="editor"> </editor-content>
</template>

<script>
import Vue from 'vue'
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default Vue.extend({
  name: 'ProseMirrorJSONToTemplate',
  components: {
    EditorContent
  },
  props: ['content'],
  data() {
    return {
      editor: new Editor({
        editable: false,
        onInit: ({ state, view }) => {
          console.log(state)
          console.log(view)
        },
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: this.content,
        onUpdate: console.log('CONTENT', this.content)
      })
    }
  },
  watch: {
    content() {
      console.log('CONTENT:', this.content)
      this.editor.setOptions({
        editable: this.editable
      })
    }
  },
  methods: {
    setContent: content => this.content
  },
  beforeDestroy() {
    this.editor.destroy()
  }
})
</script>

<style scoped>
.editor {
  height: 100%;
  width: 100%;
  color: black;
}
.editor >>> br {
  display: block;
  line-height: 0;
}
</style>
