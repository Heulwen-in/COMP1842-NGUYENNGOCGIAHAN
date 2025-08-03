<template>
  <div class="test-container">
    <h1>Vocabulary Test</h1>
    <div class="test-options">
      <label for="lang-select">Test me on:</label>
      <select id="lang-select" v-model="testLang">
        <option value="random">Random</option>
        <option value="german">German</option>
        <option value="korean">Korean</option>
      </select>
    </div>
    <div v-if="words.length && currentWord">
      <div class="question" v-if="score < 5">
        <span class="prompt">
          Translate to
          <span v-if="currentTestLang === 'german'">German</span>
          <span v-else>Korean</span>:
        </span>
        <span class="word">{{ currentWord.english }}</span>
      </div>
      <form v-if="score < 5" @submit.prevent="checkAnswer" class="test-form">
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i :class="currentTestLang === 'german' ? 'de flag' : 'kr flag'"></i>
            {{ currentTestLang === 'german' ? 'German' : 'Korean' }}
          </div>
          <input v-model="userAnswer" :placeholder="`Type the ${currentTestLang === 'german' ? 'German' : 'Korean'} translation...`" autofocus />
        </div>
        <button class="ui primary button check-btn" type="submit">Check</button>
      </form>
      <div v-if="feedback && score < 5" :class="{'correct': isCorrect, 'incorrect': !isCorrect}" class="feedback">
        {{ feedback }}
      </div>
      <button v-if="feedback && score < 5" class="ui button" @click="nextWord">Next</button>
      <div class="score">Score: {{ score }}/5</div>
      <div v-if="score >= 5" class="test-complete">
        <div class="feedback correct">Congratulations! You scored 5/5!</div>
        <button class="ui button" @click="restartTest">Do Again</button>
      </div>
    </div>
    <div v-else>
      <p>Loading words...</p>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'VocabTest',
  data() {
    return {
      words: [],
      currentWord: null,
      userAnswer: '',
      feedback: '',
      isCorrect: false,
      score: 0,
      total: 0,
      testLang: 'random', // 'german', 'korean', or 'random'
      currentTestLang: 'german', // The language for the current question
    };
  },
  async mounted() {
    this.words = await api.getWords();
    this.nextWord();
  },
  methods: {
    nextWord() {
      if (this.score >= 5) return;
      this.userAnswer = '';
      this.feedback = '';
      this.isCorrect = false;
      if (this.words.length) {
        this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
        // Decide which language to test
        if (this.testLang === 'random') {
          this.currentTestLang = Math.random() < 0.5 ? 'german' : 'korean';
        } else {
          this.currentTestLang = this.testLang;
        }
        this.total++;
      }
    },
    checkAnswer() {
      if (!this.currentWord || this.score >= 5) return;
      const correctAnswer = this.currentTestLang === 'german'
        ? this.currentWord.german
        : this.currentWord.korean;
      if (this.userAnswer.trim().toLowerCase() === (correctAnswer || '').trim().toLowerCase()) {
        this.feedback = 'Correct!';
        this.isCorrect = true;
        this.score++;
      } else {
        this.feedback = `Incorrect. The correct answer is: ${correctAnswer}`;
        this.isCorrect = false;
      }
    },
    restartTest() {
      this.score = 0;
      this.total = 0;
      this.feedback = '';
      this.isCorrect = false;
      this.userAnswer = '';
      this.nextWord();
    }
  }
};
</script>

<style scoped>
.test-container {
    margin: auto;
    padding: 2em;
    border-radius: 10px;
    color: #E0E0E0;
}
.test-options {
  margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    gap: 0.5em;
}
.test-options label {
  color: #D4AF37;
  font-weight: bold;
  font-size: 1.2em;
}
.test-options select {
  background: #1C1E2F;
  color: #E0E0E0;
  font-weight: bold;
  border: 1px solid #5F4B8B;
  border-radius: 5px;
  padding: 0.3em 1em;
}
.question {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}
.prompt {
  color: #D4AF37;
  font-weight: bold;
  margin-right: 0.5em;
}
.word {
  color: #47114A;
  font-weight: bold;
}
input {
  padding: 0.5em;
  background-color: #1C1E2F;
  border-radius: 5px;
  color: #E0E0E0;
  border: 1px solid #5F4B8B;
  margin-right: 1em;
  width: 60%;
}
.feedback {
  margin: 1em 0;
  font-weight: bold;
}
.correct {
  color: #27ae60;
}
.incorrect {
  color: red;
}
.score {
  margin-top: 1em;
  color: #D4AF37;
  font-weight: bold;
}
.test-form {
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
}
.test-form .ui.labeled.input.fluid {
  flex: 1;
  margin-bottom: 0;
}
.ui.primary.check-btn {
  height: 42px; 
  background-color: #5F4B8B;
  color: #E0E0E0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s, text-shadow 0.3s;
}
.ui.primary.check-btn:hover {
  background-color: #7F5AF0;
  color: #E0E0E0;
}
.ui.primary.check-btn:focus {
  background-color: #5F4B8B;
  color: #E0E0E0;
}
.ui.button {
  height: 42px; 
  background-color: #5F4B8B;
  color: #E0E0E0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s, text-shadow 0.3s;
}
.ui.button:hover {
  background-color: #7F5AF0;
  color: #E0E0E0;
}
</style>
