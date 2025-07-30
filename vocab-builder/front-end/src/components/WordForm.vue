<template>
  <form action="#" @submit.prevent="onSubmit">
     <p v-if="errorsPresent" class="error">Please fill all fields!</p>
 
     <div class="ui labeled input fluid">
       <div class="ui label">
         <i class="united kingdom flag"></i> English
       </div>
       <input type="text" placeholder="Enter word..." v-model="word.english" />
     </div>

     <div class="ui labeled input fluid">
       <div class="ui label">
         <i class="germany flag"></i> German
       </div>
       <input type="text" placeholder="Enter word..." v-model="word.german" />
     </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="kr flag"></i> Korean
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.korean" />
    </div>
 
     <button class="ui primary large button">Submit</button>
   </form>
 </template>
 
 <script>
 export default {
   name: 'word-form',
   props: {
     word: {
       type: Object,
       required: false,
       default: () => {
        return {
            english: '',
            german: ''
        };
       }
     }
   },
   data() {
     return {
       errorsPresent: false
     };
   },
   methods: {
     onSubmit: function() {
       if (this.word.english === '' || this.word.german === '') {
        this.errorsPresent = true;
       } else {
        this.$emit('create0rUpdate', this.word);
       }
     }
   }
 };
 </script>
 
 <style>
 </style>