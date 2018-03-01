<template>
  <div>
    <div>
      <div class="card card-body">
        <form @submit.prevent='postArticle(formArticle)'>
        <div class="form-group">
        <label for="title">Title</label>
        <input v-model='formArticle.title' type="text" class="form-control" id="title" placeholder="Title">
        </div>
        <div class="form-group">
        <label for="body">Category</label>
        <select v-model='formArticle.category' class="custom-select">
          <option selected disabled>Select your category</option>
          <option value="love">Adventure</option>
          <option value="body">Life Style</option>
          <option value="coding">Coding</option>
        </select>
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea v-model='formArticle.content' class="form-control" id="content" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formArticle: {
        title: null,
        category: null,
        content: null
      }
    }
  },
  methods: {
    ...mapActions([
      'postArticle'
    ])
  },
  computed: mapState([
    'userID'
  ])
}
</script>

<style scoped>

</style>
