<template>
  <div class="profile-container">
    <div class="profile">
      <img src="https://www.nme.com/wp-content/uploads/2025/03/red-velvet-seulgi-accidentally-on-purpose-baby-not-baby-music-video-solo-album.jpg" alt="Profile Picture" class="ui small image">
      <h2>User Profile:</h2>
      <ul>
        <li>
          <strong>Name: </strong>
          <input v-if="isEditing" v-model="editName" class="profile-input" />
          <span v-else>{{ name }}</span>
        </li>
        <li>
          <strong>Date Joined: </strong> {{ dateJoined }}
        </li>
        <li>
          <strong>Language: </strong>
          <select v-if="isEditing" v-model="editLanguage" class="profile-select">
            <option value="English">English</option>
            <option value="Korean">Korean</option>
            <option value="German">German</option>
          </select>
          <span v-else>{{ language }}</span>
        </li>
      </ul>
      <button v-if="!isEditing" class="ui button" @click="startEdit">Edit</button>
      <button v-if="isEditing" class="ui button" @click="saveEdit">Save</button>
      <button v-if="isEditing" class="ui button" @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heulwen',
  data() {
    return {
      name: 'Han Nguyen',
      dateJoined: '27th Jul 2025',
      language: 'Korean',
      isEditing: false,
      editName: '',
      editLanguage: ''
    }
  },
  methods: {
    startEdit() {
      this.isEditing = true;
      this.editName = this.name;
      this.editLanguage = this.language;
    },
    saveEdit() {
      this.name = this.editName;
      this.language = this.editLanguage;
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
    }
  }
}
</script>

<style scoped>
.profile-container {
  align-items: center;
  justify-content: center;
  max-width: 700px;
}

.profile img.ui.small.image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #f5f5f5;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  display: block;
  margin: 0 auto 1em auto;
}

.profile {
  background: #1C1E2F;
  color: #E0E0E0;
  border-radius: 10px;
  padding: 2em;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.profile h2 {
  color: #D4AF37;
  margin-bottom: 1em;
}
.profile ul {
  list-style: none;
  padding: 0;
}
.profile li {
  margin-bottom: 0.5em;
  font-size: 1.1em;
}
.profile strong {
  color: #D4AF37;
}
.profile-input {
  background: #1C1E2F;
  color: #E0E0E0;
  border: 1px solid #5F4B8B;
  border-radius: 5px;
  padding: 0.3em 0.7em;
  margin-left: 0.5em;
}
.profile-select {
  background: #1C1E2F;
  color: #E0E0E0;
  border: 1px solid #5F4B8B;
  border-radius: 5px;
  padding: 0.3em 1em;
  margin-left: 0.5em;
}
.ui.button{
  margin-top: 1em;
  margin-right: 0.5em;
  background-color: #5F4B8B;
  color: #E0E0E0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s, color 0.3s, text-shadow 0.3s;
}

.ui.button:focus {
  background-color: #5F4B8B;
  color: #E0E0E0;
}

.ui.button:hover {
  background-color: #7F5AF0;
  color: #E0E0E0;
  text-shadow: 0 0 5px rgba(224, 224, 224, 0.5);
}
</style>
