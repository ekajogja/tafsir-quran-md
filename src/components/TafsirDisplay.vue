<template>
  <div class="tafsir-display">
    <div v-if="frontMatter" class="front-matter">
      <p>{{ frontMatter }}</p>
      <hr />
    </div>
    <div class="markdown-content" v-html="renderedContent"></div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { marked } from 'marked'
import axios from 'axios'
import yaml from 'js-yaml'

export default {
  props: ['folder', 'surah'],
  setup(props) {
    const content = ref('')
    const frontMatter = ref(null)

    const renderedContent = computed(() => marked(content.value))

    watch(
      () => props.surah,
      () => {
        loadContent()
      },
      { immediate: true }
    )

    async function loadContent() {
      const fileName = `${props.folder}_QS_${props.surah}.md`
      try {
        const response = await axios.get(`/${props.folder}/${fileName}`)
        const fileContent = response.data
        const frontMatterMatch = fileContent.match(/---([\s\S]*?)---/)
        if (frontMatterMatch) {
          frontMatter.value = yaml.load(frontMatterMatch[1])
          content.value = fileContent.replace(frontMatterMatch[0], '').trim()
        } else {
          content.value = fileContent
        }
      } catch (error) {
        console.error('Error loading markdown file:', error)
      }
    }

    return {
      renderedContent,
      frontMatter
    }
  }
}
</script>

<style scoped>
.tafsir-display {
  margin-top: 20px;
}

.markdown-content {
  white-space: pre-wrap; /* or pre-line */
}

.front-matter {
  margin-bottom: 20px;
}

.front-matter p {
  font-style: italic;
  color: #666;
}

.front-matter hr {
  border: 0;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}
</style>