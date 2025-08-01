<template>
  <div class="profile-container">
    <div class="profile">
      <img src="https://www.nme.com/wp-content/uploads/2025/03/red-velvet-seulgi-accidentally-on-purpose-baby-not-baby-music-video-solo-album.jpg" alt="Profile Picture" class="ui small image">
      <h2>About me</h2>
      <ul>
        <li>
          <strong>Name: </strong>
          <span>{{ name }}</span>
        </li>
        <li>
          <strong>Student ID: </strong> {{ studentId }}
        </li>
        <li>
          <strong>The system was completed on: </strong> {{ dateDoned }}
        </li>
        <li>
          <strong>Language study: </strong>
          <span>{{ language }}</span>
        </li>
        <li>
          <i class="envelope icon"></i><strong>Contact Me: </strong> {{ email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heulwen',
  data() {
    return {
      name: 'Nguyen Ngoc Gia Han',
      studentId: '001362463',
      dateDoned: '1st Aug 2025',
      language: 'English/Korean',
      email: 'hannnggcs230054@fpt.edu.vn'
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

.envelope.icon {
  color: #D4AF37;
}
</style>
