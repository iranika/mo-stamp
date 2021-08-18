<template>
  <v-app>
    <v-app-bar
      app
      color="pink"
      dark
      dense
      collapse-on-scroll
      clipped-right
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,160,100,.2),rgba(100,160,100,.2)"
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
      <div v-if="authstore.user.isLogin">
        
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar>
                <img :src="authstore.user.photoUrl" />
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="signOut()">ログアウト</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn color="light-blue" @click="signIn()">ログイン<v-icon>mdi-twitter</v-icon></v-btn>
      </div>
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
    <v-snackbar bottom right :value="updateExists" :timeout="-1" color="primary">
      アップデートがあります
    <v-btn text @click="refreshApp">
      更新する
    </v-btn>
  </v-snackbar>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';
import update from "./mixins/update";
//import { AuthStoreModule } from "@/stores/auth";
import {AuthStore} from "@/stores/auth"

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    isTabShow: true,
    authstore: AuthStore.getInstance(),
  }),
  mixins: [update],
  methods:{
    signIn(){
      this.authstore.signin();
    },
    signOut(){
      this.authstore.signout();
    }
  },

});
</script>
