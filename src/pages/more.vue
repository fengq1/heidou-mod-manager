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
          <v-dialog
            v-model="appConfDrawer"
            max-width="400"
            height="100vh"
            style="position: fixed;right: 0"
            persistent
          >
            <template v-slot:activator="{ props: activatorProps }">
              <!--              <v-btn v-bind="activatorProps">-->
              <!--                Open Dialog-->
              <!--              </v-btn>-->
              <v-btn variant="text"
                     v-bind="activatorProps"
              >
                <v-icon icon="mdi-cog-outline"/>
                应用设置
              </v-btn>
            </template>

            <v-card
              prepend-icon="mdi-map-marker"
              text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
              title="Use Google's location service?"
            >
              <template v-slot:actions>
                <v-spacer></v-spacer>

                <v-btn @click="appConfDrawer = false">
                  Disagree
                </v-btn>

                <v-btn @click="appConfDrawer = false">
                  Agree
                </v-btn>
              </template>
            </v-card>
          </v-dialog>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text">
            <v-icon icon="mdi-gamepad-square-outline"/>
            游戏设置
          </v-btn>

        </v-list-item>
        <v-list-item>
          <v-btn variant="text">
            <v-icon icon="mdi-email-edit-outline"/>
            意见反馈
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn variant="text">
            <v-icon icon="mdi-account-heart" color="red"/>
            关于
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
