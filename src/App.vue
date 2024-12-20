<script setup lang="ts">
import {MessageProvider} from "vuetify-message-vue3";
import logo from './assets/logo.png'
import {Window} from '@tauri-apps/api/window';
import More from "@/pages/More";
import {getGameConf} from "@/utils/conf";
import {ref} from "vue";

const appWindow = new Window('main');

const drawer = ref(true)
const rail = ref(false)

let menus = getGameConf().menus
console.log('菜单', menus)

const close = () => {
  appWindow.close();
}
const toggleMaximize = () => {
  appWindow.toggleMaximize();
}
const minimize = () => {
  appWindow.minimize();
}
const startDragging = () => {
  appWindow.startDragging();
}
</script>
<template>
  <MessageProvider>
    <v-layout class="rounded rounded-md">
      <v-app-bar :elevation="2"
                 @dragstart="startDragging"
                 height="60"
                 draggable="true"
                 rounded>
        <v-avatar size="x-large" :image="logo">
        </v-avatar>

        <v-app-bar-title>{{$al('Title')}}</v-app-bar-title>
        <More/>
        <v-btn icon="mdi-minus" size="large" @click="minimize"></v-btn>
        <!--      <v-btn icon="mdi-fullscreen" size="large" @click=" toggleMaximize"></v-btn>-->
        <v-btn icon="mdi-close" size="large" @click="close" color="#E53935"></v-btn>
      </v-app-bar>
      <v-main class="d-flex" style="min-height: 100vh;">

        <v-card class="no-select">
          <v-layout height="88vh">
            <v-navigation-drawer
              location="right"
              v-model="drawer"
              :rail="rail" class="font-weight-medium"
              permanent
            >
              <v-list-item
                prepend-avatar="https://staticdelivery.nexusmods.com/images/games/4_3/tile_1303.jpg"
                title="星露谷物语"
                @click.stop="rail = !rail"
                nav
              >
                <template v-slot:append>
                  <v-btn
                    icon="mdi-chevron-left"
                    variant="text"
                    @click.stop="rail = !rail"
                  ></v-btn>
                </template>
              </v-list-item>
              <v-divider/>
              <v-list density="compact" nav>
                <v-list-item v-for="menu in menus"
                             :prepend-icon="menu.icon"
                             :title="$gl(menu.key)"
                             :value="menu.value"
                             :to="menu.key">
                </v-list-item>
                <v-list-item
                  prepend-icon="mdi-cog-outline"
                  :title="$al('Conf')"
                  value="Conf"
                  to="Conf"
                >
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
            <v-main style="height: 250px"></v-main>
          </v-layout>
        </v-card>
        <!--      <v-container-->
        <!--        fluid-->
        <!--      >-->
        <!--        <v-row>-->
        <router-view/>
        <!--        </v-row>-->
        <!--      </v-container>-->
      </v-main>
    </v-layout>
  </MessageProvider>
</template>
<style>
</style>
