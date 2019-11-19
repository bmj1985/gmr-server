<template>
  <editor-content class="editor-content input" :editor="editor" />
</template>

<script>
// Import the basic building blocks
import Vue from 'vue'
import { Editor, EditorContent } from 'tiptap'

export default Vue.extend({
  name: 'TextEditor',
  components: {
    EditorContent
  },
  data() {
    return {
      // Create an `Editor` instance with some default content. The editor is
      // then passed to the `EditorContent` component as a `prop`
      editor: new Editor({
        content: '<p>Event details go here.</p>',
        onUpdate: ({ getHTML }) => {
          // get new content on update
          const newContent = getHTML()

          this.$store.state.editingEvent.details = newContent
        }
      })
    }
  },
  beforeDestroy() {
    // Always destroy your editor instance when it's no longer needed
    this.editor.destroy()
  }
})
</script>

<style scoped lang="scss">
.editor-content {
  height: 100%;
}
.editor-content :first-child {
  height: 15rem;
  min-height: 100px;
  max-height: 500px;
}
</style>