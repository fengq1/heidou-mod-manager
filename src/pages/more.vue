<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    location="bottom center"
  >
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-menu"
             v-bind="props"
             size="large"></v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-btn variant="text">
            <v-icon icon="mdi-email-edit-outline"/>
            &emsp;意见反馈
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text" block>
            <v-icon icon="mdi-account-heart" color="red"/>
            &emsp;关于黑豆
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>

</template>

<style scoped lang="sass">

</style>
<script setup>
import {useTheme} from "vuetify";
import {useSetVuetifyTheme} from "@/utils/theme.js";

useSetVuetifyTheme(useTheme())
</script>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    appConfDrawer: false
  })
}
</script>
