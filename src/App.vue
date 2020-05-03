<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <img alt="github logo" class="logo" src="./assets/github.png">
    <Main msg="Welcome to Your Vue.js App"/>
    <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark color="primary">
              <v-card-text class="px-0">
                <search-input
                  placeholder="Type a GitHub username"
                  @text="handleSearchUser"
                />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card dark color="secondary">
              <v-card-text class="px-0">
                <users-list
                  :users="users"
                  @user="userId => getUser(userId)"
                />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card dark color="secondary">
              <v-card-text class="px-0">
                <user-card
                  :activeUser = "activeUser"
                />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import store from "./store/index"
import SearchInput from '@/components/SearchInput.vue'
import UsersList from '@/components/UsersList.vue'
import UserCard from '@/components/UserCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  methods : {
    handleSearchUser(username) {
      this.$store.dispatch('SEARCH_USERS', username)
    },
    getUser(userId) {
      this.$store.dispatch('GET_USER_ID', userId)
    }
  },
  components: {
    Main,
    SearchInput,
    UsersList,
    UserCard
  },
  computed: mapState(['users', 'activeUser']),
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width:150px;
}
</style>
