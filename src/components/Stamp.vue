<template>
  <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-card v-bind="attrs" v-on="on">
        <v-img
          src="/img/stamps/yoshi.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          max-height="100"
          max-width="100"
        >
        </v-img>
      </v-card>
    </template>
    <v-list dense>
      <v-list-item>
        <v-list-item-title class="text-caption"
          >リンクをコピー</v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="text-caption">ツイート</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    src: String
  },
};
</script>

<style>
</style>