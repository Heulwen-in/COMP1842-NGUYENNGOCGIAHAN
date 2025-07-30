<template>
    <div>
      <h1>Show Word</h1>
  
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> English
        </div>
        <input type="text" readonly  :value="word.english"/>
      </div>

      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="germany flag"></i> German
        </div>
        <input type="text" readonly  :value="word.german"/>
      </div>
      
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="kr flag"></i> Korean
        </div>
        <input type="text" readonly  :value="word.korean"/>
      </div>
      
      <div class="actions">
        <router-link :to="{ name: 'edit', params: { id: word._id}}"class="ui button action-edit">Edit</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { api } from '../helpers/helpers';

  export default {
    name: 'show',
    data() {
        return {
            word: ''
        };
    },
    async mounted() {
        this.word = await api.getWord(this.$route.params.id);
    }   
};
  </script>
  
<style>
</style>