<template lang="html">
  <div class="container">
    <h2>{{ oneArticle.title }}</h2>
    <small>posted by: {{ oneArticle.author.username}}</small>
    <p class="pt-2">{{ oneArticle.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'OneArticle',
  props: ['id'],
  computed: {
    oneArticle () {
      return this.$store.state.oneArticle
    }
  },
  methods: {
    getOneArticle () {
      this.$store.dispatch('getOneArticle', {
        id: this.id
      })
    }
  },
  created () {
    this.getOneArticle()
  }
}
</script>

<style lang="css">
</style>
