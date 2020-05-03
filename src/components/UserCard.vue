<template>
  <v-layout v-if="Object.keys(activeUser).length !== 0">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="activeUser.avatar_url"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{activeUser.name}}</h3>
            <ul>
              <li>Company: {{activeUser.company}}</li>
              <li>Followers: {{activeUser.followers}}</li>
              <li>Following: {{activeUser.following}}</li>
              <li>Repos: {{activeUser.public_repos}}</li>
            </ul>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    activeUser: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
ul {
  list-style: none;
}
</style>
