<template lang="html">
  <div  class="col">
    <div v-for="article in articles" v-bind:key="article._id">
      <h2><router-link :to="'/articles/' + article._id">{{ article.title }}</router-link></h2>
      <small>posted by: {{ article.author.username }}</small>
      <p class="pt-2">{{ article.content }}</p>
      <p class="text-right"><small>on {{ article.category }}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleSummary',
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style lang="css">
</style>
