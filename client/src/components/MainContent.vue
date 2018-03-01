<template lang="html">
  <div class="container mt-3">
    <div class="row">
      <Sidebar/>
      <ArticleList/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import ArticleList from '@/components/ArticleList'
export default {
  name: 'MainContent',
  components: {
    Sidebar,
    ArticleList
  },
  methods: {
    getArticles () {
      this.$store.dispatch('getArticles')
    }
  },
  created () {
    this.getArticles()
  }
}
</script>

<style lang="css">
</style>
