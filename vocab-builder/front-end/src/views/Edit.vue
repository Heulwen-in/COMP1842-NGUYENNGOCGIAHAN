<template>
    <div>
        <h1>Edit Word</h1>
        <word-form @create0rUpdate="create0rUpdate" :word=this.word></word-form>
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'edit',
    components: {
        'word-form': WordForm
    },
    data: function() {
        return {
            word: {}
        };
    },
    async mounted() {
        this.word = await api.getWord(this.$route.params.id);
    },
    methods: {
        create0rUpdate: async function(word) {
            await api.updateWord(word);
            this.flash('Word updated succesfully!', 'success');
            this.$router.push(`/words/${word._id}`);
        }
    }
};
</script>