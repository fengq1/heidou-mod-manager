<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :elevation="2"
               @dragstart="startDragging"
               height="60"
               draggable="true"
               rounded>
      <v-avatar size="x-large" :image="logo">
      </v-avatar>

      <v-app-bar-title>Heidou</v-app-bar-title>
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
              <v-list-item
                prepend-icon="mdi-view-module"
                title="Mod管理"
                value="mod"
                to="mod">
              </v-list-item>
              <v-list-item
                prepend-icon="mdi-content-save-all-outline"
                title="游戏存档"
                value="save"
                to="save">
              </v-list-item>
              <v-list-item
                prepend-icon="mdi-account-group-outline"
                title="联机助手"
                value="online_helper"
                to="online_helper"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-toolbox-outline"
                title="网站导航/工具"
                value="nav"
                to="nav">
              </v-list-item>
              <v-list-item
                prepend-icon="mdi-cog-outline"
                title="设置"
                value="appConf"
                to="appConf"
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
</template>
<script>
import logo from './assets/logo.png'
import {Window} from '@tauri-apps/api/window';
import More from "@/pages/more.vue";

const appWindow = new Window('main');

export default {
  components: {More},
  data() {
    return {
      logo,
      drawer: true,
      rail: false,
      menus: []
    }
  },
  methods: {
    close() {
      appWindow.close();
    },
    toggleMaximize() {
      appWindow.toggleMaximize();
    },
    minimize() {
      appWindow.minimize();
    },
    startDragging() {
      console.log(1)
      appWindow.startDragging();
    }
  }
}
</script>
<style>
</style>
