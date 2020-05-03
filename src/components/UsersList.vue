<template>
  <div>
    <div class="user" v-for="user in users" :key="user.id">
      <div @click="sendUserId(user.id)">
        <img :src="user.avatar">
        <div>{{user.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  methods: {
    sendUserId: function (userId) {
      this.$emit('user', userId)
    },
  },
  props: {
    users: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },
}
</script>

<style>
.user {
  margin:10px;
}
.user:hover {
  cursor: pointer;
  opacity:0.8;
}
img {
  width:100px;
}
</style>
