<template>
  <v-app>
    <v-app-bar
      app
      color="light-blue"
      dark
      dense
      collapse-on-scroll
      clipped-right
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,100,160,.8), rgba(0,160,100,.2)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Nika Stamp</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-subheader>Nika Stamp</v-subheader>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon dense>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon dense>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>このアプリについて</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg">
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    isTabShow: true,
  }),
});
</script>
