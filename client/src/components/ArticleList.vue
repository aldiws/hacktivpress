<template lang="html">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <ArticleSummary/>
      </div>
  </div>
</div>

</template>

<script>
import ArticleSummary from '@/components/ArticleSummary'
export default {
  name: 'ArticleList',
  components: {
    ArticleSummary
  }
}
</script>

<style lang="css">
</style>
