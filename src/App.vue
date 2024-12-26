<script setup lang="ts">
import {MessageProvider} from "vuetify-message-vue3";
import logo from '@/assets/logo.png'
import {Window} from '@tauri-apps/api/window';
import More from "@/pages/more.vue";
import {conf} from "@/utils/conf";
import {type Ref, ref} from "vue";

const appWindow = new Window('main');
console.log('App.vue开始加载')

const drawer = ref(true)
const rail = ref(false)
const menus: Ref<[]> = ref(conf.value.game['menus']);

</script>

<template>

  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="2"
               @dragstart="appWindow.startDragging()"
               height="60"
               draggable="true"
               rounded>
      <v-avatar size="x-large" :image="logo">
      </v-avatar>

      <v-app-bar-title>{{ $al('Title') }}</v-app-bar-title>
      <More/>
      <v-btn icon="mdi-minus" size="large" @click="appWindow.minimize()"></v-btn>
      <!--      <v-btn icon="mdi-fullscreen" size="large" @click=" toggleMaximize"></v-btn>-->
      <v-btn icon="mdi-close" size="large" @click="appWindow.close()" color="#E53935"></v-btn>
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
            <v-list density="comfortable" nav>
              <v-list-item v-for="menu in menus"
                           :prepend-icon="menu.icon"
                           :title="$gl(menu.key)"
                           :value="menu.value"
                           :to="'/'+conf.app.game+'/'+menu.key">
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
      <v-container fluid>
        <MessageProvider>
          <router-view/>
        </MessageProvider>
      </v-container>
      <!--        </v-row>-->
    </v-main>
  </v-layout>

</template>

<style scoped lang="sass">

</style>
